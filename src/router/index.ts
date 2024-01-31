import { createRouter, createWebHistory, RouteRecordRaw as _RouteRecordRaw } from 'vue-router'
import { reactive } from 'vue'
import { useStore } from '@/store'

interface extra {
  title?: string
}
export type RouteRecordRaw = _RouteRecordRaw & extra

export const MENU_LIST = reactive<Array<RouteRecordRaw>>([
  {
    path: '/classic-loader',
    name: 'The Classic Loader',
    title: 'The Classic CSS Loaders Collection',
    component: () => import(/* webpackChunkName: "about" */ '../views/classic-loader/index.vue')
  },
  {
    path: '/dots-loader',
    name: 'The Dots Loader',
    title: 'The Dots CSS Loaders Collection',
    component: () => import(/* webpackChunkName: "about" */ '../views/dots-loader/index.vue')
  }
])

const routes: Array<RouteRecordRaw> = [...MENU_LIST]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(to => {
  const menu = MENU_LIST.find(e => e.path === to.path)
  const themeConfig = useStore().useThemeStore
  themeConfig.pageTitle = menu?.title || ''
})
export default router
