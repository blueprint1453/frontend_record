;(function(){
  // require
  require(['a', 'b'], function(a, b) {
    console.log(a, b)
    console.log('main run')
  })
})()