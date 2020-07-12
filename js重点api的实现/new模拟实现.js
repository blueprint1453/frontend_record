    // 模拟实现new功能
    function __new(constructor) {
      var obj = {}
      var args = [].slice.call(arguments, 1)
      obj.__proto__ = constructor.prototype
      var result = constructor.call(obj, ...args)
      return typeof result === 'object' ? result : obj
    }

    // test
    function Fn(name, age, gender) {
      console.log(name, age, gender)
      this.name = name
      this.age = age
      this.gender = gender
    }
    
    Fn.prototype = {
      getName() {
        return this.name
      }
    }
    
    var obj1 = __new(Fn, 'jack', 18, 'male')
    console.log(obj1)
    console.log(obj1.getName())
    console.log(obj1 instanceof Fn)

    //  实现instanceof

    function __instanceof(left, right) {
      let leftObj = left.__proto__
      let rightPrototype = right.prototype
      while(true) {
        if (leftobj === null) return false
        if (leftObj === rightPrototype) {
          return true
        }
        leftObj = leftobj.__proto__
      }
    }

    // Object.create的兼容实现
    Object.__create__1 = function(proto, properties) {
      function Noop () {}
      Noop.prototype = proto
      var obj = new Noop()
      if (properties !== undefined ) {
        if (Object(properties) === properties) {
          Object.defineProperties(obj, properties)
        }
      }
      return obj
    }
    Object.__create__2 = function(proto, properties) {
      var obj = {}
      console.log(obj)
      Object.setPrototypeOf(obj, proto) // o.__proto__ = proto
      if (properties !== undefined ) {
        if (Object(properties) === properties) {
          Object.defineProperties(obj, properties)
        }
      }
      return obj
    }
    var parent = {
      name: 'jack',
      getName: function() {
        return 'name: ' + this.name
      }
    }
    var oo = Object.__create__2(parent)
    console.log(oo)
    console.log(Object.getPrototypeOf(oo) === parent)



  // new的其他版本实现
    function newFn(Fn, ...rest) {
      let obj = {}
      let symbol = Symbol()
      obj[symbol] = Fn
      Object.setPrototypeOf(obj, Fn.prototype)
      var result = obj[symbol](...rest)
      delete obj[symbol]
      return result instanceof Object ? result : obj
    }
  
    function Person(name, age) {
      this.name = name
      this.age = age
    }
  
    Person.prototype = {
      getName() {
        return this.name
      }
    }
    
    var person = newFn(Person, 'jack', 18)
    console.log(person, person.getName())