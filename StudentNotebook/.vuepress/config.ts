import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "笔记网站",
  description: "AI悦创编程一对一,少儿编程一对一教学,成人,大学生,小学生,人工智能,数据分析,数据结构等一对一教学,微信:Jiabcdefh",

  base: "/Notebook/",

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
          
        },
      },
    }),
  ],

  theme,
});
