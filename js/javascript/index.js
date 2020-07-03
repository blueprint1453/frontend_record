Function.prototype.myBind = function(context) {
  var args = [].slice.call(arguments, 1)
  let fn = this
  return function bind() {
    args = args.concat([].slice.call(arguments))
    fn.apply(this instanceof bind ? this : context, args)
  }
}

var obj = {
  name: 'jack'
}
var f1 = function(a, b, c){
  console.log(this.name)
  console.log(arguments)
}

f1.bind(obj, 1)(2, 3)

// / 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function curry1(fn, args = []) {
  let len = fn.length
  return function() {
    args = args.concat([].slice.call(arguments))
    if (args.length >= len) {
      console.log('eee')
      return fn.apply(this, args)
    } else {
      return curry1.call(this, fn, args)
    }
  }
}

var curryFn = curry1(function(a, b, c) {
  console.log(a, b, c)
})

// curryFn(1)(2)(3)
// curryFn(1,2)(3)
curryFn(1, 2, 3)