# Leetcode

## 项目说明

- 分 3 个版本，**html**、**node**、**vscode**

- 3 个版本都支持**es6**语法

- html 和 node 版本会监听文件变化，自动编译，重新执行

- vscode 是直接在 vscode 里`F5`执行，可以在编辑器里断点调试

- html 有个问题，一旦代码有问题，中间造成死循环，那就恶心了，关不掉，刷新也不行

- node 也有问题，断点不容易

- vscode 看似完美，也有问题，每次启动太慢了

## 解体技巧

- 递归

通常递归要涉及到大量的栈的操作（出栈，入栈），相对来说性能指标不是很好，可转为迭代法。

典型例子就是 fibonacci 序列问题，递归解法最浅显易懂，但耗时严重。一种优化方式就是开辟数组空间，记录下已经计算过的值，省得每次都是重新计算。或者从头开始计算，一直计算到指定的 n

- 迭代
- 大问题拆解小问题，然后合并结果
- 反证法

## 题目列表

#### 简单

| id           | title                     |
| ------------ | ------------------------- |
| 101          | 对称二叉树                |
| 112          | 路径总和                  |
| 113          | 路径总和 II               |
| 235          | 二叉搜索树的最近公共祖先  |
| 257          | 二叉树的所有路径          |
| 404          | 左叶子之和                |
| 437          | 路径总和 III              |
| 501          | 二叉搜索树中的众数        |
| 590          | N叉树的后序遍历。用迭代法 |
| 687          | 最长同值路径              |
| 872          | 叶子相似的树              |
| 965          | 单值二叉树                |
| 面试题 04.04 | 检查平衡性                |

#### 中等
| id  | title                    |
| --- | ------------------------ |
| 129 | 求根到叶子节点数字之和   |
| 236 | 二叉树的最近公共祖先     |
| 988 | 从叶结点开始的最小字符串 |

#### 困难
| id  | title |
| --- | ----- |



## Some Links
1. [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
2. [Understanding module.exports and exports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)