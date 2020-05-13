# JavaScript ECMA-262 产生式

JavaScript 首先由 Unicode 字符构成

## InputElement
* WhiteSpace          ---> 空白
    * \<TAB\>（制表符）
    * \<VT\>（纵向制表符 "\v"）
    * \<FF\>（Form Feed）
    * \<SP\>（普通空格）
    * \<NBSP\>（NO-BREAK SPACE U+00A0 ） 该空格有分词效果，放在两个单词中间可以在排版时让这两个词不分开
    * <ZWNBSP> (ZERO WIDTH NO-BREAK SPACE) U+FEFF ---> 无宽度的空格
    * <USP>(unicode 中支持的空格字符，详见 http://www.fileformat.info/info/unicode/category/Zs/list.htm)
* LineTerminator      ---> 换行符
    * <LF> Line Feed 普通的换行符
    * <CR> Carraige Return 回车
    * <LS> Line Separator  行分隔符
    * <PS> Paragraph Separator 段落分隔符
* Comment             ---> 注释（注意这里不可以用 \\u 转义替代 \*）
    * MultipleLineComment   多行注释
    * SingleLineComment     单行注释
* Token               ---> JavaScript 中一切可以有效执行的东西
    * Punctuator        符号（括号，等号，小于号等）
    * Literal           直接量（128，1，true，null）
        * 注意 template (11.8.6) ---> \`I said: "${s2}"\`
    * IdentifierName
        * Keywords
        * Identifier        标识符（变量）
            * 示例：
            ``` JavaSript
            // foo 就是标识符
            var foo;     
            ```
            * 用作变量的部分 ---> Identifier Reference（不可以和关键字重合）
            * 属性部分（可以和关键字重合）
        * Future Reserved Keywords (保留关键字，目前仅剩 enum)

## Expression (表达式)

### Grammar (语法)

* Tree vs Priority (优先级)

表达式生成树 1 + 2 * 3：

```
      +
    /   \
   1     *
        / \
       2   3
```

* Member Expression
    * foo\`string\`
    ```
    var name = 'nuolan';
    function foo1(){
        console.log(arguments);
    }
    // 在这里 foo1 是一个函数，会打出对应的输入
    foo1`${name}`
    ```
    * a.b，a[b]: 访问对象的成员
    * super.b, super[\'b\']:     父类
    * **new.target** : 只能在函数里面使用
    * new Foo(): 构造器
* New

* Call Expression(函数调用）

* LeftHandSide(等号左边) Experssion & Righ Handside(等号右边)
    * LeftHandSideExpression
        * NewExpression
        * CallExpression

* UpdateExpression

* UnaryExpression 单独运算符
    * delete UnaryExpression
    * void UnaryExpression: 注意 void 也是运算符
    * typeof UnaryExpression
    * \+ UnaryExpression
    * \- UnaryExpression
    * \~ UnaryExpression
    * \! UnaryExpression
    * AwaitExpression
    

### Runtime (运行时)
