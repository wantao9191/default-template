<template>
  <main class="doc-main">
    <m-aside></m-aside>
    <main class="router-main">
      <router-view class="router-view"></router-view>
    </main>
  </main>
</template>
<script>
import MAside from "@/components/MAside.vue";
export default {
  components: { MAside },
  setup() {
    const onClick = () => { };
    return { onClick };
  },
};
</script>
<style lang="scss">
@import './demo/demo.scss';
</style>
<style lang="scss" scoped>
.doc-main {
  height: 100%;
  display: flex;

  >.router-main {
    width: calc(100vw - 200px);
    overflow-y: auto;
    border-radius: 4px;
    >.router-view {
      background: #fff;
      margin: 12px;
      padding: 12px;
    }
  }

}
</style>
