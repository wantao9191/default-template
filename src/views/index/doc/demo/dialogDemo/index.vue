<template>
  <div class="demo dialog-demo">
    <h2>Dialog 对话框</h2>
    <p>模态对话框，在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h3>何时使用</h3>
    <ul>
      <li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基础用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="dialogDemo1" />
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">Dialog 弹出一个对话框，适合需要定制性更大的场景。</div>
      </div>
      <div class="demo-code" v-show="demo1Visible">
        <code class="code-bg">
          <div class="code-text">
            通过
            <code>visible</code>
            属性
            <code>Boolean</code> 类型的变量，打开/关闭
            <code>tg-dialog</code>
            对话框。
          </div>
        </code>
        <pre class="language-html" v-html="demo1"></pre>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="demo1Visible =!demo1Visible">{{demo1Visible?'隐藏':'显示'}}</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import dialogDemo1 from "./dialog1.demo.vue";
import { reactive, ref } from "vue";
import "prismjs";
export default {
  setup() {
    const Prism: any = (window as any).Prism;
    const demo1 = reactive(dialogDemo1)
    console.log()
    // const demo1 = Prism.highlight(
    //   dialogDemo1.__demo,
    //   Prism.languages.html,
    //   "html"
    // );
    const demo1Visible = ref(false)
    return { demo1,dialogDemo1,demo1Visible };
  },
};
</script>