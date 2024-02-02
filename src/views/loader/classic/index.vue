<template>
  <div class="login-body">
    <div class="login-container">
      <div class="left-container">
        <div class="title"><span>登录</span></div>
        <div class="input-container">
          <input type="text" name="username" placeholder="用户名" />
          <input type="password" name="password" placeholder="密码" />
        </div>
        <div class="message-container">
          <span>忘记密码</span>
        </div>
      </div>
      <div class="right-container">
        <div class="registry-container">
          <span>注册</span>
        </div>
        <div class="action-container">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import handleClipboard from '@/utils/clipboard.ts'
  const cssMap = reactive<Record<string, string>>({})
  const cssLength = ref<number>(0)

  onMounted(() => {
    import.meta.glob('./modules/*.css', { eager: true })
    const modules = import.meta.glob('./modules/*.css', { as: 'raw' })
    Object.keys(modules).forEach(k => {
      cssMap[k] = ''
      modules[k]().then(css => {
        cssMap[k] = css
      })
      cssLength.value = Object.keys(cssMap).length
    })
  })
  const copy = (i: number, $event: Event) => {
    handleClipboard(cssMap[`./modules/loading_${i}.css`], $event)
  }
</script>
