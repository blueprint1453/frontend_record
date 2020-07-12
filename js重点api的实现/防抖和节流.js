let num = 1;
let content = document.getElementById('content');

function count() {
    content.innerHTML = num++;
};

function debounce(fn, delay, immediate) {
  var timer = null
  var isFirst = immediate || false // 标识是否第一次立即执行
  return function(...args) {
    if (isFirst) {
      fn(...args)
      isFirst = false
    }

    if (timer) clearTimeout(timer)

    timer = setTimeout(function() {
      fn(...args)
    }, delay || 200)
  }
}

// content.onmousemove = debounce(count, 500);
// content.onmousemove = debounce(count, 500, true);

function throttle(fn, delay) {
  var timer
  var flag = true
  return function(...args){
    if (!flag) return
    flag = false
    timer = timer = setTimeout(function() {
      fn(...args)
      flag = true
    }, delay || 200)
  }
} 

content.onmousemove = throttle(count, 400)