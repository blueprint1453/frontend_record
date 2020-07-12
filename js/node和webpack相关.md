1. commonjs和es6模块化方案差别
es6 module：
  编译时确定对外输出的接口，输出的不是对象
  可以单独加载模块的某个接口
  动态引用 输出的是值得引用，值改变，引用也会变化

commonjs
  运行时加载模块，输出的是一个对象
  加载的是整个模块，将所有的接口全部加载进来
  输出的是值得拷贝，即原来模块值得改变不会再影响到已经加载的值


2. webpack打包优化
  1. 使用DLLPlugin和DLLReferencePlugin 分离提取不常更改的公共库文件
  2. 使用happypack开启多进程加速代码构建
  3. 使用webpack-parallel-uglify-plugin并行压缩
  4. babel-loader配置添加 cacheDirectory： true


3. 性能优化
  3.1 网页内容：
    减少http请求次数   √
      
    延迟加载           √
    提前加载           √
    减少DOM元素数量    √

  3.2 服务器
    使用CDN     √
    添加Expires 或Cache-Control报文头 √
    Gzip压缩传输文件    √
    配置ETags          √


  3.3 CSS
    将样式表置顶
    避免CSS表达式 避免选择器嵌套过度
    用<link>代替@import

  3.4 Javascript
    将脚本置底
    使用外部Javascirpt和CSS文件
    精简Javascript和CSS
    去除重复脚本
    减少DOM访问

  3.5 图片
    优化图像，适当压缩
    小图标背景图使用CSS Sprite
    懒加载