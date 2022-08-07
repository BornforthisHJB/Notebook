import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://bornforthis.cn",

  author: {
    name: "AI悦创",
    url: "https://www.bornforthis.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "/BornforthisHJB/Notebook",

  docsDir: "StudentNotebook",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '长期招收编程一对一学员!微信:Jiabcdefh',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "AI悦创·编程私教学员",
    intro: "https://bornforthis.cn",
  },

  // encrypt: {
  //   config: {
  //     // "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "BornforthisHJB/comment",
      repoId: "R_kgDOHTJESw",
      category: "Announcements",
      categoryId: "DIC_kwDOHTJES84CO_Qz",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      tex: true,
      // enableAll: true,
      attrs: true,
      tabs: true,
      // vpre: true,
      codetabs: true,
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      align: true, // 自定义对齐
      footnote: true,
      // this is the default option, so you can use it directly
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
