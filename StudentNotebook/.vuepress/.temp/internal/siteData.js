export const siteData = JSON.parse("{\"base\":\"/Notebook/\",\"lang\":\"zh-CN\",\"title\":\"笔记网站\",\"description\":\"AI悦创编程一对一,少儿编程一对一教学,成人,大学生,小学生,人工智能,数据分析,数据结构等一对一教学,微信:Jiabcdefh\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
