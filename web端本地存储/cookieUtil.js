;(function(window, undefined) {
  function getFutureUTCString(seconds) {
    var now = new Date().getTime()
    var future = now + seconds * 1000
    return new Date(future).toUTCString()
  }
  /**
   * @param {Object} opt 包含cookie信息的对象，选项如下
   * key {string} 需要设置的名字
   * value {string} 需要设置的值
   * maxAge {number} 有效期
   * domain {string} domain
   * path {string} path
   * secure {boolean} secure
   * @return {string} opt对应的设置cookie的字符串
   */
  function setItem(opt) {
    var arr = []
    if (opt.key) {
      arr.push(encodeURIComponent(opt.key) + '=' + encodeURIComponent(opt.value))
      opt.expires && arr.push('expires=' + opt.expires)
      opt.domain && arr.push('domain=' + opt.domain)
      opt.path && arr.push('path=' + opt.path)
      opt.secure && arr.push('secure=' + opt.secure)
    }
    document.cookie = arr.join(';') + ';'
  }
  function getItem(key) {
    key = encodeURIComponent(key)
    var cookies = document.cookie.split(';')
    var result
    cookies.forEach(item => {
      var temp = item.split('=')
      if (temp[0] === key) {
        result = decodeURIComponent(temp[1])
      }
    });
    return result
  }

  function removeItem(key, path) {
    let opt = {}
    opt.key = key
    opt.value = ''
    opt.path = path
    opt.expires = getFutureUTCString(-1)
    return setItem(opt)
  }

  var cookieUtil = {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem
  }
  window.cookieUtil = cookieUtil
})(window)