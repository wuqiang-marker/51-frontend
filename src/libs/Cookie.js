import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default {
  /**
   * 想浏览器设置cookie
   * @param {*} name
   * @param {*} value
   */
  saveCookie (name, value) {
    cookies.set(name, value)
  },
  /**
   * 读取浏览器Cookie
   * @param {*} name
   */
  getCookie (name) {
    return cookies.get(name)
  },
  /**
   * 移除Cookie
   * @param {*} name
   */
  removeCookie (name) {
    cookies.remove(name)
  }
}
