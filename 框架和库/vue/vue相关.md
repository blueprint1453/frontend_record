1. watch和computed的区别
computed只有在相关的依赖发生变化后才会进行重新求值计算，数据没有变化时，它会读取缓存
Computed 是一种声明式的解决方案，
watch是对组件实例响应式数据进行观测，一旦数据有变动，就会执行里面注册的任务，适合开销较大的任务
Watch 是一种命令式的解决方案，我们需要自己处理 vue 某个属性依赖要素的变化
2. 生命周期
beforeCreate: 组件实例刚刚被创建,组件属性还未进行初始化，data中的属性以及mehods里面的方法还无法访问
created: 组件实例创建完成,属性已绑定,但是DOM还未完成,$el属性还不存在
beforeMount:模板编译/挂载之前，生成了虚拟的DOM节点，有了$el属性
mounted: 模板编译/挂载之后 dom被插入文档中。可以访问Dom节点
beforeUpdate: 组件更新之前
updated: 组件更新之后
activated: for keep-alive,组件被激活时调用
deactivated: for keep-alive,组件被移除时调用
beforeDestroy: 组件销毁前被调用 做一些事件解绑的操作
destoryed: 组件销毁后调用 组件被销毁，无法在访问


3. vue实现响应式系统的原理

4. 箭头函数的使用问题
箭头函数的this指向函数定义时所在的对象,普通函数的this指向函数的调用者
箭头函数没有arguments
箭头函数不可以当做构造函数
生命周期函数/methods/watch里面不应该使用箭头函数 

5. let和var的区别
let没有变量提升，必须声明后使用
let不允许在相同作用域内，重复声明同一个变量。
let只有在所在代码块有效，超出代码块直接使用会报错