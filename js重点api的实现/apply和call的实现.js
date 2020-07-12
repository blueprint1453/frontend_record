
Function.prototype._apply = function(context) {
  context = context || window
  context.fn = this
  var args = arguments[1]
  var result = Array.isArray(args) ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}

Function.prototype._call = function(context, ...rest) {
  context = context || window
  context.fn = this
  var result = context.fn(...rest)
  delete context.fn
  return result
}