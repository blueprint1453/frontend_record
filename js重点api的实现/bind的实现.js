
      // 1. 基础版 不考虑new调用
      Function.prototype._bind = function() {
        var args = Array.prototype.slice.call(arguments);
        var context = args.shift();
        var fn = this;
        return function() {
          args = Array.prototype.concat.apply(arguments, args);
          fn.apply(context, args);
        };
      };

      function test() {
        console.log(this.age);
      }
      var obj = {
        age: 48
      };
      var bound = test._bind(obj);
      bound(); // 48
      // 2. 考虑new调用
      var newBound = new bound(); // 48 
      Function.prototype._bind = function() {
        var args = Array.prototype.slice.call(arguments);
        var context = args.shift();
        var fn = this;
        var bound = function() {
          args = Array.prototype.concat.apply(arguments, args);
          // 如果被new调用，this应该bound的实例
          if (this instanceof bound) {
            fn.apply(this, args);
          } else {
            fn.apply(context, args);
          }
        };
        var empty = function() {};
        empty.prototype = this.prototype;
        bound.prototype = new empty();
        /**
         * 这样当new调用fBound后，实例依然能访问fToBind的原型方法
         * 为什么不直接fBound.prototype = this.prototype呢
         * 考虑下将fBound返回后，给fBound添加实例方法的情况
         * 即fBound.prototype.anotherMethod = function() {}
         * 如果将fToBind的原型直接赋值给fBound的原型，添加原型方法就会
         * 污染源方法即fToBind的原型
         */
        return bound;
      };
      var bound2 = test._bind(obj);
      bound2();
      var newBound2 = new bound2(); // undefined
      // 3.不通过call和apply实现bind

      Function.prototype._bind = function() {
        var args = Array.prototype.slice.call(arguments)
        var context = args.shift()
        var fn = this
        var bound = function() {
          context.fn = fn
          args = Array.prototype.concat.call(arguments, args)
          if (this instanceof bound) {
            var instance = Object.create(fn)
            instance.fn = fn
            instance.fn(...args)
            delete instance.fn
          } else {
            var result = context.fn(...args)
            delete context.fn
          }
        }
        var empty = function() {}
        empty.prototype = fn.prototype
        bound.prototype = new empty()
        return bound
      }
      var bound3 = test._bind(obj)
      bound3()
      new bound3()
      // 参考链接
      // https://juejin.im/post/5d8b0d856fb9a04e3141fcd6


      Function.prototype._bind = function(context, ...rest) {
        context = context || window
        var that = this
        return function bindFn(...args) {
          var args = args.concat(rest)
          if (this instanceof bindFn) {
            this.that = that
            var result = this.that(...args)
            delete this.that
            return result
          }
          context.fn = that
          var result = context.fn(...args)
          delete context.fn
          return result
        }
      }
  