<template>
  <div class="demo icon-demo">
    <h2>TimeSelect 事件选择</h2>
    <p>用于选择日期</p>
    <h3>何时使用</h3>
    <ul>
      <li>提供几个固定的时间点供用户选择</li>
      <li>可用时间范围是 00:00-23:59</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基本用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="timeSelectDemo1"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">基本使用方式</div>
      </div>
      <div class="demo-code" v-show="radioData3.visible">
        <code class="code-bg">
          <div class="code-text">
            要使用 <code>timeSelect</code> 组件，只需要设置
            <code>v-model:value</code> 绑定变量， 选中意味着变量的值为相应
            <code>Checkbox Value</code>
            属性的值。
          </div>
          <pre v-html="demo1"></pre>
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
    <!-- 开始与结束时间 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="timeSelectDemo2"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">开始与结束时间</span>
        <div class="desc-text">
          通过start、end指定起始时间，结束时间。
        </div>
      </div>
      <div class="demo-code" v-show="radioData.visible">
        <code class="code-bg">
          <div class="code-text">
            在 <code>tg-checkbox-group</code> 组件中嵌套
            <code>tg-checkbox</code>组件，即可得到多选框组，改组绑定值应为数组
            <code>Array</code>。
          </div>
          <pre v-html="demo2"></pre>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">
          <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="toggleDemoCode">
          <tg-icon icon="tg-code" size="21"></tg-icon>
        </a>
      </div>
    </div>
    <!-- 禁用状态 -->
    <!-- <div class="demo-block">
        <div class="demo-component">
           <component :is="checkboxDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">禁用状态</span>
            <div class="desc-text"><code>disabled</code> 属性可以用来控制单选框的禁用状态</div>
        </div>
        <div class="demo-code" v-show="radioData1.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>disbaled</code> <code>Boolean</code>的属性控制单选框状态
        </div>
        <pre v-html="demo3"></pre>
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
    </div> -->
    <!-- 不同尺寸 -->
    <!-- <div class="demo-block">
        <div class="demo-component">
            <component :is="checkboxDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸</span>
            <div class="desc-text"><code>size</code> 属性可以用来控制单选框的大小</div>
        </div>
        <div class="demo-code" v-show="radioData2.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>size</code> <code>String</code>的属性控制单选框大小
        </div>
        <pre v-html="demo4"></pre>
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
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import timeSelectDemo1 from "./timeSelect1.demo.vue";
import timeSelectDemoRaw1 from "./timeSelect1.demo.vue?raw";
import timeSelectDemo2 from "./timeSelect2.demo.vue";
import timeSelectDemoRaw2 from "./timeSelect2.demo.vue?raw";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(timeSelectDemoRaw1, Prism.languages.html, "html");
const demo2 = Prism.highlight(timeSelectDemoRaw2, Prism.languages.html, "html");
const radioData = reactive({
  value: ["选项一"],
  visible: false,
});
const toggleDemoCode = () => {
  radioData.visible = !radioData.visible;
};
const radioData1 = reactive({
  value: ["选项一"],
  visible: false,
});
const toggleDemoCode1 = () => {
  radioData1.visible = !radioData1.visible;
};
const radioData2 = reactive({
  value: ["选项一"],
  value1: ["选项一"],
  value2: ["选项一"],
  visible: false,
});
const toggleDemoCode2 = () => {
  radioData2.visible = !radioData2.visible;
};
const radioData3 = reactive({
  value: false,
  value1: false,
  value2: false,
  value3: false,
  value4: false,
  value5: false,
  code: "",
  visible: false,
});
const toggleDemoCode3 = () => {
  radioData3.visible = !radioData3.visible;
};
</script>
<style lang="scss" scoped>
</style>