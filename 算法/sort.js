
// 冒泡排序
export function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}


// 选择排序 
export function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

// 插入排序
export function insertSort(arr) {
  for (let i = 1; i < arr.length ; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
  return arr
}

// 二分查找
export function binaryFind(arr, value) {
  let start = 0
  let end = arr.length - 1
  while(start <= end) {
    let currIndex = Math.floor((end - start) / 2)
    if(arr[currIndex] === value) {
      return currIndex
    }
    if (arr[currIndex] > value) {
      end = currIndex - 1
    }
    if (arr[currIndex] < value) {
      start = currIndex + 1
    }
  }
  return -1
}

var arr1 = [7,3,100,120,68,20,35,98,76,78,74,105,308]
var arr2 = [8,4]
var arr3 = [2,4]
var arr4 = [789,456,741,852,369,753]

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let curr = arr.splice(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (curr > arr[i]) {
      left.push(arr[i])
    }
    if (curr < arr[i]) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(curr, quickSort(right))
}

let start = Date.now()
// console.log(bubbleSort(arr1))
// console.log(bubbleSort(arr2))
// console.log(bubbleSort(arr3))
// console.log(bubbleSort(arr4))
// console.log(Date.now() - start)
console.log('----------------------------------')
// console.log(selectSort(arr1))
// console.log(selectSort(arr2))
// console.log(selectSort(arr3))
// console.log(selectSort(arr4))
// console.log(Date.now() - start)

console.log('----------------------------------')
// console.log(insertSort(arr1))
// console.log(insertSort(arr2))
// console.log(insertSort(arr3))
// console.log(insertSort(arr4))
// console.log(Date.now() - start)

console.log('----------------------------------')
// console.log(quickSort(arr1))
// console.log(quickSort(arr2))
// console.log(quickSort(arr3))
// console.log(quickSort(arr4))
// console.log(Date.now() - start)

console.log('------------------------------')
// console.log(binaryFind(arr1, 74))