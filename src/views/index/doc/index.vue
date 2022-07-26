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
  components: { MAside, MNav },
  setup() {
    const routerkey = ref('')
    onBeforeRouteUpdate((to) => {
      routerkey.value = to.path
      document.querySelector('.router-main').scrollTop = 0
    })
    const onClick = () => { };
    return { onClick, routerkey };
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
