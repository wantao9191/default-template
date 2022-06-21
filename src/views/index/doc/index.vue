<template>
  <main class="doc-main">
    <m-aside></m-aside>
    <router-view class="router-view"></router-view>
  </main>
</template>
<script>
import MAside from "@/components/MAside.vue";
export default {
  components: { MAside },
  setup() {
    const onClick = () => {};
    return { onClick };
  },
};
</script>
<style lang="less" scoped>
.doc-main {
  height: 100%;
  display: flex;
  > .router-view {
    margin: 12px;
    background: #fff;
    border-radius: 4px;
  }
}
</style>