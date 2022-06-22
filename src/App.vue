<template>
  <div id="app-view">
    <m-header></m-header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import MHeader from "@/components/MHeader.vue";

export default {
  components: {
    MHeader,
  },
  setup() {},
};
</script>

<style lang="scss">
#app-view {
  height: 100%;
  background: #f5f7f9;
  > main {
    display: flex;
    height: calc(100% - 50px);
  }
}
</style>
