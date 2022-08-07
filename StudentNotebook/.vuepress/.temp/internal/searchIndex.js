export const searchIndex = [
  {
    "title": "笔记博客",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章 10",
    "headers": [
      {
        "level": 2,
        "title": "标题 2",
        "slug": "标题-2",
        "children": [
          {
            "level": 3,
            "title": "标题 3",
            "slug": "标题-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/blog/article10.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章 11",
    "headers": [
      {
        "level": 2,
        "title": "标题 2",
        "slug": "标题-2",
        "children": [
          {
            "level": 3,
            "title": "标题 3",
            "slug": "标题-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/blog/article11.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章 12",
    "headers": [
      {
        "level": 2,
        "title": "标题 2",
        "slug": "标题-2",
        "children": [
          {
            "level": 3,
            "title": "标题 3",
            "slug": "标题-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/blog/article12.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章 9",
    "headers": [
      {
        "level": 2,
        "title": "标题 2",
        "slug": "标题-2",
        "children": [
          {
            "level": 3,
            "title": "标题 3",
            "slug": "标题-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/blog/article9.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "加密",
    "headers": [],
    "path": "/encrypted/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "幻灯片",
    "headers": [],
    "path": "/slide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "收藏",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CategoryA 分类",
    "headers": [],
    "path": "/category/categorya/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "tag A 标签",
    "headers": [],
    "path": "/tag/tag-a/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CategoryB 分类",
    "headers": [],
    "path": "/category/categoryb/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "tag B 标签",
    "headers": [],
    "path": "/tag/tag-b/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
