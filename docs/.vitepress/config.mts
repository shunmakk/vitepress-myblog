import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UniTech _Blog",
  description: "webエンジニアを目指す私立文系学生のブログ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search:{
      provider: "local"
   },
    nav: [
      { text: 'Home', link: '/' },
      {text: 'My portfolio', 
      items:[{
        text: 'ハッカソン',
        link: 'https://deft-pony-a93fbb.netlify.app/'
      },],
    }
    ],

    sidebar: [
      {
        text: 'サイドバー',
        items: [
          { text: '私について', link: '/posts/about' },
          { text: 'ブログ記事一覧', link: '/posts/postList' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shunmakk?tab=repositories' }
    ],
    footer: {
      message: 'UniTech_blog',
      copyright: 'UniTech_blog'
    }
  }
})


