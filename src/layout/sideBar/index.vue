<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
    <el-menu-item v-for="(menu, menuIndex) in MENU_LIST" :key="menuIndex" :index="menu.path" :route="menu">
      <template v-if="isCollapse">{{ menu.shortName }}</template>
      <template v-else></template>
      <template #title>
        {{ menu.name }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { useStore } from '@/store'
  import { useRouter } from 'vue-router'
  import { MENU_LIST } from '@/router'
  import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
  const router = useRouter()
  const themeConfig = useStore().useThemeStore
  const isCollapse = ref<boolean>(true)
  const handleResize = (event: any) => {
    const innerWidth = event.target.innerWidth
    themeConfig.isCollapse = innerWidth < 500
  }
  watch(
    () => themeConfig.isCollapse,
    () => {
      isCollapse.value = themeConfig.isCollapse
    },
    { deep: true, immediate: true }
  )
  onMounted(() => {
    router.push(MENU_LIST[0].path)
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
    .el-menu-item {
      /deep/ .el-menu-tooltip__trigger {
        justify-content: center;
      }
    }
    &.el-menu--collapse {
      width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
      .el-menu-item {
        --el-menu-base-level-padding: 5px;
      }
    }
  }

  @media only screen and (orientation: portrait) and (max-width: 768px) {
    .el-menu {
      width: 120px;
      min-height: 100%;
      .el-menu-item {
        font-size: 12px;
        font-weight: 500;
      }
      &.el-menu--collapse {
        width: 0;
      }
    }
  }
</style>
