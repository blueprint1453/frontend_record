;(function () {
  console.log('index.js start')
  var script = document.createElement('script')
  script.src = './test.js'
  document.body.appendChild(script)  
  script.onload = function() {
    console.log('script created in index.js onload')
  }
})()