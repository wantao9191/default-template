<template>
  <main class="doc-main">
    <m-aside></m-aside>
    <main class="router-main">
      <router-view class="router-view"></router-view>
      <m-nav :key="routerkey"></m-nav>
    </main>
  </main>
</template>
<script setup>
import MAside from "@/components/MAside.vue";
import MNav from "@/components/MNav.vue";
import { ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const routerkey = ref(new Date().getTime())
const route = useRoute()
onBeforeRouteUpdate((to) => {
  routerkey.value = to.path
  document.title = to.meta ? to.meta.title + ' | TG-Design' : 'TG-Design'
  document.querySelector('.router-main').scrollTop = 0
})
document.title = route.meta ? route.meta.title + ' | TG-Design' : 'TG-Design'
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

    &::-webkit-scrollbar {
      /*高宽分别对应横竖滚动条的尺寸*/
      width: 8px;
      height: 8px;
    }

    /*滚动条里面小方块*/
    &::-webkit-scrollbar-thumb {
      border-radius: 10px !important;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
      /* 颜色 */
      /* background:#b6b6b6!important; */
      /* 线性渐变背景 */
      background: #d2d6dd;
    }

    >.router-view {
      background: #fff;
      margin: 12px;
      padding: 12px;
      width: calc(100% - 200px);
    }

  }

}
</style>
