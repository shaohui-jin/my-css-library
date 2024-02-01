<template>
  <div class="nav-bar-container">
    <el-icon @click="handleCollapse"><Operation /></el-icon>
    <span>{{ themeConfig.pageTitle }} {{ themeConfig.pageSubTitle !== '' ? `(${themeConfig.pageSubTitle})` : '' }}</span>
    <el-icon><User /></el-icon>
  </div>
</template>

<script lang="ts" setup>
  import { Operation, User } from '@element-plus/icons-vue'
  import { useStore } from '@/store'
  const themeConfig = useStore().useThemeStore
  const handleCollapse = () => {
    themeConfig.isCollapse = !themeConfig.isCollapse
  }
</script>

<style scoped lang="less">
  .nav-bar-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-icon {
    cursor: pointer;
  }
</style>
