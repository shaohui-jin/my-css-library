<template>
  <div class="load-container">
    <article v-for="n in number" :key="n">
      <div :id="`classic-loader_${n}`" :class="`classic-loader_${n}`"></div>
      <button @click="copy(n, $event)">Copy the CSS</button>
    </article>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import handleClipboard from '@/utils/clipboard.ts'

  const getUrl = (path: string) => {
    return new URL(path, import.meta.url).href
  }
  const number = 40
  onMounted(() => {
    for (let i = 1; i <= number; i++) {
      // 动态创建 link 元素并添加到 head 元素中
      const url = getUrl(`./modules/loading_${i}.css`)
      const link = document.createElement('link')
      link.href = url
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
  })
  const copy = (i: number, $event: Event) => {
    const url = `/classic-loader/modules/loading_${i}.css`
    const styleArray: CSSStyleSheet[] = Array.from(document.styleSheets)
    let style: CSSStyleSheet
    style = (styleArray.find(e => (e.href || '').includes(url)) || {}) as CSSStyleSheet
    let cssList: Array<CSSStyleRule | CSSKeyframesRule>
    cssList = Array.from(style.cssRules || []) as Array<CSSStyleRule | CSSKeyframesRule>
    handleClipboard(cssList.map((z: any) => z.cssText || '').join('\n'), $event)
  }
</script>
