<template>
  <div class="upload">
    <input type="file" name="heihei" @change="onFileChange">
    <span class="btn" @click="uploadFile">上传</span>
  </div>
</template>
<style lang="scss" scoped>
  .upload {
    input {
      margin-right: 20px;
    }
    .btn {
      display: inline-block;
      padding: 6px 14px;
      background: #469fe7;
      border-radius: 4px;
      color: #fff;
      font-size: 13px;
      cursor: pointer;
    }
  }
</style>
<script>
const SLICE_LENGTH = 10
export default {
  data() {
    return {
      file: null,
      uploadSizelist: new Array(SLICE_LENGTH).fill(0)
    }
  },
  methods: {
    serielize(data) {
      if (Object.prototype.toString.call(data) !== '[object Object]') return
      let arr = []
      for (let key in data) {
        arr.push(`${key}=${data[key]}`)
      }
      return arr.join('&')
    },
    request({url, method = 'post', data, onComppelte, onProgress, headers = {}}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        if (method === 'get') {
          url += '?' + this.serielize(data)
        }
        xhr.open(method, url)
        for (let key in headers) {
          xhr.setRequestHeader(key, headers[key])
        }
        xhr.withCredentials = true
        
        if (!(data instanceof FormData) && method === 'post'){
          data = this.serielize(data)
        }
        xhr.onload = onComppelte
        xhr.onerror = function(e) {
          console.log(e)
          reject('请求失败')
        }
        xhr.ontimeout = function() {
          reject(new Error('请求超时'))
        }
        xhr.upload.onprogress = onProgress
        xhr.send(data)
        
      })
    },
    onFileChange(e) {
      console.log(e.target.files[0])
      const file = e.target.files[0]
      this.file = file
    },
    createFileChunks(file, length = SLICE_LENGTH) {
      const chunklist = []
      const size = Math.ceil(file.size / 10)
      let curPosition = 0
      while (curPosition < file.size) {
        chunklist.push(file.slice(curPosition, curPosition + size))
        curPosition += size
      }
      return chunklist
    },
    calculateHash(chunklist) {
      return new Promise((resolve, reject) => {
        this.worker = new Worker('static/hash.js')
        this.worker.postMessage({chunklist})
        this.worker.onmessage = (e) => {
          const {percent, hash} = e.data
          if (hash) {
            resolve(hash)
          }
        }
      })
    },
    async getExistChunks(fileHash, fileName) {
      this.request({
        url: '/file/chunk/exists',
        method: 'get',
        data: {
          fileHash,
          fileName,
        }
      })
    },
    async uploadFile() {
      let chunklist = this.createFileChunks(this.file, SLICE_LENGTH)
      let hash = this.fileHash = await this.calculateHash(chunklist)
      let requestlist = chunklist.map((chunk, i) => {
        const formaData = new FormData()
        formaData.append('fileHash', `${hash}_${i}`)
        formaData.append('chunk', chunk)
        return this.request({
          url:'/file/upload',
          data: formaData,
          onProgress: (e) => {
            this.uploadPercent = this.getProgress(e.loaded, this.file.size, i)
            console.log(this.uploadPercent)
          }
        })
      })
      await Promise.all(requestlist)
      this.mergeFile(this.file.name)
    },
    getProgress(loaded, total, i) {
      this.uploadSizelist[i] = loaded
      let totalLoaded = 0
      for (let item of this.uploadSizelist) {
        totalLoaded += item
      }
      let totalPercent = (totalLoaded / total).toFixed(2)
      return totalPercent > 1 ? 1 : totalPercent
    },
    mergeFile(filename) {
      this.request({
        url: '/file/merge',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          fileName: filename,
          fileHash: this.fileHash
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>