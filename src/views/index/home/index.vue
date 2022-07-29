<template>
  <div id="home-page">
    <div class="banner">
      <img src="@/assets/images/logo.svg" alt="">
      <span class="title">TG Design</span>
      <h3>基于 Vue.js 3 的个人级 UI 组件库和前端解决方案，
        为无数开发者服务</h3>
      <div class="btns">
        <a href="javaScrip:;" @click="jump">
          <tg-icon icon="tg-paper-plane" size="21" style="margin-right:4px"></tg-icon>
          <span >开始使用</span>
        </a>
        <a href="https://github.com/wantao9191/default-template" class="default">
          <tg-icon icon="tg-rocket" size="21" style="margin-right:4px"></tg-icon>
          <span>GtiHub</span>
        </a>
      </div>
      <div class="intros">
        <div class="intro-item">
          <h3>易用</h3>
          <p>已经会了Vue？即刻阅读指南开始构建应用！</p>
        </div>
        <div class="intro-item">
          <h3>灵活</h3>
          <p>按需加载，全部加载，由你掌控！</p>
        </div>
        <div class="intro-item">
          <h3>高效</h3>
          <p>样式、功能无需操心，C&V操作，自在自由！</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
document.title = '首页 | TG-Design'
const router = useRouter()
const jump = () => {
  router.push('/doc')
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
    padding-top: 160px;

    h3 {
      font-size: #999;
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
      margin-top: 96px;

      a {
        height: 40px;
        line-height: 40px;
        width: 120px;
        display: inline-block;
        background: $primary;
        color: #fff;
        border-radius: 4px;
        margin: 0 8px;

        &.default {
          background: #fff;
          color: #333;
          border: 1px solid #ddd;
        }

        span {
          vertical-align: top;
        }
      }
    }

    .intros {
      display: flex;
      justify-content: space-around;
      margin-top: 100px;

      .intro-item {
        flex: 1;

        >h3 {
          color: $primary;
        }

        >p {
          font-size: 13px;
          margin-top: 12px;
        }
      }

    }
  }
}
</style>