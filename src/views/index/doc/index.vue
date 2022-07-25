<template>
  <main class="doc-main">
    <m-aside></m-aside>
    <main class="router-main">
      <router-view class="router-view"></router-view>
      <m-nav :key="routerkey"></m-nav>
    </main>
  </main>
</template>
<script>
import MAside from "@/components/MAside.vue";
import MNav from "@/components/MNav.vue";
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
export default {
  components: { MAside,MNav },
  setup() {    
    const routerkey = ref('')
    onBeforeRouteUpdate((to)=>{
      routerkey.value = to.path
    })
    const onClick = () => { };
    return { onClick,routerkey };
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
      width: calc(100% - 200px);
    }

  }

}
</style>
