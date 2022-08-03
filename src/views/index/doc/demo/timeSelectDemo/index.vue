<template>
  <div class="demo icon-demo">
    <h2>TimeSelect 时间选择</h2>
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
    <!-- 固定时间点 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="timeSelectDemo2"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">固定时间点</span>
        <div class="desc-text">
          通过start、end和step指定起始时间，结束时间和步长。
        </div>
      </div>
      <div class="demo-code" v-show="radioData.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>start</code> 、 <code>end</code>控制开始与结束时间
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
    <!-- 时间范围 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="timeSelectDemo5"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">时间范围</span>
        <div class="desc-text">
          <code>min-time</code> 和
          <code>max-time</code> 属性可以用来控制时间选择的范围
        </div>
      </div>
      <div class="demo-code" v-show="radioData1.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>min-time</code> 和
            <code>max-time</code> 属性可以用来控制时间选择的范围
          </div>
          <pre v-html="demo5"></pre>
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
    <!-- 禁用状态 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="timeSelectDemo3"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">禁用状态</span>
        <div class="desc-text">
          <code>disabled</code> 属性可以用来控制时间选择的禁用状态
        </div>
      </div>
      <div class="demo-code" v-show="radioData1.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>disbaled</code>
            <code>Boolean</code>的属性控制时间选择状态
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
    </div>
    <!-- 不同尺寸 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="timeSelectDemo4"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">不同尺寸</span>
        <div class="desc-text">
          <code>size</code> 属性可以用来控制时间选择的尺寸
        </div>
      </div>
      <div class="demo-code" v-show="radioData2.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>size</code> <code>String</code>的属性控制时间选择尺寸
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import timeSelectDemo1 from "./timeSelect1.demo.vue";
import timeSelectDemoRaw1 from "./timeSelect1.demo.vue?raw";
import timeSelectDemo2 from "./timeSelect2.demo.vue";
import timeSelectDemoRaw2 from "./timeSelect2.demo.vue?raw";
import timeSelectDemo3 from "./timeSelect3.demo.vue";
import timeSelectDemoRaw3 from "./timeSelect3.demo.vue?raw";
import timeSelectDemo4 from "./timeSelect4.demo.vue";
import timeSelectDemoRaw4 from "./timeSelect4.demo.vue?raw";
import timeSelectDemo5 from "./timeSelect5.demo.vue";
import timeSelectDemoRaw5 from "./timeSelect5.demo.vue?raw";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(timeSelectDemoRaw1, Prism.languages.html, "html");
const demo2 = Prism.highlight(timeSelectDemoRaw2, Prism.languages.html, "html");
const demo3 = Prism.highlight(timeSelectDemoRaw3, Prism.languages.html, "html");
const demo4 = Prism.highlight(timeSelectDemoRaw4, Prism.languages.html, "html");
const demo5 = Prism.highlight(timeSelectDemoRaw5, Prism.languages.html, "html");
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