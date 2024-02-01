<template>
  <el-menu default-active="2" class="menu-vertical" :collapse="isCollapse" :router="true">
    <el-sub-menu v-for="(m, mI) in MENU_LIST" :key="mI" :index="m.path" :route="m">
      <template #title>{{ m.name }}</template>
      <el-menu-item v-for="(cM, cI) in m.children" :key="`${mI}-${cI}`" :index="cM.path" :route="cM">
        <template #title>
          {{ cM.name }}
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
  import { useStore } from '@/store'
  import { useRouter, useRoute } from 'vue-router'
  import { MENU_LIST } from '@/router'
  import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
  const router = useRouter()
  const route = useRoute()
  const themeConfig = useStore().useThemeStore
  const isCollapse = ref<boolean>(true)
  const handleResize = (event: any) => {
    const innerWidth = event.target.innerWidth
    themeConfig.isCollapse = innerWidth < 768
  }
  watch(
    () => themeConfig.isCollapse,
    () => {
      isCollapse.value = themeConfig.isCollapse
    },
    { deep: true, immediate: true }
  )
  onMounted(() => {
    if (route.path === '') {
      router.replace(MENU_LIST[0].children ? MENU_LIST[0].children[0].path : MENU_LIST[0].path)
    }
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
</script>

<style scoped lang="less">
  .el-menu {
    width: 200px;
    min-height: 100%;
    //.el-sub-menu__title {
    //  :deep(.el-tooltip__trigger) {
    //    justify-content: center;
    //  }
    //}
    &.el-menu--collapse {
      width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
      :deep(.el-sub-menu__title) {
        --el-menu-base-level-padding: 5px;
        justify-content: center;
      }
    }
  }

  @media only screen and (orientation: portrait) and (max-width: 1000px) {
    .el-menu {
      width: 120px;
      min-height: 100%;
      .el-menu-item {
        font-size: 12px;
        font-weight: 500;
      }
      .el-menu--inline {
        .el-menu-item {
          padding-left: 5px;
        }
      }
      &.el-menu--collapse {
        width: 0;
        border: none;
      }
    }
  }
</style>
