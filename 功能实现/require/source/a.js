define('a', ['c', 'd'], function(c, d) {
  console.log('a.js start--------------------')
  console.log(c, d)
  return {
    module: 'a',
    deps: ['c'],
    c: c
  }
})