

import Message from './src/main.js'
Message.install = function(Vue) {
  Vue.prototype.$message = Message
}
export default Message