<template>
  <m-header></m-header>
  <router-view />
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

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
</style>
