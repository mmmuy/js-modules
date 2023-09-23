## 在浏览器中不使用AMD模块化规范的模块化实现

模块的依赖关系为：module2.js不依赖其他模块，module1.js依赖module2.js，app.js依赖module1.js

在index.html引入js，必须根据模块的依赖关系按module2.js、module1.js、app.js的顺序引入

```
<script type="text/javascript" src="./js/modulle2.js"></script>
<script type="text/javascript" src="./js/modulle1.js"></script>
<script type="text/javascript" src="./app.js"></script>
```
