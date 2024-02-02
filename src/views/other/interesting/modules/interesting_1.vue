<template>
  <div id="interesting_1" class="interesting_1"></div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
  .interesting_1 {
    width: 100px;
    height: 46px;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: 800;
    letter-spacing: 2px;
    color: #ffffff;

    &::before,
    &::after {
      width: 100px;
      height: 46px;
      border-radius: 9px;
      border: 1px dashed #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      content: '有彩蛋';
      background-color: #36afca;
      box-shadow: 0 0 0 4px #36afca;
      transition: transform 0.5s ease;
      backface-visibility: hidden;
    }
    &::after {
      content: '叫爸爸';
      background-color: #f89c6b;
      box-shadow: 0 0 0 4px #f89c6b;
      transform: rotateY(180deg);
    }

    &:hover::before {
      transform: rotateY(180deg);
    }

    &:hover::after {
      transform: rotateY(0deg);
    }
  }
</style>
