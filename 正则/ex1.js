// var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
// console.log( regex.test("23:59") ); 
// console.log( regex.test("02:07") ); 
// console.log( regex.test("7:9") ); 
// => true
// => true
// => true

// F:\study\javascript\regex\regular expression.pdf

// F:\study\javascript\regex\

// F:\study\javascript

// F:\

// var pathReg = /^[a-zA-Z]:\\([^\/\\\r\n?\*<>:|]+\\)*([^\/\\\r\n?\*<>:|]+)?/

// console.log( pathReg.test("F:\\study\\javascript\\regex\\regular expression.pdf") ); 
// console.log( pathReg.test("F:\\study\\javascript\\regex\\") ); 
// console.log( pathReg.test("F:\\study\\javascript") ); 
// console.log( pathReg.test("F:\\") ); 


// var idRegex = /id=".*?"/
// var idRegex = /id="[^"]*"/
// var htmlstring = '<div id="container" class="main"></div>';
// console.log(htmlstring.match(idRegex)[0]); 

// var startendReg = /^|$/gm
// var helloStr = 'hello'
// console.log(helloStr.replace(startendReg, '#'))


// var geoReg1 = /(?=l)/g
// console.log('hello'.replace(geoReg1, '#'))
// var geoReg2 = /(?<=l)/g
// console.log('hello'.replace(geoReg2, '#'))
// var geoReg3 = /(?!l)/g
// console.log('hello'.replace(geoReg3, '#'))
// var geoReg4 = /(?<!l)/g
// console.log('hello'.replace(geoReg4, '#'))

// 123456789
// var qianReg = /\B(?=(\d{3})+\b)/g
// console.log('123456789'.replace(qianReg, ','))
// console.log('12345678 123456789'.replace(qianReg, ','))

// 替换
// var reReg = /(\d{4})-(\d{2})-(\d{2})/
// console.log('2020-06-10'.replace(reReg, '$2/$3/$1'))
// // or
// var year = '2020-06-10'.replace(reReg, (match, $1, $2, $3) => `${$2}/${$3}/${$1}`)
// console.log(year)

// 反向引用
// var dateReg = /\d{4}[\-.\/]\d{2}[.\-\/]\d{2}/
// console.log(dateReg.test('2018-02-09'))
// console.log(dateReg.test('2018/02/09'))
// console.log(dateReg.test('2018.02.09'))
// dateReg = /\d{4}([.\-\/])\d{2}\1\d{2}/
// console.log(dateReg.test('2018-02-09'))
// console.log(dateReg.test('2018/02/09'))
// console.log(dateReg.test('2018.02.09'))

// var trimReg = /^\s*(.*?)\s*$/g
// console.log(' aa ddd  '.replace(trimReg, '$1'))
// console.log('aa ddd '.replace(trimReg, '$1'))
// console.log(' aa ddd'.replace(trimReg, '$1'))
// console.log(''.replace(trimReg, ''))

// 字符所有单词首字母大写
// var upcaseReg = /\b[a-zA-Z](?=[a-zA-Z]*\b)/g
// console.log('My Name Is Epeli'.replace(upcaseReg, (match) => match.toUpperCase()))

// 驼峰化
// var camelize = /([_-]+)(\w)(\w)?/g
// console.log('-moz-transform'.replace(camelize, (match, $1, $2, $3) => $2.toUpperCase() + $3))
// MozTransform

// 中划线化
// var dasherize = /([A-Z])/g
// console.log('MozTransform'.replace(dasherize, (match) => '-' + match.toLowerCase()))

// html转义和反转义
// var escapeChars = {
//   '¢': 'cent',
//   '£': 'pound',
//   '¥': 'yen',
//   '€': 'euro',
//   '©': 'copy',
//   '®': 'reg',
//   '<': 'lt',
//   '>': 'gt',
//   '"': 'quot',
//   '&': 'amp',
//   '\'': '#39'
// };

// function escapeHTML(str) {
//   const regStr = '[' + Object.keys(escapeChars).join('') + ']'
//   const reg = new RegExp(regStr, 'g')
//   return str.replace(reg, match => '&' + escapeChars[match] + ';')
// }
// console.log(escapeHTML('<div>Blah blah blah</div>'))

// var htmlEntities = {
//   nbsp: ' ',
//   cent: '¢',
//   pound: '£',
//   yen: '¥',
//   euro: '€',
//   copy: '©',
//   reg: '®',
//   lt: '<',
//   gt: '>',
//   quot: '"',
//   amp: '&',
//   apos: '\''
// }

