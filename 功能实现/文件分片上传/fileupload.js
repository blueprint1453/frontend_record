const express = require('express')
const app = express()
const fs = require('fs')
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var multer = require('multer'); // v1.0.5
app.use(bodyParser.json());
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let fileHash = req.body.fileHash.replace(/_\d+$/, '')
    let fileDir = `./temp/${fileHash}`
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir)
    }
    cb(null, fileDir)
  },
  filename: function (req, file, cb) {
    let fileHash = req.body.fileHash
    cb(null, fileHash)
  }
})
var upload = multer({ storage: storage })
const mergeFile = async (filePath, tempFileDir, cb) => {
  if (fs.existsSync(filePath)) return
  const chunkPaths = fs.readdirSync(tempFileDir)
  chunkPaths.forEach(chunkPath => {
    fs.appendFileSync(filePath, fs.readFileSync(`${tempFileDir}/${chunkPath}`))
    fs.unlinkSync(`${tempFileDir}/${chunkPath}`)
  });
  fs.rmdirSync(tempFileDir)
  cb()
}
app.post('/file/upload', upload.any(), function (req, res) {
  res.send('success')
})

app.get('/file/chunk/exists', upload.any(), function (req, res) {
  let { fileName, fileHash } = req.query 
  if (fs.existsSync(`./upload/${fileName}`)) {
    res.json({
      code: 1,
      msg: '文件已存在',
    })
  } else if (fs.existsSync(`./temp/${fileHash}`)) {
    const chunkPaths = fs.readdirSync(tempFileDir) || []
    let arr = []
    chunkPaths.forEach(path => {
      arr.push(path.charAt(path.length - 1))
    })
    res.json({
      code: 2,
      chunks: arr
    })
  } else {
    res.json({
      code: 0
    })
  }
})

app.post('/file/merge', function (req, res) {
  let { fileName, fileHash } = req.body
  let tempFileDir = `./temp/${fileHash}`
  if (fs.existsSync(tempFileDir)) {
    let filePath = `./upload/${fileName}`
    mergeFile(filePath, tempFileDir, () => {
      res.json({
        code: 0,
        msg: 'merge success'
      })
    })
  }
})
app.listen(1688, () => console.log('example app is running on port 1688'))