// 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

function getMaxArea(arr) {
  var left = 0;
  var right = arr.length - 1
  var maxArea = 0
  while (left < right) {
    var currArea = (right - left) * Math.min(arr[left], arr[right])
    if (currArea > maxArea) {
      maxArea = currArea
    }
    if (arr[left] < arr[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}
console.log(getMaxArea(arr))


// 2. 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var str = 'zhabcdefghhgfedcbaxymn'

// 解法一：维护数组
var lengthOfLongestSubstring1 = function (s) {
  var arr = []
  var max = 0
  for (var i = 0; i < s.length; i++) {
    var index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s[i])
    max = Math.max(arr.length, max)
  }
  return max
};
console.log(lengthOfLongestSubstring1(str))

// 解法二：维护下标
var lengthOfLongestSubstring2 = function (s) {
  var max = 0
  var left = 0
  var right = 0
  for (var i = 0; i < s.length; i++) {
    var index = s.slice(left, right + 1).indexOf(s[i])
    if (index !== -1) {
      left = index + 1
    }
    max = Math.max(max, right - left)
    right = i
  }
  return max
};
console.log(lengthOfLongestSubstring2(str))

//  解法三：优化的Map
var lengthOfLongestSubstring3 = function (s) {
  var max = 0
  var map = new Map()
  var start = 0
  for (var i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start)
    }
    max = Math.max(max, i - start + 1)
    map.set(s[i], i)
  }
  return max
};
console.log(lengthOfLongestSubstring3(str))


// 字符串转换整数 (atoi)
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  var tempNum = parseInt(str)
  if (isNaN(tempNum)) {
    return 0
  }
  if (tempNum <= Math.pow(-2, 31)) {
    tempNum = Math.pow(-2, 31)
  } else if (tempNum <= Math.pow(2, 31) - 1) {
    tempNum = tempNum
  } else {
    tempNum = Math.pow(2, 31) - 1
  }
  return tempNum
};

console.log(myAtoi())

// 整数翻转
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   var reverseNum
   var str = '' + x
   var tempStr = str[0] === '-' ? '-' : ''
   if (tempStr) {
     str = str.slice(1)
   }
   var len = str.length
   for(var i = len - 1; i >= 0; i--) {
    tempStr += str[i]
   }
   reverseNum = parseInt(reverseNum)
   if (reverseNum >= Math.pow(-2, 31) && reverseNum <= Math.pow(2, 31) - 1) {
     return reverseNum
   } else {
     return 0
   }
};