// function unescapeHTML(str) {
//   const reg = /\&(.+?);/g
//   return str.replace(reg, (match, a) => {
//     console.log(match)
//     if (htmlEntities.hasOwnProperty(a)) {
//       return htmlEntities[a]
//     }
//     return a
//   })
// }
// console.log(unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;'))

// var tagReg = /<([a-zA-Z]+)>(.*?)<\/\1>/
// console.log(tagReg.test('<title>regular expression</title><p>laoyao bye bye</p>'))

// var str = 'IT面试题博客中包含很多<a href="http://hi.baidu.com/mianshiti/blog/category/微软面试题">微软面试题</a>';

// var linkReg = /(?<=<a href=\")(.*?)(?=\".*?>)/g
// console.log(str.match(linkReg)[0])

var str = 'dgfhfgh254bhku289fgdhdy675gfh'
var dreg = /\d+/g
console.log(str.match(dreg))

// 敏感词过滤
// var str = '我草你妈哈哈背景天胡景涛哪肉涯剪短发欲望';
// var wordFilter = /[景|草|肉|欲|胡|涛]+/g
// console.log(str.replace(wordFilter, '*'))


// 判断是否符合 USD 格式
// $1,023,032.03
// var usdReg = /^\$\d{1,3}(,\d{3})*\.\d{2}$/
// console.log(usdReg.test('$1,023,032.03'))
// console.log(usdReg.test('$1023,032.03'))
// console.log(usdReg.test('$1,0,032.03'))
// console.log(usdReg.test('$1032.03'))
// console.log(usdReg.test('$132.034'))
// console.log(usdReg.test('$1,324,344.03'))


var str1 = 'borderLeftColor';
var str2 = 'border-left-color';
console.log(str1.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase()))
console.log(str2.replace(/\-([a-z])/g, (match, $1) => $1.toUpperCase()))

var bigNumReg = /\B(?=(\d{3})+(?!\d))/g
console.log('12345678'.replace(bigNumReg, ','))


var imgs = [
  'http://img.host.com/images/fds.jpg',
  'https://img.host.com/images/fjlj.jpg',
  'http://img.host.com/images/djalsdf.png',
  'https://img.host.com/images/adsjfl.png',
  'http://img.host.com/image/jasdlf.jpg'
];

var protocolReg = /http(s)?\:(.*?\.jpg)/
imgs.forEach(item => {
  console.log(item.replace(protocolReg, (match, $1, $2) => $2))
})


// 截取url的所有的参数 返回一个对象集合
function getUrlParam(url) {
  var urlParamReg = /(?<=[\?|\&])(\w+?)=([^&]*)&?/g
  var obj = {}
  url.replace(urlParamReg, (match, $1, $2) => {
    obj[$1] = decodeURIComponent($2)
    console.log(match, $1, obj[$1])
    return match
  })
  return obj
}

var url1 = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&rsv_t=980cJrz9k35Si18%2FygE9oWTTEcsQ2%2BAXPLDkhWADNtSOwnErnT4VDcgCgwc&rqlang=cn&rsv_dl=tb&rsv_enter=1&rsv_sug3=17'
console.log(getUrlParam(url1).rsv_bp)

// 截取url的单个参数的值
function getUrlSingleParam(url, key) {
  var str = '(?<=[\?\&])' + key + '=' + '([^&]*)&?'
  console.log(str)
  var reg = new RegExp(str)
  var match = url.match(reg)
  return match[1]
}

console.log(getUrlSingleParam(url1, 'tn'))

// 有效数字
// 1，整数 负数 零
// 2，小数 整数
// 分析规则
// 1，可以出现 +/- 可以没有，也可以有一个
// 2，整数 0到9个位数 或者以[1-9]开头的多位数
// 3，小数部分，有可能没有，有 小数点后至少跟一位数字

var validNumReg = /^[-+]?((\d)|([1-9]\d+))(\.\d+)$/
console.log(validNumReg.test(-1.23))
console.log(validNumReg.test(-10.2))
console.log(validNumReg.test(0.2))
console.log(validNumReg.test(-0.23))
console.log(validNumReg.test(+1.2))
console.log(validNumReg.test(16.23))

// 邮箱验证
// 规则：
// 以数字字母开头，中间可以是多个（数字，字母，下划线 ,或中横线）
// 然后是 @ 符号，后面可以是数字字母 1到多个
// 然后是 . 在加 2-4个字母结尾
var emailReg = /^[\d\w][\d\w-.]*[\w\d]+@[\d\w]+\.\w{2,4}$/