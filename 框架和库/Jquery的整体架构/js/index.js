(function(grobal, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(grobal) 
  } else if (typeof define === 'function' && define.amd) {
    return factory(grobal)
  } else {
    return factory(grobal, true)
  }
}(typeof window !== 'undefined' ? window : this, function(window, noGlobal) {
  var Jquery = function(selector, context) {
    return new Jquery.fn.init(selector, context)
  }
  Jquery.fn = Jquery.prototype = {
    version: '3.00',
    constructor: Jquery,
  }
  Jquery.extend = Jquery.fn.extend = function() {}

  var init = Jquery.fn.init = function(selector, context, root) {
    // var dom = document.querySelector(selector)
    // return dom
    // return 
  }
  init.prototype = Jquery.fn
  if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function() {
			return jQuery;
		} );
	}
  if(noGlobal) {
    window.Jquery = window.$ = Jquery
  }
  return Jquery

}))