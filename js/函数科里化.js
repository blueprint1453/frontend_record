// 函数柯里化
function fe(a, b, c) {
  return a + b + c;
}

function curry(fe) {
  let args = []; // 参数集合
  let len = args.length;
  return function bar() {
    console.log(arguments)
    console.log(fe.length)
      args = [...args, ...arguments]; // 收集参数
      if (args.length >= fe.length) {
          return fe.apply(this, args);
      }
      return bar;
  }
}
function cury(fn) {
var args = []
return function bar() {
  args = [...args, ...arguments]
  if (args.length >= fe.length) {
    return fe.apply(null, args)
  }
  return bar
}
}
console.log(cury(fe)(2)(3)(4))