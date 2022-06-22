<template>
  <div id="home-page">
    <div class="banner"></div>
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

  >.banner {
    background: url(../../../assets/images/bg.png) center center no-repeat;
    background-size: cover;
    height: 100%;
  }
}
</style>