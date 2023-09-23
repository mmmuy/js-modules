## ES6 模块化规范的使用

ES6 的导入导出模块非常简单，使用 export 和 import

**（注意 ES6 的 export 不要和 CommonJS 的 exports 弄混）**

1.  安装 babel、browserify
```
npm i babel-cli browserify -g
npm i babel-preset-es2015 --save-dev
```

2.  添加 .babelrc 文件
```
// .babelrc
{
    "presets": ["es2015"]
}
```

3.  编译、打包
```
babel js -d lib // 使用babel将ES6编译为ES5
browserify lib/app.js -o dist/bundle.js 
```

4.  页面引入打包后的文件
```
<script type="text/javascript" src="./dist/bundle.js"></script>
```
