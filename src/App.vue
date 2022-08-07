<template>
  <div id="app-view">
    <main>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { messageBox, message } from '@/libs'
const visible = ref(false);
const beforeClose = (done: any) => {
  messageBox.confirm('是否确认关闭', '提示').then(() => {
    done()
  }).catch(() => {
    message({ message: '取消关闭', type: 'error' })
  })
}
</script>

<style lang="scss">
#app-view {
  height: 100%;
  background: #f5f7f9;

  >main {
    height: calc(100% - 50px);

    .router-view {
      min-height: 100%;
    }
  }
}
</style>
