import localforage from "localforage";
import config from "../../resources/config";

export default {
  codeListStore: localforage.createInstance({
    name: config.prefixs.sysCodeList
  }),
  codeTreeStore: localforage.createInstance({
    name: config.prefixs.sysCodeTree
  }),
  ajaxStore: localforage.createInstance({
    name: config.prefixs.sysCode
  })
};
