import { createRouter, createWebHistory, RouteRecordRaw as _RouteRecordRaw } from 'vue-router'
import { reactive } from 'vue'
import { useStore } from '@/store'

interface extra {
  meta: {
    title: string
  }
}
export type RouteRecordRaw = _RouteRecordRaw & extra

export const MENU_LIST = reactive<Array<RouteRecordRaw>>([
  {
    path: '/loader',
    name: 'Loader',
    meta: {
      title: 'CSS Loaders'
    },
    children: [
      {
        path: '/classic-loader',
        name: 'Classic Loader',
        meta: {
          title: 'The Classic CSS Loaders Collection'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/loader/classic/index.vue')
      },
      {
        path: '/dots-loader',
        name: 'Dots Loader',
        meta: {
          title: 'The Dots CSS Loaders Collection'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/loader/dots/index.vue')
      }
    ]
  },
  {
    path: '/other',
    name: 'Other',
    meta: {
      title: 'Other'
    },
    children: [
      {
        path: '/interesting',
        name: 'Interesting VUE Comp',
        meta: {
          title: 'The Interesting VUE Component Collection'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/other/interesting/index.vue')
      }
    ]
  }
])

const routes: Array<RouteRecordRaw> = [...MENU_LIST]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(to => {
  console.log(to.matched)
  if (to.matched.length === 2) {
    const themeConfig = useStore().useThemeStore
    themeConfig.pageTitle = (to.matched[0].meta.title || '') as string
    themeConfig.pageSubTitle = (to.matched[1].meta.title || '') as string
  }
})
export default router
