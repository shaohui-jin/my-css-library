<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="themeConfig.isCollapse" :router="true">
    <el-menu-item v-for="(menu, menuIndex) in MENU_LIST" :index="menuIndex.toString()" @click="handleMenuItem(menu)">
      <!--      <el-icon><Document /></el-icon>-->
      <template #title>
        {{ menu.name }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { useStore } from '@/store'
  import { useRouter } from 'vue-router'
  import { RouteRecordRaw, MENU_LIST } from '@/router'
  const router = useRouter()
  const themeConfig = useStore().useThemeStore

  const handleMenuItem = (menu: RouteRecordRaw) => {
    router.push(menu.path)
  }
</script>

<style scoped lang="less">
  .el-menu {
    width: 200px;
    min-height: 100%;
    &.el-menu--collapse {
      width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
    }
  }
</style>
