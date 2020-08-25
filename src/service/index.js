import ElementUI from "element-ui";

WebSocketService.onTopic(
  "OBSERVER_TOPIC_CACHE_CODE",
  CacheService.OBSERVER_TOPIC_CACHE_CODE
);
WebSocketService.onTopic(
  "OBSERVER_TOPIC_CACHE_TREE",
  CacheService.OBSERVER_TOPIC_CACHE_TREE
);
WebSocketService.onTopic("OBSERVER_TOPIC_EVENT", data => {
  data.message || ElementUI.Notification.success({ message: data.message });
});
