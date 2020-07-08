import Vue from 'vue'
import Main from './main.vue' 
import PopupManager from '../../../utils/popup-manager';

const MessageCtor = Vue.extend(Main)
let instances = []
let index = 0

const Message = function(options) {
  options = options || {}
  if (typeof options === 'string') {
    message = options
    options = {}
    options.message = message
  }
  let id = `message_${index++}`
  let userClose = options.onClose
  options.onClose = function() {
    Message.close(id, userClose)
  }
  const instance = new MessageCtor({
    el: document.createElement('div'),
    data: options
  })
  instance.id = id
  instance.$el.style.zIndex = PopupManager.nextZIndex()
  document.body.appendChild(instance.$el)
  instance.visible = true
  instances.push(instance)
  return instance
}

['info', 'success', 'warn', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      message = options
      options = {}
      options.message = message
    }
    options.type = type
    return Message(options)
  }
})

/**
 * 关闭message弹框
 */
Message.close = function(id, closeFn) {
  let instance = instance
}

export default Message