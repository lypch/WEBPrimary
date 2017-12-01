# HTML head

## head元素

head包含了所有的头部标签元素。在head中可以插入脚本，样式文件，各种meta信息。
可以添加在头部区域的元素标签为:
title, style, meta, link, script, noscript, base.

- title元素
    - 定义了不同文档的标题
    - 在HTML／XHTML文档中是必须的
    - 元素：
        - 定义了浏览器工具栏上的标题
        - 当网页添加道收藏夹的时候，显示在收藏夹中的标题
        - 显示在搜索引擎结果页面的标题

- base元素：描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接。也就是以后链接标签的中src可以使用相对路径。
```html
<head>
<base href="http://www.runoob.com/images/" target="_blank">
</head>
```
- link元素：标签定义了文档和外部资源的关系，通常用于链接到式样表。``rel--必须项定义了当前文档和被链接文档的关系，常用sthlesheet``。
``` html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

- style元素：定义了HTML文档的样式文件引用地址，也可以直接添加样式来渲染HTML文档。
```html
<head>
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>
</head>
```
- meta元素：描述了一些基本的元素。<meta>标签提供了元数据，元数据也不显示在页面上，但会被浏览器解析。通常用于指定网页的描述，关键词，文件最后修改时间，作者和其他元数据，元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他web服务。一般放在head中
    * 为搜索引擎定义关键词：
    ```HTML
    <meta name="keywords" content="HTML, CSS, XML, XHTML,JavaScript">
    ```
    * 为网页定义描述内容
    ```HTML
    <meta name="description" content="免费 & 教程">
    ```
    * 定义网页作者
    ```HTML
    <meta name="author" content="Lypch">
    ```
    * 30秒刷新网页
    ```HTML
    <meta http-equiv="refresh" content="30">
    ```
