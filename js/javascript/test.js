// function hello() {
//   console.log('hello world')
// }
// hello()

// async function async1() {
//   console.log("async1 start");
//   await  async2();
//   console.log("async1 end");

// }
// async  function async2() {
//  console.log( 'async2');
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("settimeout");
// },0);
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log('script end')


// async function async1() {
//   console.log("async1 start");
//   await async2()
//   console.log("async1 end");
// };

// async function async2() {
//   console.log("async2 start");
//   await async3();
//   console.log("async2 end");
// };

// async function async3() {
//   console.log("async3 start");
// };

// setTimeout(function () {
//   console.log('setTimeout0');
// }, 0);

// console.log("start");

// async1();

// new Promise(function (resolve) {
//   console.log("Promise1");
//   resolve();
// }).then(function () {
//   console.log("Promise2");
// });

// console.log("all end");

// const fibonacci = ((memo = [1, 1]) => {
//   const fib = (n) => {
//     let result = memo[n]
//     if (typeof result !== "number") {
//       result = fib(n - 1) + fib(n - 2)
//       memo[n] = result
//     }
//     return result
//   }
//   return fib
// })()

function fiboFn(n, memo = [0, 1]) {
  let result = memo[n]
  if (result === undefined) {
    result = fiboFn(n - 1, memo) + fiboFn(n - 2, memo)
    memo[n] = result
  }
  return result
}

console.log(fiboFn(7))

function fiboFn2(n) {
  let cache = {}
  return function fn(n) {
    let result
     if (n === 1 || n === 2) {
       result = 1
     } else {
       result = fn(n - 1) + fn(n - 2)
     }
     cache[n] = result
     return result
  }
}

function fiboFn3(n) {
  if (n === 1 || n === 2) return 1
  let temp = [0, 1]
  for (i = 2; i <= n; i++) {
    temp[i] = temp[i - 2] + temp[i - 1]
  }
  console.log(temp[n])
  return temp[n]
}

fiboFn3(7)

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));