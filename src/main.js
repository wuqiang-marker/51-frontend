import "babel-polyfill"; //支持IE9 等低版本浏览器不支持ES6
import Vue from "vue";
import Vuex from "vuex";
import ElementUI from "element-ui";
import VueProgressBar from "vue-progressbar";
import Vue2Filters from "vue2-filters";
import VueMoment from "vue-moment";
import router from "./router";
import store from "./vuex";
import "./styles/index.scss";
import "./styles/public.scss";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import echarts from "echarts";
import "./assets/icon/iconfont.css";
import './styles/font.scss';

Vue.config.productionTip = false;
ElementUI.Dialog.props.closeOnClickModal.default = false;

Vue.use(ElementUI, {
  size: "compact",
  zIndex: 3000,
});

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vue2Filters);
Vue.use(ElementUI);
Vue.use(VueProgressBar, { thickness: "3px" });
Vue.use(VueMoment);

Vue.prototype.$echarts = echarts;

Vue.moment.locale("zh-cn"); //中文时间

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
