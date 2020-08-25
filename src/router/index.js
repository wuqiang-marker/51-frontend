import Vue from "vue";
import VueRouter from "vue-router";
import BaseRouter from "./modules/baseRouter";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  base: "/online/",
  routes: BaseRouter
});

export default router;
