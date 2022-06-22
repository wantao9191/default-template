<template>
  <div class="m-header shadow">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="" />
      <span>TG Design</span>
    </div>
    <div class="nav">
      <a href="javaScript:;">指南</a><a href="javaScript:;">组件</a>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
.m-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 24px;
  height: 50px;
  background: #fff;
  position:relative;
  z-index:1;
  .logo {
    cursor: pointer;
    img {
      width: 50px;
      vertical-align: middle;
    }
    > span {
      display: inline-block;
      vertical-align: sub;
      margin-left: 12px;
      font-size: 20px;
      font-family: emoji;
      color: #1890ff;
    }
  }
  .nav {
    line-height: 50px;
  }
}
</style>