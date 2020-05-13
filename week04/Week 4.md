# Week 4 结构化

## 事件循环

定义：js 的调用方去使用 js 的一种方式，该部分在 js 引擎**之外**

 

## 宏任务/微任务

evaluateScript, callWithArguments 产生宏任务 ---> 理解：将 js 库包装成了一个服务

 

### 代码示例



```javascript
new Promise(resolve => resolve()).then(() => console.log("1"));

setTimeout(function() {
  console.log("2")
}, 0);

console.log("3");
```

结果：

```
3
1
undefined
2
```

这里的 undefined 就是宏任务的标志



```javascript
// Promise ---> 一个微任务
new Promise(resolve => resolve()).then(() => console.log("1"));

// evaluateScript ---> 一个新的宏任务
setTimeout(function() {
	console.log("2");
	
	// Promise ---> 一个微任务
	new Promise(resolve => resolve()).then(console.log("3"))
}, 0)

// 1,4 属于同一个宏任务， 2,3 属于同一个宏任务
console.log("4")
```

结果：

```
4
1
undefined
2
3
```

一共有两个宏任务产生



# Realm 

## 有多少固有对象？

在 js 标准 - ecma262 中寻找 **18 The global object**,  目录中就会出现属于它的所有对象.(可以参考同路径下的 realm.js 文件)



## 函数调用 

execution context stack（调用栈）  ---> ecma 262 标准查阅



### Execution Context

* code evaluation state ---> 只有 async, await, generator 需要存这个
* Function
* Script or Module ---> 可能为 null，script or module 产生 context 才有这个属性
* **Generator** ---> 可能为 null, generator 产生的 context 才是有这个属性，为 generator 量身打造
* realm
* LexicalEnvironment 词法环境
  * this ---> this.a(this 指的是哪个对象)
  * new.target
  * super
  * 变量
* VariableEnvironment 变量环境 ---> 用于处理 var 声明