export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5c1c37d4","v-5f85e912","v-62ef9a50","v-3556efc2"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-5c1c37d4"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5c1c37d4","v-5f85e912","v-62ef9a50","v-3556efc2"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
