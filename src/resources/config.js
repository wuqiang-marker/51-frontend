function envOr(a, b) {
  return process.env.NODE_ENV === "development" ? a : b;
}
let ajaxUrl = envOr("/api", "");
let config = {
  title: "爱茉莉",
  //是否使用后台数据进行菜单的生成
  isAPIMenu: false,
  context: {
    protocol: window.location.protocol,
    domain: document.domain,
    port: window.location.port,
    webSocketURL: `ws://${document.domain}:${window.location.port}${ajaxUrl}/`,
  },
  captchaUrl: ajaxUrl + "/anon/captcha.jpg",
  ajaxUrl: ajaxUrl,
  tomeOut: 30000,
  loginToken: "cnetong_apps_entsvrplt_frontend",
  loginTokenNeedChangePwd: "loginToken-ncp",
  codeMap: {
    userstat: "用户状态",
    operDataOpType: "交互数据操作类型",
    loginType: "登录类型",
  },
  prefixs: {
    sysCodeList: "code:list",
    sysCodeTree: "code:tree",
    ajax: "ajax",
  },
  respCode: {
    success: "000000",
    failure: "000400",
    validat: "000300",
    timeout: "000100",
  },
};

export default config;
