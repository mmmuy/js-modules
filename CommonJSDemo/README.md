在node.js中简单使用CommonJS

app.js导入module1、module2、module3，module1、module2、module3为三种导出模块的方式

命令行运行 node app.js 查看运行结果

## 关于 module.exports 和 exports 的区别

会看到这样的写法：
```
exports = module.exports = xxx
```
上面的代码等价于:
```
module.exports = xxx
exports = module.exports
```
原理很简单，即 module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports 即可。

系统自动给 nodejs 文件增加2个变量 exports 和 module，module 又有一个属性 exports，这个exports 属性指向一个空对象 {}，同时 exports这个变量也指向了这个空对象{}，于是就有了 exports => {} <=module.exports

这2个 exports 其实是没有直接关系的，唯一的关系是他们初始都指向同一个空对象{}，如果其中一个不指向做个空对象了，那么他们的关系就没有了