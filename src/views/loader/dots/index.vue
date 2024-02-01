<template>
  <div class="css-load-container">
    <article v-for="n in cssLength" :key="n">
      <div :id="`dots-loader_${n}`" :class="`dots-loader_${n}`"></div>
      <button @click="copy(n, $event)">Copy the CSS</button>
    </article>
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
