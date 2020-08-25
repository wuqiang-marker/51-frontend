import CacheStores from './CacheStores'
import store from '../vuex'
import { Notification } from 'element-ui'

let notify = () => {
  Notification.success({
    title: '成功',
    message: '系统字典已经更新.',
  })
}

export default {
  // 监听字典改变
  OBSERVER_TOPIC_CACHE_CODE(data) {
    store.dispatch('refreshSysCode', data.message.codetype).then(notify)
  },

  // 监听树改变
  OBSERVER_TOPIC_CACHE_TREE(data) {
    CacheStores.codeTreeStore
      .iterate((value, key, iterationNumber) => {
        if (key.startsWith(data.message.treetype)) {
          CacheStores.codeTreeStore.removeItem(key)
        }
      })
      .then(notify)
      .then(() => {
        CacheStores.codeTreeStore.setItem('VERSION', data.message.version)
      })
  },

  /**
   * 修正缓存数据
   * @param {String } tocpic  要修正的主题
   * @param {String} version  检测版本号.
   */
  repairWith(tocpic, version) {
    if (!version) {
      return
    }
    if (!tocpic) {
      return
    }

    // 树刷新
    if (tocpic === 'OBSERVER_TOPIC_CACHE_TREE') {
      CacheStores.codeTreeStore.getItem('VERSION').then(data => {
        if (data !== version) {
          CacheStores.codeTreeStore.iterate((value, key, iterationNumber) => {
            CacheStores.codeTreeStore.removeItem(key)
          })
        }
        CacheStores.codeTreeStore.setItem('VERSION', version)
      })
    }

    // 字典项刷新
    if (tocpic === 'OBSERVER_TOPIC_CACHE_CODE') {
      CacheStores.codeListStore.getItem('VERSION').then(data => {
        if (data !== version) {
          CacheStores.codeListStore.iterate((value, key, iterationNumber) => {
            CacheStores.codeListStore.removeItem(key)
          })
        }
        CacheStores.codeListStore.setItem('VERSION', version)
      })
    }
  },
}
