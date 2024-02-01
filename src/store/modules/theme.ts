import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { CookieEnum } from '@/constant/index.ts'
import { isObjectEmpty } from '@/utils/common.ts'
import { getCookie } from '@/utils/cookie.ts'

/** 场景类型， 已经使用的默认场景参数才写进来 */
export type ThemeType = LayoutOption

/** 布局设置 */
type LayoutOption = {
  isCollapse: boolean // 是否开启菜单水平折叠效果
  pageTitle: string // 页面标题
  pageSubTitle: string // 页面子标题
}

/** 默认场景参数 */
const defaultThemeConfig: ThemeType = {
  isCollapse: false,
  pageTitle: '',
  pageSubTitle: ''
}

export const ThemeStore = defineStore(
  'theme',
  () => {
    let config = JSON.parse(getCookie(CookieEnum.CUSTOM_THEME, { type: 'localStorage' }) || '{}')
    config = isObjectEmpty(config) ? defaultThemeConfig : config

    const themeConfig = reactive<ThemeType>(config)

    return { ...toRefs(themeConfig) }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ key: CookieEnum.CUSTOM_THEME, storage: localStorage }]
    }
  }
)
