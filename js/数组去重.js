var arr = [1, 3, 5, 6, 3, 8, 9, 12, 15, 9, 20]

  function deRepeat1(arr) {
    var newArr = []
    for(let item of arr) {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item)
      }
    }
    return newArr
  }

  function deRepeat2(arr) {
    var newArr = []
    for(let item of arr) {
      if (!newArr.includes(item)) {
        newArr.push(item)
      }
    }
    return newArr
  }

  function deRepeat3(arr) {
    // return Array.from(new Set(arr))
    return [...new Set(arr)]
  }

  function deRepeat4(arr) {
    return arr.filter((item, index, targetArr) => targetArr.indexOf(item) === index)
  }

  function deRepeat5(arr) {
    var newArr = []
    var map = new Map()
    for(let item of arr) {
      if (!map.get(item)) {
        newArr.push(item)
        map.set(item, 1)
      }
    }
    return newArr
  }

  console.log(deRepeat1(arr))
  console.log(deRepeat2(arr))
  console.log(deRepeat3(arr))
  console.log(deRepeat4(arr))
  console.log(deRepeat5(arr))