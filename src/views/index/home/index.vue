<template>
  <div id="home-page">
    <div class="banner">
      <img src="@/assets/images/logo.svg" alt="">
      <span class="title">TG Design</span>
      <h3>基于 Vue.js 3 的个人级 UI 组件库和前端解决方案，
        为无数开发者服务</h3>
      <div class="btns">
        <a href="javaScript:;">开始使用</a>
        <a href="javaScript:;">GtiHub</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const onClick = () => { };
    return { onClick };
  },
};
</script>
<style lang="scss" scoped>
#home-page {
  height: 100%;
  background: url(../../../assets/images/bg.png) center center no-repeat;
  background-size: cover;

  >.banner {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 1080px;
    text-align: center;

    h3 {
      font-size: #999;
      margin-top: 24px;
    }

    >.title {
      display: inline-block;
      font-size: 120px;
      vertical-align: middle;
      font-family: emoji;
      margin-left: 24px;
    }

    >img {
      vertical-align: middle;
      width: 240px;
    }

    .btns {
      margin-top: 48px;

      a {
        height: 40px;
        line-height: 40px;
        width: 120px;
        display: inline-block;
        background: $primary;
        color: #fff;
        border-radius: 4px;
        margin: 0 8px;
      }
    }
  }
}
</style>