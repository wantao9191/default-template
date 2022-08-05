<template>
  <div id="app-view">
    <main>
      <router-view class="router-view" />
    </main>
  </div>
</template>
<script setup>
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
