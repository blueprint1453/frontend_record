1.css盒模型
简介：就是用来装页面上的元素的矩形区域。CSS中的盒子模型包括IE盒子模型和标准的W3C盒子模型。
border-sizing(有3个值哦)：border-box,padding-box,content-box.
区别：从图中我们可以看出，这两种盒子模型最主要的区别就是width的包含范围，在标准的盒子模型中，width指content部分的宽度，在IE盒子模型中，width表示content+padding+border这三个部分的宽度，故这使得在计算整个盒子的宽度时存在着差异：
标准盒子模型的盒子宽度：左右border+左右padding+width
IE盒子模型的盒子宽度：width
在CSS3中引入了box-sizing属性，box-sizing:content-box;表示标准的盒子模型，box-sizing:border-box表示的是IE盒子模型
最后，前面我们还提到了，box-sizing:padding-box,这个属性值的宽度包含了左右padding+width
也很好理解性记忆，包含什么，width就从什么开始算起。

2.画一条0.5px的线
采用meta viewport的方式
采用 border-image的方式
采用transform: scale()的方式
采用线性渐变


3.link标签和import标签的区别

link属于html标签，而@import是css提供的
页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。
link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。
link方式样式的权重高于@import的。


5.Flex布局
文章链接：
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool（语法篇）
http://www.ruanyifeng.com/blog/2015/07/flex-examples.html（实例篇）
Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。
简单的分为容器属性和元素属性
容器的属性：

flex-direction：决定主轴的方向（即子item的排列方法）
.box {
flex-direction: row | row-reverse | column | column-reverse;
}
flex-wrap：决定换行规则
.box{
flex-wrap: nowrap | wrap | wrap-reverse;
}
flex-flow：
.box {
flex-flow:  || ;
}
justify-content：对其方式，水平主轴对齐方式
align-items：对齐方式，竖直轴线方向

项目的属性（元素的属性）：

order属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为0
flex-grow属性：定义项目的放大比例，即使存在空间，也不会放大
flex-shrink属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个item的flow-shrink为0，则为不缩小
flex-basis属性：定义了在分配多余的空间，项目占据的空间。
flex：是flex-grow和flex-shrink、flex-basis的简写，默认值为0 1 auto。
align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖align-items，默认属性为auto，表示继承父元素的align-items


.BFC（块级格式化上下文，用于清楚浮动，防止margin重叠等）
直译成：块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。

BFC区域不会与float box重叠
BFC是页面上的一个独立容器，子元素不会影响到外面
计算BFC的高度时，浮动元素也会参与计算

根元素
float不为none的元素
position为fixed和absolute的元素
display为inline-block、table-cell、table-caption，flex，inline-flex的元素
overflow不为visible的元素

水平垂直居中

实现水平居中
text-align:center、 margin：auto、 flex布局设置justify-content：center、 绝对定位+tansfrom/margin-left属性、tabel布局
实现垂直居中
vertical:middle、line-height跟高度等高、 flex布局设置align-item:center、 绝对定位+tansfrom/margin-left属性


12.双边距重叠问题（外边距折叠）
多个相邻（兄弟或者父子关系）普通流的块元素垂直方向marigin会重叠
折叠的结果为：
两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。

11.visibility=hidden, opacity=0，display:none
opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

JS动画
缺点：(1)JavaScript在浏览器的主线程中运行，而主线程中还有其它需要运行的JavaScript脚本、样式计算、布局、绘制任务等,对其干扰导致线程可能出现阻塞，从而造成丢帧的情况。
(2)代码的复杂度高于CSS动画

优点：(1)JavaScript动画控制能力很强, 可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。
(2)动画效果比css3动画丰富,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有JavaScript动画才能完成
(3)CSS3有兼容性问题，而JS大多时候没有兼容性问题

CSS动画
缺点：

   (1)运行过程控制较弱,无法附加事件绑定回调函数。CSS动画只能暂停,不能在动画中寻找一个特定的时间点，不能在半路反转动画，不能变换时间尺度，不能在特定的位置添加回调函数或是绑定回放事件,无进度报告

   (2)代码冗长。想用 CSS 实现稍微复杂一点动画,最后CSS代码都会变得非常笨重。


优点： (1)浏览器可以对动画进行优化。

 浏览器使用与 requestAnimationFrame 类似的机制，requestAnimationFrame比起setTimeout，setInterval设置动画的优势主要是:1)requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成,并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率,一般来说,这个频率为每秒60帧。2)在隐藏或不可见的元素中requestAnimationFrame不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
强制使用硬件加速 （通过 GPU 来提高动画性能）

 如果动画只是简单的状态切换，不需要中间过程控制，在这种情况下，css动画是优选方案。它可以让你将动画逻辑放在样式文件里面，而不会让你的页面充斥 Javascript 库。然而如果你在设计很复杂的富客户端界面或者在开发一个有着复杂UI状态的 APP。那么你应该使用js动画，这样你的动画可以保持高效，并且你的工作流也更可控。所以，在实现一些小的交互动效的时候，就多考虑考虑CSS动画。对于一些复杂控制的动画，使用javascript比较可靠。 c