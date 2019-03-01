const name = 'markdown-it-pangu'

module.exports = ({ isProd }) => ({
  base: `/${name}/`,
  title: name,
  description: '一个自动插入空格的 markdown-it 插件',

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    ['pangu', {
    }],
  ],
  
  themeConfig: {
    repo: `Shigma/${name}`,
    editLinks: true,
    docsDir: 'src/docs',
    sidebar: [
      '/',
      '/vuepress.html'
    ],
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },

  evergreen: !isProd,
})
