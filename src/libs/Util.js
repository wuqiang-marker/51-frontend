import moment from "moment";

/**
 * 数据安全处理
 */
const safety = {
  // 防止非法数据
  safeData(data) {
    if (typeof data !== "object") {
      return;
    }

    if (data) {
      //  过滤非法数据
      delete data.opDesc;
      delete data.opUuid;
      delete data.crUserUuid;
      delete data.crTime;
      delete data.opUserUuid;
      delete data.opUserName;
      delete data.opUserName;
      delete data.opTime;

      for (let key in data) {
        //  字符串去掉空白
        if (typeof data[key] === "string") {
          data[key] = data[key].trim();
        }

        //  过滤 空字符串 和null 不传递
        if (key === "uuid") {
          // uuid不能穿 空白等
          if (
            data[key] === "" ||
            data[key] == null ||
            data[key] === undefined
          ) {
            delete data[key];
          }
        }

        // 处理日期类型
        if (moment.isDate(data[key])) {
          data[key] = moment(data[key]).format("x");
        }
      }
    }
    return data;
  },
  // 递归预处理数据提交
  preSubmit(data) {
    this.safeData(data);
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === "object") {
          data[key] = this.preSubmit(data[key]);
        }
      }
    }
    return data;
  },
};

const tickCompute = {
  /**
   * 根据当前数据最大值及预设份数等比计算比例尺份数
   * @param {String } maxValue  最大值
   * @param {String} parts  份数
   * @return {Object} returnObject
   */
  init(maxValue, parts) {
    let returnObject = {
      scaleMaxValue: 0,
      scaleArray: null,
    };
    var weiShu = Math.pow(10, Math.floor(Math.log(maxValue) / Math.LN10));
    var beiShu = (maxValue / weiShu).toFixed(1);
    var beiShuSplit = beiShu.split(".");
    var finallyBeiShu;
    if (beiShuSplit[1] == 0) {
      finallyBeiShu = beiShuSplit[0];
    } else if (beiShuSplit[1] > 10) {
      finallyBeiShu = Math.ceil(beiShu).toFixed(1);
    } else if (beiShuSplit[1] < 10) {
      finallyBeiShu = parseInt(beiShuSplit[0]) + 1;
    }
    var scaleMaxValue = 0;
    var scaleArray = new Array();
    if (weiShu > 0) {
      scaleMaxValue = finallyBeiShu * weiShu;
      for (var i = 0; i < parts; i++) {
        scaleArray.push(scaleMaxValue - i * (scaleMaxValue / (parts - 1)));
      }
    }
    returnObject.scaleMaxValue = scaleMaxValue; //返回的比例尺中的最大值
    returnObject.scaleArray = scaleArray; //返回的已分份的比例尺数组
    return returnObject;
  },
};
const extend = {
  init() {
    var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false,
      toString = Object.prototype.toString,
      hasOwn = Object.prototype.hasOwnProperty,
      class2type = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object",
      },
      judge = {
        isFunction: function(obj) {
          return typeof obj === "function";
        },
        isWindow: function(obj) {
          return obj !== null && obj === obj.window;
        },
        isNumeric: function(obj) {
          return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
          return obj === null
            ? String(obj)
            : class2type[toString.call(obj)] || "object";
        },
        isPlainObject: function(obj) {
          if (!obj || typeof obj !== "object" || obj.nodeType) {
            return false;
          }
          try {
            if (
              obj.constructor &&
              !hasOwn.call(obj, "constructor") &&
              !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")
            ) {
              return false;
            }
          } catch (e) {
            return false;
          }
          var key;
          for (key in obj) {
          }
          return key === undefined || hasOwn.call(obj, key);
        },
      };
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1] || {};
      i = 2;
    }
    if (typeof target !== "object" && !judge.isFunction(target)) {
      target = {};
    }
    if (length === i) {
      target = this;
      --i;
    }
    for (i; i < length; i++) {
      if ((options = arguments[i]) !== null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && judge.isPlainObject(copy)) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && judge.isArray(src) ? src : [];
            } else {
              clone = src && judge.isPlainObject(src) ? src : {};
            }
            // WARNING: RECURSION
            target[name] = this.init(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  },
};
const localSession = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key, defaultValue = {}) {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default { safety, extend, tickCompute, localSession };
