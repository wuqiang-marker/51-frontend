import axios from "axios";
import Vue from "vue";
import Store from "../vuex/index";
import { Message, Notification } from "element-ui";

import config from "../resources/config";
import Util from "./Util";
import querystring from "querystring";

//  支持额外属性:
//  ① message: 如果为false,则不会提示服务器返回respDesc信息
//  ② cache : 使用本地缓存?如果使用,数据会本地缓存一份.可以穿字符串,作为key的前缀,如果传递force,表示强刷

// 记录最低数据权限对象缓存
//  const dataLowAuth = new Map();
// 当前使用的数据权限(当前路由信息地址)
//  let currentDataAuth = '';

//  应用使用的AJAX库
let ajax = axios.create({
  baseURL: config.ajaxUrl,
  params: {},
  validateStatus: function(status) {
    //  服务器响应200-299状态码,才判定成功
    return status >= 200 && status < 300;
  },
  timeout: config.tomeOut,
});

/**
 * 根据配置,找到对应的缓存key
 * @param {String} category
 * @param {String} url
 * @param {Object} params
 */
const getStorageKey = (category, url, params) => {
  Util.safety.safeData(params);
  let queryStr = querystring.stringify(params);
  let storageKey = category + ":" + url + (queryStr ? "?" + queryStr : "");
  return storageKey;
};
const origPost = ajax.post;

ajax.post = (path, config) => {
  if (!config) {
    return origPost(path, config);
  }
  // 处理如果是下载
  if (config.params && config.params.agile && config.params.down) {
    let fullURI =
      ajax.defaults.baseURL + path + "?" + querystring.stringify(config.params);
    window.open(fullURI);
    return new Promise((resolve, reject) => {});
  }

  if (config && config.cache) {
    let fullURL = ajax.defaults.baseURL + path;
    if (config.cache === true) {
      config.cache = "unknow_cache_key";
    }
    let cacheStore = config.cacheStore;
    fullURL = fullURL.replace("// ", "/");
    let storageKey = getStorageKey(config.cache, fullURL, config.params);
    if (storageKey !== null) {
      return new Promise((resolve, reject) => {
        if (config.force === true) {
          cacheStore.removeItem(storageKey).then(() => {
            origPost(path, config)
              .then(resolve)
              .catch(reject);
          });
        } else {
          cacheStore
            .getItem(storageKey)
            .then((data) => {
              if (data) {
                resolve(data);
              } else {
                origPost(path, config)
                  .then(resolve)
                  .catch(reject);
              }
            })
            .catch(() => {
              origPost(path, config)
                .then(resolve)
                .catch(reject);
            });
        }
      });
    }
  }

  return origPost(path, config);
};
// 代理get请求
// ①进行ajax请求缓存,仅缓存get请求,开启缓存,使用配置项 cache : true
const origGet = ajax.get;
ajax.get = (path, config) => {
  if (!config) {
    return origGet(path, config);
  }
  // 处理如果是下载
  if (config.params && config.params.agile && config.params.down) {
    let fullURI =
      ajax.defaults.baseURL + path + "?" + querystring.stringify(config.params);
    window.open(fullURI);
    return new Promise((resolve, reject) => {});
  }

  if (config && config.cache) {
    let fullURL = ajax.defaults.baseURL + path;
    if (config.cache === true) {
      config.cache = "unknow_cache_key";
    }
    let cacheStore = config.cacheStore;
    fullURL = fullURL.replace("// ", "/");
    let storageKey = getStorageKey(config.cache, fullURL, config.params);
    if (storageKey !== null) {
      return new Promise((resolve, reject) => {
        if (config.force === true) {
          cacheStore.removeItem(storageKey).then(() => {
            origGet(path, config)
              .then(resolve)
              .catch(reject);
          });
        } else {
          cacheStore
            .getItem(storageKey)
            .then((data) => {
              if (data) {
                resolve(data);
              } else {
                origGet(path, config)
                  .then(resolve)
                  .catch(reject);
              }
            })
            .catch(() => {
              origGet(path, config)
                .then(resolve)
                .catch(reject);
            });
        }
      });
    }
  }

  return origGet(path, config);
};

//  请求处理
function onRequest(config) {
  //  校正page 服务器从0开始.client 从1开始
  if (config.params) {
    config.params.page && config.params.page--;
  }
  let token = "7fe03e16-43e7-4eda-9cf3-fcf91a35da1f";
  //判断是否存在token，如果存在的话，则每个http header都加上token
  config.headers = {
    "Content-Type": "application/json",
    AppKey: `${token}`,
  };
  config.responseType = "json";

  // 防止非法数据
  Util.safety.preSubmit(config.data);
  Util.safety.preSubmit(config.params);

  Vue.prototype.$Progress.start();

  return config;
}

/**
 * 请求错误
 * @param error
 * @return {Promise.<*>}
 */
function onRequestError(error) {
  return Promise.reject(error);
}

/**
 *  响应处理 , 200状态下的响应
 * ② 只有,当服务器返回 000000 的时候,才返回.否则抛弃
 * @param {*} response
 */
function onResponse(response) {
  Vue.prototype.$Progress.finish();
  let { respCode, respDesc } = response.data;

  if (respCode === undefined || respCode === config.respCode.success) {
    //  不是get请求 && 有respDesc && message属性不是false && respDesc是文本
    if (
      response.config.method !== "get" &&
      response.data.respDesc &&
      typeof response.data.respDesc === typeof String() &&
      response.config.message !== false
    ) {
      Message.success({
        message: response.data.respDesc,
        duration: 1000,
      });
    }

    // 插入缓存
    let config = response.config;

    if (config && config.cache) {
      let cacheStore = config.cacheStore;
      let storageKey = getStorageKey(config.cache, config.url, config.params);
      cacheStore.setItem(storageKey, response.data);
    }

    return response.data;
  } else {
    let error = new Error(respDesc);

    if (respCode === config.respCode.timeout) {
      //  通知系统,超时了
      Store.dispatch("base/timeout");
      return;
    }

    // 系统错误,要直接显示系统错误.
    // respDesc是文本 && message属性不是false
    if (
      typeof response.data.respDesc === typeof String() &&
      response.config.message !== false
    ) {
      Message.error({
        message: response.data.respDesc,
        duration: 1000,
      });
    }
    if (respCode === config.respCode.validat) {
      Message.error({
        message: JSON.stringify(response.data.respDesc),
        duration: 1000,
      });
    }
    error.data = response.data;
    error.validError = {};
    if (respCode === config.respCode.validat) {
      error.validError = respDesc || {};
    }

    return Promise.reject(error);
  }
}

/**
 * 响应异常 服务器500 404 406 405 401 等
 * @param error
 * @return {Promise.<*>}
 */
function onResponseError(error) {
  //  从国际化中取,然后看服务器响应的[message],如果不存在,使用状态码文本
  if (error.response) {
    let message =
      Vue.t("httpError." + error.response.status) || error.response.statusText;

    Notification.error({
      title: Vue.t("httpError.title"),
      message: message,
    });
  }

  return Promise.reject(error);
}

ajax.interceptors.request.use(onRequest, onRequestError);
ajax.interceptors.response.use(onResponse, onResponseError);

export default ajax;
