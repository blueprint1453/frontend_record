function jsonp(options) {
  let {url, params, callback, callbackFn} = options
  let searchStr = ''
  let arr = []
  params = {...params, callback}
  for(key in params) {
    arr.push(`${key}=${params[key]}`)
  }
  url += `?${arr.join('&')}`
  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
  window[callback] = function(data){
    callbackFn(data)
    document.body.removeChild(script)
  }
}

// test 
jsonp({
  url: 'http://localhost:5001/test',
  params: {
    name: 'jack',
    age: 18
  },
  callback: 'callback',
  callbackFn: function a(data) {
    console.log('get jsonp data success')
    console.log(data)
  }
})


function ajax(options) {
  let type = options.type || 'GET'
  let url = options.url
  let data = options.data
  let params = options.params
  let headers = options.headers || {}
  const xhr = new XMLHttpRequest()
  console.log('xhr.status', xhr.readyState)
  Object.keys(headers).forEach(key => {
    xhr.setRequestHeader(key, headers[key])
  })
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      options.success && options.success(xhr.responseText)
    } else {
      options.fail && options.fail(xhr.responseText)
    } 
  }

  if (type.toUpperCase() === 'GET') {
    url += `?${serializeData(params)}`
    xhr.open(type, options.url)
    console.log('xhr.status', xhr.readyState)
    xhr.send(null)
    console.log('xhr.status', xhr.readyState)

  }

  if (type==='POST') {
    xhr.open(type, url)
    data = serializeData(data)
    xhr.send(data)
  }
}

function serializeData (data) {
  let str = ''
  let arr = new Array()
  for (key in data) {
    arr.push(`${key}=${data[key]}`)
  }
  return `${arr.join('&')}`
}

ajax({
  url: 'http://localhost:5001/get/test',
  type: 'get',
  data: {name: 'jack'},
  success: function(res){
    console.log(res)
  }
})


// ajax({
//   url: 'http://localhost:5001/post/test',
//   type: 'post',
//   data: {name: 'jack'},
//   success: function(res){
//     console.log(res)
//   }
// })