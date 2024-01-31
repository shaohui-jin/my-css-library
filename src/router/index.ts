import { createRouter, createWebHistory, RouteRecordRaw as _RouteRecordRaw } from 'vue-router'
import { reactive } from 'vue'
import { useStore } from "@/store";

export type RouteRecordRaw = _RouteRecordRaw & { title?: string }
export const MENU_LIST = reactive<[RouteRecordRaw]>([
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

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/classic-loader'
  },
  ...MENU_LIST
]

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
