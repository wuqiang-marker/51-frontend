import config from "../../resources/config";

let interval;
let intervalTime = 1000 * 10;
let topicSub = {};
let socket = null;

/**
 * 处理消息
 * @param {} message
 */
let onmessage = message => {
  let data = JSON.parse(message.data);
  let topicSubs = topicSub[data.topic];
  if (topicSubs) {
    for (let index in topicSubs) {
      let processFn = topicSubs[index];
      processFn(data);
    }
  }
};

/**
 * 启动
 */
let bootstrap = () => {
  socket = null;
  connect();
  interval = setInterval(connect, intervalTime);
};

/**
 * 打开连接后处理
 */
let onopen = () => {
  clearInterval(interval);
  socket.onmessage = onmessage;
  // 如果关闭,重新开启
  socket.onclose = bootstrap;
  // 如果关闭,重新开启
  socket.onerror = bootstrap;
};

/**
 * 添加主题订阅
 * @param {String} topic 主题
 * @param {Function} serviceFn 处理函数
 */
let onTopic = (topic, serviceFn) => {
  topicSub[topic] = topicSub[topic] || [];
  topicSub[topic].push(serviceFn);
};

/**
 * 执行连接
 */
let connect = () => {
  if (socket != null && socket.readyState !== 3) {
    return;
  }
  try {
    socket = new WebSocket(`${config.context.webSocketURL}cacheobserver`);
    socket.onopen = onopen;
  } catch (e) {}
};

export default {
  bootstrap,
  onTopic,
  connect
};
