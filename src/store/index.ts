import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import { ThemeStore } from './modules/theme.ts'

const store = createPinia()
  .use(({ store }) => {
    // 这样写是因为用的是defineStore
    const initialState = JSON.parse(JSON.stringify(store.$state))
    store.$reset = () => {
      store.$state = JSON.parse(JSON.stringify(initialState))
    }
  })
  .use(piniaPluginPersist)

export const useStore = () => ({
  useThemeStore: ThemeStore(),
  $reset: () => {
    ThemeStore().$reset()
  }
})

export default store
