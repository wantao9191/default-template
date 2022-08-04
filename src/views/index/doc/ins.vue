<template>
  <div class="demo button-demo">
    <h2>安装</h2>

    <h3>代码演示</h3>
    <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <pre><code>npm i element-ui -S</code></pre>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.demo {
  > h3 {
    margin-top: 20px;
  }
  > p {
    font-size: 13px;
  }
  > pre {
    background: #fafafa;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 12px;
  }
}
</style>