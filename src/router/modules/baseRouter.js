import NotFound from "@/views/other/404.vue";
import Home from "@/views/Home.vue";

export default [
  {
    base: "/history",
    path: "/",
    title: "首页",
    component: Home,
    children: [
      // {
      //   path: "/",
      //   name: "主页",
      //   component: () => import("@/views/Main.vue"),
      // },
      {
        path: "/",
        name: "城市管理",
        component: () => import("@/views/CityManagement.vue"),
      },
      {
        path: "/ContingencyManagement",
        name: "应急管理",
        component: () => import("@/views/ContingencyManagement.vue"),
      },
      {
        path: "/EconomicalOperation",
        name: "经济运行",
        component: () => import("@/views/EconomicalOperation.vue"),
      },
      {
        path: "/ecologicalEnvironment",
        name: "生态环境",
        component: () => import("@/views/ecologicalEnvironment.vue"),
      },
      {
        path: "/HuaiYinOverview",
        name: "槐荫总览",
        component: () => import("@/views/HuaiYinOverview.vue"),
      },
      {
        path: "/healthCare",
        name: "康养医疗",
        component: () => import("@/views/healthCare.vue"),
      },
      {
        path: "/goodGovernance",
        name: "优政善政",
        component: () => import("@/views/goodGovernance.vue"),
      },
      {
        path: "/ActiveCircle",
        name: "智能预警",
        component: () => import("@/views/ActiveCircle.vue"),
      },
    ],
  },
  { path: "/404", hidden: true, component: NotFound },
];
