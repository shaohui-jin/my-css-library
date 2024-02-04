<template>
  <div class="interesting_4-container">
    <div class="center">
      <div class="center__inner"></div>
    </div>
    <div class="round" title="乾 - 天"> </div>
    <div class="round" title="兑 - 泽">
      <div class="white3"></div>
    </div>
    <div class="round" title="离 - 火">
      <div class="white2"></div>
    </div>
    <div class="round" title="震 - 雷">
      <div class="white2"></div>
      <div class="white3"></div>
    </div>
    <div class="round" title="坤 - 地">
      <div class="white1"></div>
      <div class="white2"></div>
      <div class="white3"></div>
    </div>
    <div class="round" title="艮 - 山">
      <div class="white1"></div>
      <div class="white2"></div>
    </div>
    <div class="round" title="坎 - 水">
      <div class="white1"></div>
      <div class="white3"></div>
    </div>
    <div class="round" title="巽 - 风">
      <div class="white1"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .interesting_4-container {
    margin: 10px;
    width: 200px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .center {
      // 太极鱼部分
      width: 100px;
      height: 100px;
      position: relative;
      border-radius: 50%;
      box-shadow:
        0px -5px 10px 0px rgba(42, 245, 152, 0.4),
        0px 5px 10px 0px rgba(8, 174, 234, 0.4);
      animation: circle 5s linear infinite;
      @keyframes circle {
        to {
          transform: rotate(360deg);
        }
      }

      .center__inner {
        // 太极小圆半径是 1/4 大圆直径，所以top是26px
        // 宽度width + 2倍的border宽度就是半个圆的宽度
        // before 和 after颜色相反，且一个left 一个right
        &:before,
        &:after {
          content: '';
          width: 12px;
          height: 12px;
          position: absolute;
          left: 0;
          top: 26px;
          border-radius: 50%;
          background-color: #000;
          border: 19px solid #fff;
          z-index: 1;
        }
        &:after {
          right: 0;
          left: unset;
          background-color: #fff;
          border: 19px solid #000;
        }
      }

      // 控制圆弧
      &:before,
      &:after {
        content: '';
        width: 100px;
        height: 50px;
        left: 0;
        top: 0;
        position: absolute;
        background-color: #fff;
        border-radius: 50px 50px 0 0;
      }
      &:after {
        top: 50px;
        background-color: #000;
        border-radius: 0 0 50px 50px;
      }
    }
    .round {
      width: 40px;
      height: 5px;
      background-color: #2af598;
      position: absolute;
      top: 0;
      transform-origin: 20px 100px;
      animation: eff49 5s linear infinite;
      opacity: 0.2;

      &:before,
      &:after {
        content: '';
        width: 40px;
        height: 5px;
        background-color: #08aeea;
        position: absolute;
        left: 0;
        top: 10px;
      }
      &:after {
        top: 20px;
        background-color: #000;
      }

      //.loop(@i) when (@i<=9) {
      //  &:nth-of-type(@{i}) {
      //    @rotate: 90 - (@i * 45)deg;
      //    transform: rotate(@rotate);
      //    //animation-delay: 4.375s;
      //  }
      //  .loop(@i+1);
      //}
      //.loop(1);

      &:nth-of-type(3) {
        transform: rotate(-45deg);
        animation-delay: 4.375s;
      }
      &:nth-of-type(4) {
        transform: rotate(-90deg);
        animation-delay: 3.75s;
      }
      &:nth-of-type(5) {
        transform: rotate(-135deg);
        animation-delay: 3.125s;
      }
      &:nth-of-type(6) {
        transform: rotate(-180deg);
        animation-delay: 2.5s;
      }
      &:nth-of-type(7) {
        transform: rotate(-225deg);
        animation-delay: 1.875s;
      }
      &:nth-of-type(8) {
        transform: rotate(-270deg);
        animation-delay: 1.25s;
      }
      &:nth-of-type(9) {
        transform: rotate(-315deg);
        animation-delay: 0.625s;
      }

      .white1,
      .white2,
      .white3 {
        width: 10px;
        height: 7px;
        background-color: #ffffff;
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 10;
      }

      .white2 {
        top: 10px;
      }

      .white3 {
        top: 20px;
      }

      @keyframes eff49 {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0.2;
        }
      }
    }
  }
</style>
