---
sidebarDepth: 3
---

# markdown-it-pangu

## 什么是盘古之白？

> 如果你跟我一样，每次看到网页上的中文字和英文、数字、符号挤在一块，就会坐立难安，忍不住想在它们之间加个空格。
> 
> 汉学家称这个空白字元为「盘古之白」，因为它劈开了全形字和半形字之间的混沌。另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。
> 
> <span style="text-align: right">——摘自 [pangu.js](https://github.com/vinta/pangu.js)</span>

在我们输入这样的文字时：

```md
你好World**你好**

你好`World`你好

你好**World**你好

World`World`World
```

我们实际上需要这个：

> 你好World**你好**
>
> 你好`World`你好
>
> 你好**World**你好
>
> World`World`World

而不是这个：

> <span>你好</span><span>World</span><strong>你好</strong>
>
> <span>你好</span><code>World</code><span>你好</span>
>
> <span>你好</span><strong>World</strong><span>你好</span>
>
> <span>World</span><code>World</code><span>World</span>

[pangu.js](https://github.com/vinta/pangu.js) 正是这样一个工具。但这个 [issue](https://github.com/vinta/pangu.js/issues/127) 指出它并不能很好地处理 markdown 代码，因此 markdown-it-pangu 也就应运而生。它是 markdown-it 的插件，将为你处理标记语法中麻烦的部分。

## 如何使用

```bash
npm install markdown-it-pangu
# OR
yarn add markdown-it-pangu
```

```js
const MarkdownIt = require('markdown-it')
const PanguPlugin = require('markdown-it-pangu')

const md = new MarkdownIt().use(PanguPlugin)
md.parse('_当你凝视着_bug，**bug**也凝视着你')
// <em>当你凝视着</em> bug，<strong>bug</strong> 也凝视着你
```

## 自定义配置

我们还提供了一些额外的选项，它们可以作为 `use` 函数的第二个参数传入。

### additionalRules

- **类型**: `string[]`
- **默认值**: `['code_inline']`

额外需要特殊处理的规则。此列表中的规则一旦出现在非行首/行尾的位置就一定会在两侧生成空格。

## 如果我不想要空格怎么办？

一般情况下当我们都希望自己的文章漂漂亮亮的，但是如果在某种情况下，我么也可能真的不希望自动生成空格（比如这篇文档开头的反例那里），怎么办呢？我们可以使用 HTML 标签。markdown-it-pangu 会自动忽略 HTML 语法两侧的字段。

输入：

```md
你好World`Hello`World
<span>你好</span>World<code>Hello</code>World
```

输出：

> 你好World`Hello`World
>
> <span>你好</span>World<code>Hello</code>World
