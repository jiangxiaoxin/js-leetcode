# Leetcode

## 项目说明

- 分 3 个版本，**html**、**node**、**vscode**

- 3 个版本都支持**es6**语法

- html 和 node 版本会监听文件变化，自动编译，重新执行

- vscode 是直接在 vscode 里`F5`执行，可以在编辑器里断点调试

- html 有个问题，一旦代码有问题，中间造成死循环，那就恶心了，关不掉，刷新也不行

- node 也有问题，断点不容易

- vscode 看似完美，也有问题，每次启动太慢了

**很多方法都是针对具体的题目才是正确的，要看题目的条件的。比如二叉树有关的问题，方法不一定对于所有的二叉树都适用**

## 解体技巧

- 递归

通常递归要涉及到大量的栈的操作（出栈，入栈），相对来说性能指标不是很好，可转为迭代法。

典型例子就是 fibonacci 序列问题，递归解法最浅显易懂，但耗时严重。一种优化方式就是开辟数组空间，记录下已经计算过的值，省得每次都是重新计算。或者从头开始计算，一直计算到指定的 n

- 迭代
- 大问题拆解小问题，然后合并结果
- 反证法

## TODO

- [ ] 打印二叉树结构，可以是canvas的，也可以是terminal的

## 题目列表

#### 简单

| id           | degree                           | title                     |
| ------------ | -------------------------------- | ------------------------- |
| 101          | <font color="green">简单</font>  | 对称二叉树                |
| 112          | <font color="green">简单</font>  | 路径总和                  |
| 113          | <font color="green">简单</font>  | 路径总和 II               |
| 129          | <font color="orange">中等</font> | 求根到叶子节点数字之和    |
| 235          | <font color="green">简单</font>  | 二叉搜索树的最近公共祖先  |
| 236          | <font color="orange">中等</font> | 二叉树的最近公共祖先      |
| 257          | <font color="green">简单</font>  | 二叉树的所有路径          |
| 404          | <font color="green">简单</font>  | 左叶子之和                |
| 437          | <font color="green">简单</font>  | 路径总和 III              |
| 501          | <font color="green">简单</font>  | 二叉搜索树中的众数        |
| 538          | <font color="green">简单</font>  | 把二叉搜索树转换为累加树  |
| 572          | <font color="green">简单</font>  | 另一个树的子树            |
| 590          | <font color="green">简单</font>  | N叉树的后序遍历。用迭代法 |
| 687          | <font color="green">简单</font>  | 最长同值路径              |
| 700          | <font color="green">简单</font>  | 二叉搜索树中的搜索        |
| 783          | <font color="green">简单</font>  | 二叉搜索树节点最小距离    |
| 872          | <font color="green">简单</font>  | 叶子相似的树              |
| 965          | <font color="green">简单</font>  | 单值二叉树                |
| 988          | <font color="orange">中等</font> | 从叶结点开始的最小字符串  |
| 面试题 04.04 | <font color="green">简单</font>  | 检查平衡性                |

## Some Links
1. [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
2. [Understanding module.exports and exports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
3. [How to visualize a binary tree in C++](https://visbud.blogspot.com/2019/03/how-to-visualize-binary-tree-in-c.html)
4. [BST ASCII Visualization](https://github.com/YoussefRaafatNasry/bst-ascii-visualization)
5. [How to Print a Binary Tree Diagram](https://www.baeldung.com/java-print-binary-tree-diagram)
6. [chrome dev tools](https://developers.google.com/web/tools/chrome-devtools)
7. [避免大型、复杂的布局和布局抖动](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?utm_source=devtools#avoid-forced-synchronous-layouts)
8. [Moris traversal guide](https://www.educative.io/edpresso/what-is-morris-traversal)
9. [Moris traversal](https://codeoverflow.wordpress.com/tag/morris-inorder-traversal/)



## web performance
1. [如何提高性能](https://developers.google.com/web/fundamentals/performance/why-performance-matters)
2. [使用工具查看性能](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance)