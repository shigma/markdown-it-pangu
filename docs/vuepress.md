---
sidebarDepth: 3
---

# vuepress-plugin-pangu

vuepress-plugin-pangu 是 markdown-it-pangu 在 VuePress 中的封装。事实上，你目前看到的这个网页就是用它实现的。

## 如何使用

### 全局安装

```bash
npm install -g vuepress-plugin-pangu
# 或者
yarn global add vuepress-plugin-pangu
```

### 局部安装

```bash
npm install vuepress-plugin-pangu
# 或者
yarn add vuepress-plugin-pangu
```

### 添加到 `config.js`

```js
module.exports = {
  plugins: [
    'pangu'
  ]
}
```
或者
```js
module.exports = {
  plugins: {
    pangu: {}
  }
}
```

## 自定义配置

配置同 [markdown-it-pangu](./#自定义配置)。
