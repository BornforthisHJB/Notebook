import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "笔记网站",
  description: "vuepress-theme-hope 的演示",

  base: "/Notebook/",

  theme,
});
