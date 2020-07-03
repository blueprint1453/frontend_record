define('b', ['d'], function(d) {
  console.log('b.js start-----------------')
  console.log(d)
  return {
    module: 'b',
    deps: ['d'],
    d: d
  }
})