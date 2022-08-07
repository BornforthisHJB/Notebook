export const categoryMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","keys":["v-5c1c37d4","v-5f85e912","v-62ef9a50","v-3556efc2"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-5c1c37d4","v-5f85e912","v-62ef9a50","v-3556efc2"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-5c1c37d4","v-5f85e912","v-62ef9a50","v-3556efc2"]},"tag B":{"path":"/tag/tag-b/","keys":["v-5c1c37d4","v-5f85e912","v-62ef9a50","v-3556efc2"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
