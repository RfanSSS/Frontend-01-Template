# JavaScript 语句

## 1 Runtime 运行时

### 1.1 Completion Record（表示代码执行的状态）

[[type]]： normal, break, continue, return, throw

[[value]]: Types

[[target]]: label

#### 1.1.1 简单语句

* ExpressionStatement: 表达式
* EmptyStatement: 空语句
* ThrowStatement: 拋错语句
* ContinueStatement: 继续语句
* BreakStatement: 跳出循环
* ReturnStatement: return 语句

#### 1.1.2 复合语句

* BlockStatement

  * [[type]]: normal（如果有非 normal 的结果，就会中断）

  * [[value]]: --

  * [[target]]: --

  * 示例：

    ```JavaScript
    {
    	// BlockStatement 的代码体	
      const a = 1;
      // 出现非 normal 的结果，会中断执行
      throw 1;
      let b = 2;
      b = foo();
    }
    ```

* IfStatement

* SwitchStatement

* IterationStatement

  * 示例语句

    * while，do...while

    * for 循环，for...in 循环，for...of 循环

      * for 循环可以放  var，**const，let**  的声明 ---> 产生一个单独的作用域，const，let 的作用域会在其中。

        ```javascript
        let i = 0;
        for(; i < 10; i++) {
        	 // for 循环体内有单独作用域，let 声明 i 不会报错
        	 let i = 0;
        	 console.log(i);
        }
        ```

  * 对于 completion 类型的行为

    * break, continue 会消费
    * return, throw 会弹出

  * Target: 标签机制(循环语句会识别这个标签！！)

    * completion record 带着 label，则对应的 Iteration 语句会根据自身的 label 来消费这个语句，如果不匹配则不消费
    * 如果更上层的循环有这个 label，则消费这个 completion record

* WithStatement

* LabelledStatement

* TryStatement

  * try 必须有花括号，但是花括号中不是 block 语句；但是会产生作用域

  * catch 语句仅在 catch 中生成了一个新的作用域，但是花括号和本身共用一个作用域（与上面 for 的语句比较）

    ```javascript
    let e = 3;
    try {
    	throw 2;
    } catch (e) {
    	// let e; // 这个 e 不能被声明，catch e 的作用域已经声明
    	console.log(e);
    }
    // 这个 e 的值不会被影响
    console.log(e);
    ```



#### 1.1.3 声明



* FunctionDeclaration 函数声明

  * 函数声明必须有名字：

    ```javascript
    function foo() {
    
    }
    ```

  * 注意与函数表达式的区别：

    ```javascript
    var o = function foo() {
    
    }
    
    // 与 class 类似，这样的 class 会报错
    
    //class {}
    
    // 这个 class 是正确的
    class foo {
      
    }
    ```

* GeneratorDelaration

  * 特殊的 function，可以用 yield

  * 示例

    ```javascript
    function* foo() {
    	yield 1;
    	yield 2;
    	
    	var i = 3;
    	while(true) {
    		yield i++
    	}
    }
    var gen = foo()
    gen.next();
    //... 可以一直调用 next，可以一直执行本次 yield 出来之后的代码
    ```

    

* AsyncFunctionDeclaration

  * 无限跑的时钟

    ```javascript
    var i = 0;
    function tick() {
    	console.log(i++);
    	setTimeout(tick, 1000);
    }
    ```

  * 异步函数

    ```javascript
    function sleep(d) {
      return new Promise(resolve => setTimeout(resolve, d))
    }
    
    void async function() {
    	var i = 0;
    	while(true) {
    		console.log(i++);
    		await sleep(1000);
    	}
    }()
    ```

    

* AsyncGeneratorDeclaration

  ```javascript
  function sleep(d) {
    return new Promise(resolve => setTimeout(resolve, d));
  }
  
  async function* foo() {
  	var i = 0;
  	while(true) {
  		yield i++;
  		await sleep(1000);
  	}
  }
  
  void async function() {
    var g = foo();
    for await(let e of g) {
      console.log(e);
    }
  }();
  ```

  

* VaraibleStatement

  ```javascript
  var x = 0;
  function foo() {
  	var o = {x:1}
    x = 2;
    with(o) {
      x = 3;
    }
    console.log(x);
  }
  
  foo();
  console.log(x);
  ```

  * **如果有 var，尽量写在函数最前面**，至少写在变量第一次出现的地方，不要写在 block 中。

* ClassDeclaration

  * 必须先声明，在使用；
  * 不能重复声明

* LexicalDeclaration



## 对象



### 对象的三要素

唯一性，状态，行为

