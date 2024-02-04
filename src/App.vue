<template>
  <div class="main-layout">
    <el-container>
      <el-aside><SideBar /></el-aside>
      <el-container>
        <el-header><NavBar /></el-header>
        <el-main><router-view /></el-main>
        <el-footer>这只是个footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'
  const SideBar = defineAsyncComponent(() => import('@/layout/sideBar/index.vue'))
  const NavBar = defineAsyncComponent(() => import('@/layout/navBar/index.vue'))
</script>

<style lang="less">
  .main-layout {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .el-aside {
    height: 100%;
    width: unset;
  }
  .el-header {
    --el-header-padding: 0 10px;
    --el-header-height: 50px;
  }
  .el-main {
    @import '@/assets/css/body.less';
    border-bottom: solid 1px var(--el-menu-border-color);
    border-top: solid 1px var(--el-menu-border-color);
  }
  .el-footer {
    --el-footer-padding: 0 10px;
    --el-footer-height: 50px;
    line-height: var(--el-footer-height);
  }
</style>
