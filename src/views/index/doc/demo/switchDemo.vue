<template>
  <div class="demo switch-demo">
    <h2>Switch 开关</h2>
    <p>开关选择器</p>
    <h3>何时使用</h3>
    <ul>
      <li>需要表示开关状态/两种状态之间的切换时；</li>
      <li>表示两种相对立的状态间的切换，</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基础用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-switch v-model:value="switchData1.checked" />
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">最简单的用法</div>
      </div>
      <div class="demo-code" v-show="switchData1.visible">
        <code class="code-bg">
          <div class="code-text">
            绑定
            <code>v-model:value</code> 到一个
        <code>Boolean</code> 类型的变量。
      </div>
      <m-code :value="switchData1.code"></m-code>
      </code>
    </div>
    <div class="demo-btns">
      <a href="javaScript:;">
        <tg-icon icon="tg-copy"></tg-icon>
      </a>
      <a href="javaScript:;" @click="toggleDemoCode1">
      <tg-icon icon="tg-code" size="21"></tg-icon>
      </a>
    </div>
  </div>
  <!-- 文字描述 -->
  <div class="demo-block">
    <div class="demo-component">
      <tg-switch v-model:value="switchData5.checked1" active-text="开" inactive-text="关" />
    </div>
    <div class="demo-desc">
      <span class="desc-title">文字描述</span>
      <div class="desc-text">开关带有文字描述</div>
    </div>
    <div class="demo-code" v-show="switchData5.visible">
      <code class="code-bg">
          <div class="code-text">
            使用
            <code>active-text</code>
      属性与
      <code>inactive-text</code>
      属性来设置开关的文字描述。
    </div>
    <m-code :value="switchData2.code"></m-code>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">
      <tg-icon icon="tg-copy"></tg-icon>
    </a>
    <a href="javaScript:;" @click="toggleDemoCode5">
      <tg-icon icon="tg-code" size="21"></tg-icon>
    </a>
  </div>
  </div>
  <!-- 其他颜色 -->
  <div class="demo-block">
    <div class="demo-component">
      <span style="margin-right:6px">primary:</span>
      <tg-switch v-model:value="switchData2.checked1" type="primary" />
      <span style="margin:0 6px 0 24px">danger:</span>
      <tg-switch v-model:value="switchData2.checked2" type="danger" />
      <span style="margin:0 6px 0 24px">success:</span>
      <tg-switch v-model:value="switchData2.checked3" type="success" />
    </div>
    <div class="demo-desc">
      <span class="desc-title">其他配色</span>
      <div class="desc-text">开关的其他颜色</div>
    </div>
    <div class="demo-code" v-show="switchData2.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>type</code>
      属性
      <code>String</code>
      类型的变量:
      <code style="margin-right:5px">danger</code>
      <code style="margin-right:5px">success</code>
      <code>primary</code> 改变颜色
    </div>
    <m-code :value="switchData3.code"></m-code>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">
      <tg-icon icon="tg-copy"></tg-icon>
    </a>
    <a href="javaScript:;" @click="toggleDemoCode2">
      <tg-icon icon="tg-code" size="21"></tg-icon>
    </a>
  </div>
  </div>
  <!-- 禁用状态  -->
  <div class="demo-block">
    <div class="demo-component">
      <tg-switch v-model:value="switchData3.checked1" :disabled="true" style="margin-right:10px" />
      <tg-switch v-model:value="switchData3.checked2" type="success" disabled />
    </div>
    <div class="demo-desc">
      <span class="desc-title">禁用状态</span>
      <div class="desc-text">开关的是否可点击状态控制</div>
    </div>
    <div class="demo-code" v-show="switchData3.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>disabled</code>
      属性
      <code>Boolean</code>
      类型的变量控制状态
    </div>
    <m-code :value="switchData4.code"></m-code>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">
      <tg-icon icon="tg-copy"></tg-icon>
    </a>
    <a href="javaScript:;" @click="toggleDemoCode3">
      <tg-icon icon="tg-code" size="21"></tg-icon>
    </a>
  </div>
  </div>
  <!-- 两种尺寸 -->
  <div class="demo-block">
    <div class="demo-component">
      <tg-switch v-model:value="switchData4.checked1" style="margin-right:10px" />
      <tg-switch v-model:value="switchData4.checked2" size="small" />
    </div>
    <div class="demo-desc">
      <span class="desc-title">两种尺寸</span>
      <div class="desc-text">开关包含两种尺寸</div>
    </div>
    <div class="demo-code" v-show="switchData4.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>size</code>
      属性
      <code>small</code>
      选择小尺寸开关
    </div>
    <m-code :value="switchData5.code"></m-code>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">
      <tg-icon icon="tg-copy"></tg-icon>
    </a>
    <a href="javaScript:;" @click="toggleDemoCode4">
      <tg-icon icon="tg-code" size="21"></tg-icon>
    </a>
  </div>
  </div>
  </div>
</template>
<script lang="ts">
import MCode from '@/components/MCode.vue'
import { ref, reactive } from "vue";
export default {
  components: { MCode },
  setup() {
    const switchData1 = reactive({
      checked: true,
      txt: "显示",
      visible: false,
      code: '<template>,2&<tg-switch v-model:value:"checked">,</temlate>'
    });
    const switchData2 = reactive({
      checked1: true,
      checked2: true,
      checked3: true,
      txt: "显示",
      visible: false,
      code: '<template>,2&<tg-switch v--model:value:"checked" active-text="开" inactive-text="关">,</template>'
    });
    const switchData3 = reactive({
      checked1: true,
      checked2: false,
      txt: "显示",
      visible: false,
      code: '<template>,2&<tg-switch v-model:value:"checked" type="primary">,2&<tg-switch v-model:value:"checked" type="danger">,2&<tg-switch v-model:value:"checked" type="success">,</temlate>'
    });
    const switchData4 = reactive({
      checked1: true,
      checked2: true,
      txt: "显示",
      visible: false,
      code: '<template>,2&<tg-switch v-model:value:"checked">,</temlate>'
    });
    const switchData5 = reactive({
      checked1: true,
      txt: "显示",
      visible: false,
      code: '<template>,2&<tg-switch v-model:value:"checked">,2&<tg-switch v-model:value:"checked" size="mini">,</temlate>'
    });
    const toggleDemoCode1 = () => {
      switchData1.visible = !switchData1.visible;
      switchData1.txt = switchData1.visible ? "收起" : "显示";
    };
    const toggleDemoCode2 = () => {
      switchData2.visible = !switchData2.visible;
      switchData2.txt = switchData2.visible ? "收起" : "显示";
    };
    const toggleDemoCode3 = () => {
      switchData3.visible = !switchData3.visible;
      switchData3.txt = switchData3.visible ? "收起" : "显示";
    };
    const toggleDemoCode4 = () => {
      switchData4.visible = !switchData4.visible;
      switchData4.txt = switchData4.visible ? "收起" : "显示";
    };
    const toggleDemoCode5 = () => {
      switchData5.visible = !switchData5.visible;
      switchData5.txt = switchData5.visible ? "收起" : "显示";
    };
    return {
      toggleDemoCode1,
      toggleDemoCode2,
      toggleDemoCode3,
      toggleDemoCode4,
      toggleDemoCode5,
      switchData1,
      switchData2,
      switchData3,
      switchData4,
      switchData5
    };
  },
};
</script>
<style lang="scss" scoped>
</style>