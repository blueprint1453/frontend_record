function _instanceof(left, right) {
  let proto = Object.getPrototypeOf(left)
  // let proto = left.__proto__
  let prototype = right.prototype
  while(true) {
    if (proto === prototype) return true
    if (proto === null) return false
    proto = Object.getPrototypeOf(proto)
  }
}

function Person(name, age) {
  this.name = name
  this.age = age
}
function Animal(category, gender) {
  this.category = category
  this.gender = gender
}
var person = new Person('jack', 18)
var animal = new Animal('dog', 'male')

console.log(_instanceof(person, Person)) // true
console.log(_instanceof(animal, Animal)) // true
console.log(_instanceof(person, Animal)) // false
console.log(_instanceof(person, Object)) // true


function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null)  return false
  let proto = obj
  while(Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return proto === Object.getPrototypeOf(obj)
}
