# CSS Flex 布局

## 1 flex-direction （预处理）

* Row

  * Main: width x => left -> right
  * Cross: height y => top -> bottom

* Column

  * Main: Height x => top -> bottom
  * Cross: Width y  => left -> right

  **可以去看下 flex-direction 的文档**（Mozilla）

* 描述位置：

  * Main 轴（主轴）：mainSize, mainStart, mainEnd, mainSign, mainBase
  * Cross 轴（交叉轴）：crossSize, crossStart, crossEnd, crossSign, crossBase

## 2 收集元素进行（hang）

### 2.1 分行

* 根据主轴尺寸，把元素分进行；是否塞得下与 mainSize 有关
* 如果设置了 no-wrap，强制分配进第一行

autoMainSize: 父元素未设置宽度时会把父元素撑开

示例：

```html
<!-- 该父元素的宽度会被撑开 -->
<div style="display:inline-flex; ">
	<div style="width:200px;height:100px;"></div>
	<div style="width:200px;height:100px;"></div>
	<div style="width:200px;height:100px;"></div>
</div>
```



## 3 主轴方向

* 找出所有 flex 元素
  * 没有 flex 元素，使用 justifyContent 填满剩余宽度
* 把主轴方向的剩余尺寸按比例分配给这些元素
* 若剩余空间为负数，所有 flex 元素宽度为 0，等比压缩有宽度的元素



## 4 交叉轴方向

* 根据每一行中最大元素尺寸计算行高
* 根据行高 flex-align 和 item-align，确定元素具体位置