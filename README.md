# fis-parser-handlebars-4.x

A parser plugin for fis to precompile handlebars v4.x template.

### 1. 安装插件：

> npm install -g fis-parser-handlebars-4.x

### 2. 配置

```js
// fis-conf.js
fis.config.set('modules.parser.handlebars', 'handlebars-4.x');
fis.config.set('project.fileType.text', 'handlebars');
fis.config.set('roadmap.ext.handlebars', 'js');
```

### 3. 使用
创建foo.handlebars的模板文件，其中的内容是：
```hanblebars
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>
```

创建foo.js的js文件，内容是：

```js
var tpl = __inline('foo.handlebars');
var context = {title: "My New Post", body: "This is my first post!"};
var html = console.log(tpl(context));
console.log(html);
```

在页面上引入handlebars的 [runtime版本](http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars.runtime-v4.0.2.js) 作为运行时模板引擎框架。

### Demo
[fis3 use-handlebars-4.x](https://github.com/fex-team/fis3-demo/tree/master/use-handlebars-4.x)