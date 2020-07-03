; (function (window, doc, undefined) {
  var caches = []  // 缓存已存在的模块
  var baseUrl = '' // 外层公共路径
  var paths = {}   // 模块路径映射

  
  function Module () {}
  
  function scriptErrorCallback(module) {
    return function (error) {
      console.log(error)
    }
  }
  /**
   * 创建script标签的函数
   * @param {String} src 
   */
  function createScript(src) {
    var script = doc.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    doc.body.appendChild(script)
    return script
  }
  /**
   * require函数 导入依赖
   * @param {String} modules 依赖的模块
   * @param {Function} factory 包裹模块代码的函数
   */
  function require(modules, factory) {
    var count = 0;
    var len = modules.length
    var results = []
    for (var i = 0; i < len; i++) {
      var moduleId = modules[i]
      if (caches.indexOf(moduleId) > -1) continue
      var path = paths[moduleId] ? paths[moduleId] : moduleId
      var src = baseUrl + '/' + path + '.js'
      var script = createScript(src)
      script.onload = function () {
        count++
        results.push()
        if (count >= len) factory.apply(null, results)
      }
      script.onerror = scriptErrorCallback(modules[i])
      caches.push(moduleId)
    }
  }

  /**
   * 配置函数
   */
  require.config = function (opt) {
    baseUrl = opt.baseUrl
    paths = opt.paths
  }

  /**
   * 模块定义函数
   * @param {String} id 模块名
   * @param {Array<String>} modules 依赖的模块
   * @param {Function} factory 包裹模块代码的函数
   */
  function define(id, modules, factory) {
    if (modules && modules.length > 0) {
      require(modules, factory)
    } else {
      return factory()
    }
  }
  
  /**
   * 创建主入口script标签的函数
   */
  function createMainScript() {
    var currentScript = doc.querySelector('script[data-main]')
    var mainPath = currentScript.getAttribute('data-main')
    if (caches.indexOf(mainPath) === -1) {
      createScript(mainPath + '.js')
      caches.push(mainPath)
    }
  }
  
  window.require = require
  window.define = define
  createMainScript()

})(window, document)