<template>
  <div class="welcome">
    <Header
      @func="getMsgFormSon"
      @searchPOI="searchPOI"
      style="position: relative;z-index: 10001;"
      v-if="headerStatus"
    />
    <div id="player" style="display:none;"></div>
    <div class="begin" id="begin">
      <button type="button" class="cloud-btn">立即体验</button>
    </div>

    <div class="btn" v-on:click="addCustomPOI()">一键添加点位</div>
    <!-- <div class="btn btn2" v-on:click="CheckVersion()">CheckVersion</div> -->
    <router-view style="position:absolute;z-index:10001;pointer-events: none;" v-if="headerStatus" />
  </div>
</template>
<style lang="scss" scoped>
div.welcome {
  /* background-image: url("assets/image/background_1920.png");
  background-position: 100% 100%;
  background-size: cover; */
  background-color: rgb(14, 20, 32);
  height: 100%;
  width: 100%;
  .btn {
    position: fixed;
    right: 2.2%;
    top: 5.8%;
    color: #fff;
    background: #3992d0;
    border-radius: 10%;
    border: 1px solid #3992d0;
    padding: 5px 20px;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    z-index: 20000;
    display: none;
  }
  .begin {
    text-align: center;
    font-size: 16px;
    padding: 0;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    z-index: 10003;
  }
  .btn2 {
    top: 100px;
  }
  .btn.show {
    display: inline-block;
  }
}
</style>
<script>
import Vue from "vue";
import Header from "@/views/modules/layout/Header";
const cloudRender = new cloudRenderer("player", 0);
export default {
  components: { Header },
  data() {
    return {
      headerStatus: true,
      poiIdList: [
        { name: "槐荫区政府", id: "customPOI_ID_1" },
        { name: "济南国际医学科学中心", id: "customPOI_ID_2" },
        { name: "济南西站", id: "customPOI_ID_3" },
      ],
      inputValue: "",
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    getMsgFormSon(data) {
      this.inputValue = data.input;
      console.log(data.input);
      this.searchPOI();
    },
    //查询POI点位
    searchPOI() {
      var search = this.inputValue;
      var poiId = "";
      if (search) {
        this.poiIdList.forEach(function (item, index) {
          if (item.name === search) {
            poiId = item.id;
            return;
          }
        });
        cloudRender.SuperAPI("GetPOIScreenRange", poiId);
        setTimeout(() => cloudRender.SuperAPI("FocusPOI", poiId, 1800), 5e2);
      }
    },
    // 聚焦全部POI点
    focusAllPOI() {
      cloudRender.SuperAPI("FocusAllPOI");
    },
    init() {
      "use strict";
      var that = this;
      // 本地云渲染测试地址
      let _url = "http://192.168.89.90:8889", //云渲染客户端IP地址或域名, 端口号8889固定
        caseID = "5f275f9623a5bd36a4f40d8e", //项目ID, 在云渲染客户端上获取
        username = "jnhyznzx", //用户名, 在云渲染客户端上获取
        password = "jnhyznzx123456"; //密码, 在云渲染客户端上获取

      function GetUrlStartRenderCloud() {
        fetch(`${_url}/autoLogin`, {
          method: "POST",
          body: `username=${username}&pwd=${password}`,
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.token) {
              fetch(`${_url}/Renderers/Any/${caseID}`, {
                method: "POST",
                headers: {
                  "Content-type": "application/x-www-form-urlencoded",
                  Authorization: `Bearer ${json.token}`,
                },
                //初始化云渲染输出分辨率, 可选, 默认以云渲染客户端设置的分辨率输出
                body: `width=${window.innerWidth}&height=${
                  (window.innerHeight / 100) * 90
                }`,
              })
                .then((res) => res.json())
                .then((json) => {
                  if (json.url) {
                    // 启动云渲染
                    cloudRender.SuperAPI("StartRenderCloud", json.url);
                  }
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

      const cloudBtn = document.querySelector(".cloud-btn");
      cloudBtn.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          // 启动云渲染
          GetUrlStartRenderCloud();

          // 事件注册
          cloudRender.SuperAPI(
            "RegisterCloudResponse",
            myHandleResponseFunction
          );

          cloudBtn.setAttribute("disabled", "disabled");
          document.getElementById("begin").setAttribute("style", "z-index:0");
          cloudBtn.textContent = "Loading ...";
        },
        true
      );

      // 事件注册函数
      function myHandleResponseFunction(data) {
        console.log("receive: " + data);
        let jsonObject = JSON.parse(data);
        console.log(jsonObject);
        switch (jsonObject.func_name) {
          case "beginPlay":
            console.log("beginPlay: 云渲染连接成功");
            //建立通信成功 业务逻辑...
            break;

          case "OnUESuperAPIVersion":
            console.log("UE SuperAPI Version: " + jsonObject.args.version);
            //返回 UE SuperAPI Version
            break;

          case "OnUESuperAPIInfomation":
            console.log("appID: " + jsonObject.args.appid);
            console.log("Rights: " + jsonObject.args.user_rights);
            //appID: 点聚和projectID, Rights: 商业授权
            break;

          case "OnCheckVersion":
            console.log("UE SuperAPI Version: " + jsonObject.args.version);
            //返回 cloudRender.SuperAPI('superAPI'); check UE SuperAPI Version
            break;

          case "APIAlready":
            console.log("APIAlready: 3D世界加载完成");
            //云渲染场景加载完成 业务逻辑...
            that.headerStatus = true;
            document.querySelector(".btn").classList.add("show");
            document.querySelector(".btn2").classList.add("show");
            break;

          case "OnPOIClick":
            console.log("OnPOIClick_id = " + jsonObject.args.id);
            setTimeout(
              () => cloudRender.SuperAPI("FocusPOI", jsonObject.args.id, 1500),
              5e2
            );
            // 返回一个点击POI的ID值
            break;
        }
      }
      cloudRender.SuperAPI_SetLogMode(true);
    },
    // 添加自定义POI点
    addCustomPOI() {
      let _url = "https://superapi.51hitech.com/images/static/";
      let customPOIdata = [
        {
          id: "customPOI_ID_1", //POI id
          coord_type: "0", //坐标类型(0: 经纬度坐标，1: cad坐标)
          cad_mapkey: "", //CAD基准点的Key值, 项目中约定
          coord: "116.89532911149445,36.65275681516141", //POI点的坐标
          coord_z: "0", //高度(米)
          always_show_label: "true",
          //是否永远显示title, true:显示提示文本(默认), false:不显示提示文本
          show_label_range: "0,6000",
          //此POI点显示title的摄像机距离范围(单位米, 范y围最小距离, 范围最大距离; 在此范围内显示, 超出范围隐藏title;注意: always_show_label 属性优先于此属性)
          sort_order: "false",
          //是否开启遮挡排序(根据POI真实3D位置开启遮挡排序,注1:只与其他开启排序的POI之间进行排序;注2:开启此排序会消耗性能(最多60个POI同时开启排序))
          state: "state_1",
          //与marker之中images中的define_state对应
          marker: {
            size: "100, 228",
            //Marker大小(宽, 高 单位:像素)
            images: [
              {
                define_state: "state_1",
                normal_url: _url + "markerNormal.png",
                //normal时图片url地址(本地地址:"file:///Z:/自定义目录/poiNormal.png")
                activate_url: _url + "markerActive.png",
                //hover, active时图片url地址(本地地址:"file:///Z:/自定义目录/poiActive.png")
              },
              {
                define_state: "state_2",
                normal_url: _url + "markerNormal2.png",
                activate_url: _url + "markerActive2.png",
              },
            ],
          },
          label: {
            bg_image_url: _url + "LabelBg.png",
            //label背景图片url地址(本地地址:"file:///Z:/自定义目录/poiLabelbg.png")
            size: "100,34", //label大小(单位:像素)
            offset: "50,194",
            //整个label左上角相对于Marker的中心点(整个Marker的底部、中间位置)的偏移(x,y 单位 像素), 注: x为正向右, y为正向上
            text: "槐荫区政府", //label中的文本内容
            font_color: "fafafaff", //label中文本颜色: HEXA格式
            text_boxsize: "100,24", //label中文本框的大小 (单位像素)
            text_offset: "0,5",
            //label中文本框左上角相对于label左上角的margin偏移(x,y 单位像素), 注: x为正向右, y为正向下
          },
          window: {
            url: _url + "modal8.html",
            //window窗口url地址(本地地址:"file:///Z:/自定义目录/modal8.html", 注: 视频内容, 仅支持webm, ogg格式的视频)
            size: "520,350",
            //window的大小(单位:像素), 注: 应与页面中有效部分大小一致, 禁止使用css margin属性, 会有滚动条
            offset: "50,180",
            //window左上角相对于Marker的中心点(整个Marker的底部、中间位置)的偏移(x,y 单位 像素), 注: x为正向右, y为正向上
          },
        },
        {
          id: "customPOI_ID_2", //POI id
          coord_type: "0", //坐标类型(0: 经纬度坐标，1: cad坐标)
          cad_mapkey: "", //CAD基准点的Key值, 项目中约定
          coord: "116.97604362281052,36.65385513982602", //POI点的坐标
          coord_z: "0", //高度(米)
          always_show_label: "true",
          //是否永远显示title, true:显示提示文本(默认), false:不显示提示文本
          show_label_range: "0,6000",
          //此POI点显示title的摄像机距离范围(单位米, 范围最小距离, 范围最大距离; 在此范围内显示, 超出范围隐藏title;注意: always_show_label 属性优先于此属性)
          sort_order: "false",
          //是否开启遮挡排序(根据POI真实3D位置开启遮挡排序,注1:只与其他开启排序的POI之间进行排序;注2:开启此排序会消耗性能(最多60个POI同时开启排序))
          state: "state_1",
          //与marker之中images中的define_state对应
          marker: {
            size: "100, 228",
            //Marker大小(宽, 高 单位:像素)
            images: [
              {
                define_state: "state_1",
                normal_url: _url + "markerNormal.png",
                //normal时图片url地址(本地地址:"file:///Z:/自定义目录/poiNormal.png")
                activate_url: _url + "markerActive.png",
                //hover, active时图片url地址(本地地址:"file:///Z:/自定义目录/poiActive.png")
              },
              {
                define_state: "state_2",
                normal_url: _url + "markerNormal2.png",
                activate_url: _url + "markerActive2.png",
              },
            ],
          },
          label: {
            bg_image_url: _url + "LabelBg.png",
            //label背景图片url地址(本地地址:"file:///Z:/自定义目录/poiLabelbg.png")
            size: "100,34", //label大小(单位:像素)
            offset: "50,194",
            //整个label左上角相对于Marker的中心点(整个Marker的底部、中间位置)的偏移(x,y 单位 像素), 注: x为正向右, y为正向上
            text: "济南国际医学科学中心", //label中的文本内容
            font_color: "fafafaff", //label中文本颜色: HEXA格式
            text_boxsize: "100,24", //label中文本框的大小 (单位像素)
            text_offset: "0,5",
            //label中文本框左上角相对于label左上角的margin偏移(x,y 单位像素), 注: x为正向右, y为正向下
          },
          window: {
            url: _url + "modal8.html",
            //window窗口url地址(本地地址:"file:///Z:/自定义目录/modal8.html", 注: 视频内容, 仅支持webm, ogg格式的视频)
            size: "520,350",
            //window的大小(单位:像素), 注: 应与页面中有效部分大小一致, 禁止使用css margin属性, 会有滚动条
            offset: "50,180",
            //window左上角相对于Marker的中心点(整个Marker的底部、中间位置)的偏移(x,y 单位 像素), 注: x为正向右, y为正向上
          },
        },
        {
          id: "customPOI_ID_3", //POI id
          coord_type: "0", //坐标类型(0: 经纬度坐标，1: cad坐标)
          cad_mapkey: "", //CAD基准点的Key值, 项目中约定
          coord: "116.88585927413092,36.66951113968346", //POI点的坐标
          coord_z: "0", //高度(米)
          always_show_label: "true",
          //是否永远显示title, true:显示提示文本(默认), false:不显示提示文本
          show_label_range: "0,6000",
          //此POI点显示title的摄像机距离范围(单位米, 范围最小距离, 范围最大距离; 在此范围内显示, 超出范围隐藏title;注意: always_show_label 属性优先于此属性)
          sort_order: "false",
          //是否开启遮挡排序(根据POI真实3D位置开启遮挡排序,注1:只与其他开启排序的POI之间进行排序;注2:开启此排序会消耗性能(最多60个POI同时开启排序))
          state: "state_1",
          //与marker之中images中的define_state对应
          marker: {
            size: "100, 228",
            //Marker大小(宽, 高 单位:像素)
            images: [
              {
                define_state: "state_1",
                normal_url: _url + "markerNormal.png",
                //normal时图片url地址(本地地址:"file:///Z:/自定义目录/poiNormal.png")
                activate_url: _url + "markerActive.png",
                //hover, active时图片url地址(本地地址:"file:///Z:/自定义目录/poiActive.png")
              },
              {
                define_state: "state_2",
                normal_url: _url + "markerNormal2.png",
                activate_url: _url + "markerActive2.png",
              },
            ],
          },
          label: {
            bg_image_url: _url + "LabelBg.png",
            //label背景图片url地址(本地地址:"file:///Z:/自定义目录/poiLabelbg.png")
            size: "100,34", //label大小(单位:像素)
            offset: "50,194",
            //整个label左上角相对于Marker的中心点(整个Marker的底部、中间位置)的偏移(x,y 单位 像素), 注: x为正向右, y为正向上
            text: "济南西站", //label中的文本内容
            font_color: "fafafaff", //label中文本颜色: HEXA格式
            text_boxsize: "100,24", //label中文本框的大小 (单位像素)
            text_offset: "0,5",
            //label中文本框左上角相对于label左上角的margin偏移(x,y 单位像素), 注: x为正向右, y为正向下
          },
          window: {
            url: _url + "modal8.html",
            //window窗口url地址(本地地址:"file:///Z:/自定义目录/modal8.html", 注: 视频内容, 仅支持webm, ogg格式的视频)
            size: "520,350",
            //window的大小(单位:像素), 注: 应与页面中有效部分大小一致, 禁止使用css margin属性, 会有滚动条
            offset: "50,180",
            //window左上角相对于Marker的中心点(整个Marker的底部、中间位置)的偏移(x,y 单位 像素), 注: x为正向右, y为正向上
          },
        },
      ];
      cloudRender.SuperAPI("RemoveAllPOI");
      var ss = [];
      for (var i in customPOIdata) {
        ss.push(customPOIdata[i]); //属性
        cloudRender.SuperAPI("AddCustomPOI", ss[i]);
      }
      setTimeout(
        () => cloudRender.SuperAPI("FocusPOI", "customPOI_ID3", 1800),
        5e2
      );
    },
  },
};
</script>
