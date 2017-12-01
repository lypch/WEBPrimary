# HTML 样式－CSS

CSS(Cascading Style Sheets)用于渲染HTML元素标签的样式

## 如何使用CSS

可以通过下面的方式把CSS添加到HTML中：
* 内连模式－在元素中使用style属性，当特殊的样式需要应用到特别的元素时使用
* 内部式样－在HTML文档头部使用style元素来包含CSS
* 外部引用－使用外部CSS文件

``优先级（高到低）：内连模式->内部式样->外部引用``;最好的方式是``外部引用``

```CSS
p {background-color:red; font-family:arial; color:blue; font-size:30px ; text-align:center}
```
