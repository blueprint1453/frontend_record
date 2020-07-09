import Vue from 'vue'
import Main from './main.vue' 
import PopupManager from '../../../utils/popup-manager';

const MessageCtor = Vue.extend(Main)
let instances = []
let index = 0
const GAP = 16

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
  document.body.appendChild(instance.$el)
  instance.$el.style.zIndex = PopupManager.nextZIndex()
  let verticalOffset = options.verticalOffset || 20
  instances.forEach(vm => {
    verticalOffset += vm.$el.offsetHeight + GAP
  })
  instance.verticalOffset = verticalOffset
  instance.visible = true
  instances.push(instance)
  return instance
};

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
  let index = instances.findIndex(vm => vm.id === id)
  if (index !== -1) {
    typeof closeFn === 'function' && closeFn(instances[index])
    instances.splice(index, 1)
    if (index <= instances.length - 1) {
      for (let i = index; i < instances.length; i++) {
        let verticalOffset = instances[i].verticalOffset
        let offsetHeight = instances[i].$el.offsetHeight
        instances[i].verticalOffset = verticalOffset - (GAP + offsetHeight)
      }
    }
  }
}

Message.closeAll = function() {
  console.log('closeAll', instances)
  if (instances.length > 0) {
    instances.forEach(vm => {
      vm.close()
    })
  }
}

export default Message