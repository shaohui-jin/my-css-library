<template>
  <div class="css-load-container">
    <article v-for="n in Object.keys(cssMap).length" :key="n">
      <component :is="cssMap[`./modules/interesting_${n}.vue`].comp"></component>
      <button @click="copy(n, $event)">Copy the CSS</button>
    </article>
  </div>
</template>
<script setup lang="ts">
  import { defineAsyncComponent, markRaw, onMounted, reactive } from 'vue'
  import handleClipboard from '@/utils/clipboard.ts'
  const cssMap = reactive<Record<string, { comp: any; code: string }>>({})

  onMounted(async () => {
    const modulesRaw = import.meta.glob('./modules/*.vue', { as: 'raw' })
    const modules = import.meta.glob('./modules/*.vue')
    for (let each in modules) {
      cssMap[each] = {
        comp: markRaw(defineAsyncComponent(modules[each] as any)),
        code: await modulesRaw[each]()
      }
    }
  })
  const copy = (i: number, $event: Event) => handleClipboard(cssMap[`./modules/interesting_${i}.vue`].code, $event)
</script>

<style lang="less" scoped>
  .el-main {
    .css-load-container {
      //transition: all 0.8s;
      //grid-area: 1/1;
      //grid-area: unset;
      //&:hover {
      article > * {
        grid-area: unset;
      }
      //}
      button:before {
        position: unset;
      }
    }
  }
</style>
