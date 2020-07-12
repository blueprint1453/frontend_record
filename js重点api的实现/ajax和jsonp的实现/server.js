const express = require('express')
const app = express()

let whitList = 'http://localhost:5500'
app.use(function(req, res, next) {
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    // res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    // if (req.method === 'GET') {
    //   res.end() // OPTIONS请求不做任何处理
    // }
  }
  next()
})

app.get('/test', function(req,res){
  let {callback, name, age} = req.query
  console.log(callback, name, age)
  let result = {msg: 'i love you'}
  res.end(`${callback}('i love you')`)
})

app.get('/get/test', function(req,res){
  let {callback, name, age} = req.query
  console.log(callback, name, age)
  let result = {msg: 'i love you'}
  res.end(result)
})

app.get('/post/test', function(req,res){
  let {callback, name, age} = req.query
  console.log(callback, name, age)
  let result = {msg: 'i love you post'}
  res.end(result)
})

app.listen(5001, () => {
  console.log('app run on port 5001')
})