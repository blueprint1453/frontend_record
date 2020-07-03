
function randomSort1(arr) {
  return arr.sort(function(a, b) {
    return Math.random() > 0.5 ? 1 : -1
  })
}

function randomSort2(arr) {
  let newArr = []
  while(arr.length) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    newArr.push(arr[randomIndex])
    arr.splice(randomIndex, 1)
  }
  return newArr
}

function randomSort3(arr) {
  for(let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * (arr.length - i))  + i
    let temp = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = temp
  }
  return arr
}

let arr = [1, 3 , 5, 6, 7, 8, 9, 10]
console.log(randomSort1(arr))
console.log(randomSort2(arr))
console.log(randomSort3(arr))
