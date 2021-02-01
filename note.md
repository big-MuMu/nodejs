lib.js

```js
console.log('libjs');
```

index.js
```js
console.log('start lib');
const lib = require('./lib');
console.log('end lib', lib);
```

打印出的结果为
```js
start lib
libjs
end lib {}
```

`exports` 和 `module.exports` 其实是一个引用。`module.exports` 属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取 `module.exports` 变量。为了方便，Node 为每个模块提供一个 `exports` 变量，指向 `module`.exports。这等同在每个模块头部，有一行这样的命令。如下：

```js
var exports = module.exports;
```

注意，不能直接将 `exports` 变量指向一个值，因为这样等于切断了 `exports` 与 `module.exports` 的联系。

```js
exports = function(x) {console.log(x)};
```

还有下面的代码，`hello` 函数是无法对外输出的，因为 `module.exports` 被重新赋值了。


```js
exports.hello = function() {
  return 'hello';
};

module.exports = 'Hello world';
```