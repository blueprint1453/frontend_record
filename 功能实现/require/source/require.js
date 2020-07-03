
var PENDING = 0
var RESOLVED = 1
var REJECTED = 2

var isRequired = false

var modules = []
var depsMap = {}

function listenAttr(obj, key, value, handler) {
  var _value = value
  Object.defineProperty(obj, key, {
    get() {
      return _value
    },
    set(newValue) {
      _value = newValue
      handler(_value)
    },
    enumerable: true
  })
}

/**
 * 定义module
 * @param {*} id 
 * @param {*} deps 
 * @param {*} func 
 */
function Module(id, deps, func) {
  this.id = id
  this.deps = deps
  this.func = func
  this.loadDepCount = 0
  this.loadStatus = PENDING
  this.exports = null
}



function createScript(src) {
  var scriptUrl = src.replace(/\.js/g, '')
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.setAttribute('data-id', scriptUrl)
  script.id = 'scriptUrl'
  script.src = scriptUrl + '.js'
  document.body.appendChild(script)
  return script
}

function checkScriptHasCreated(id) {
  var script = document.getElementById(id)
  return !!script
}

function require() {
  if (isRequired) {
    throw new Error('require function can not repeated call')
  }
  isRequired = true 
  
  var deps, func
  var args = arguments
  deps = Array.isArray(args[0]) ? args[0] : [args[0]]
  func = typeof args[1] === 'function' ? args[1] : undefined
  
  let mainId = 'main' + new Date().getTime()
  var mainModule = new Module(mainId, deps, func)
  modules.push(mainModule)
  collectDeps(mainId, deps)

  listenAttr(mainModule, 'loadDepCount', mainModule.loadDepCount, function (depCount) {
    if (depCount === mainModule.deps.length) {
      let results = []
      mainModule.deps.forEach(depId => {
        var depModule = modules.find(mod => mod.id === depId)
        results.push(depModule.exports)
      })
      func.apply(null, results)
    }
  })

  deps.forEach(function (id) {
    // 暂不考虑路径问题
    var src = id + ''
    var script = createScript(src)
    // if (!checkScriptHasCreated(src)) {
    //   var script = createScript(src)
    // }
  })
}


function define() {
  var id, deps, moduleContext
  var args = arguments
  if (args.length === 1) {
    id = undefined
    deps = []
    moduleContext = args[0]
  } else if (args.length === 2) {
    if (Array.isArray(args[0])) {
      id = undefined
      deps = args[0]
    } else {
      id = args[0]
      deps = []
    }
    moduleContext = args[1]
  } else if (args.length === 3) {
    id = args[0]
    deps = Array.isArray(args[1]) ? args[1] : []
    moduleContext = args[2]
  }
  // 注册模块
  let module = new Module(id, deps, moduleContext)
  modules.push(module)

  listenAttr(module, 'loadDepCount', module.loadDepCount, function (depCount) {
    var deps = module.deps
    if (depCount === deps.length) {
      let results = []
      deps.forEach(depId => {
        var depModule = modules.find(mod => mod.id === depId)
        results.push(depModule.exports)
      })
      module.exports = module.func(results)
      this.loadStatus = RESOLVED
      let beDeps = depsMap[id] || []
      beDeps.forEach(function (depId) {
        var depModule = modules.find(mod => mod.id === depId)
        console.log(depModule, modules, depId)

        depModule.loadDepCount++
      })
    }
  })

  listenAttr(module, 'loadStatus', PENDING, function (status) {
    if (status === RESOLVED) {
      let beDeps = depsMap[id] || []
      console.log(depsMap, )
      beDeps.forEach(function (depId) {
        var depModule = modules.find(mod => mod.id === depId)
        depModule.loadDepCount++
      })
    }
  })

  if (deps.length === 0) {
    let result = typeof moduleContext === 'function' ? moduleContext() : moduleContext
    module.exports = result
    module.loadStatus = RESOLVED

  } else {
    // 依赖收集
    collectDeps(id, deps)

    deps.forEach(function (id) {
      var src = id + ''
      var script = createScript(src)
      // if (!checkScriptHasCreated(src)) {
      //   var script = createScript(src)
      // }
    })
  }
}

function collectDeps(id, deps) {
  deps.forEach(function (depId) {
    console.log(  Array.isArray(depsMap[depId]), depsMap[depId], id)
    depsMap[depId] = Array.isArray(depsMap[depId]) ? depsMap[depId].push(id) : [id]
    console.log(  Array.isArray(depsMap[depId]), depId , depsMap[depId])

  })
}


require.config = function () { }

function initMain() {
  var currentScript = document.querySelector('script[data-main]')
  if (currentScript !== null) {
    var mainPath = currentScript.getAttribute('data-main')
    createScript(mainPath + '.js')
  }
}

window.require = require
window.define = define
initMain()