<template>
  <div id="app-view">
    <main>
      <tg-button >1111</tg-button> 
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
