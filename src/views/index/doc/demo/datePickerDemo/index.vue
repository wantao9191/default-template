<template>
    <div class="demo icon-demo">
        <h2>DatePicker 输入框</h2>
        <p>
            基本表单组件，日期时间选择器来自日期选择器和时间选择器的组合。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>在同一个选择器里选择日期和时间</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="datePickerDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="inputData.visible">
                <code class="code-bg">
          <div class="code-text">
            绑定
            <code>v-model:value</code> 到一个 <code>String</code> 类型的变量。
            </div>
            <pre v-html="demo1"></pre>
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
    <div class="demo-block">
        <div class="demo-component">
            <component :is="datePickerDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">禁用状态</span>
            <div class="desc-text">
                使用 <code>disabled</code> 属性即可得到一个被禁用的时间选择器
            </div>
        </div>
        <div class="demo-code" v-show="inputData2.visible">
            <code class="code-bg">
          <div class="code-text">
            传入 <code>disbaled</code> <code>Boolean</code>的属性控制输入框状态
        </div>
        <pre v-html="demo2"></pre>
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
    <!-- 不同类型 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="datePickerDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同类型</span>
            <div class="desc-text">
                更改 <code>type</code> 属性即可得到不同的时间选择器

            </div>
        </div>
        <div class="demo-code" v-show="inputData3.visible">
            <code class="code-bg">
          <div class="code-text">
            传入type <code>date</code> 、 <code>month</code> 、 <code>year</code> 控制时间选择器其类型
        </div>
        <pre v-html="demo3"></pre>
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
    <!-- 带图标的 -->
    <!-- <div class="demo-block">
    <div class="demo-component">
      <tg-date-picker v-model:value="inputData4.value1" size="small" prefixIcon="desktop" />
      <tg-date-picker v-model:value="inputData4.value2" size="small" style="margin:12px 0" clearable>
        <template v-slot:suffixIcon>
          <tg-icon icon="tg-search"></tg-icon>
        </template>
      </tg-date-picker>
      <tg-date-picker v-model:value="inputData4.value3" size="small">
        <template v-slot:prefixIcon>
          <tg-icon icon="tg-mail-unread"></tg-icon>
        </template>
        <template v-slot:suffixIcon>
          <tg-icon icon="tg-search"></tg-icon>
        </template>
      </tg-date-picker>
    </div>
    <div class="demo-desc">
      <span class="desc-title">带图标的输入框</span>
      <div class="desc-text">带有图标标记输入类型</div>
    </div>
    <div class="demo-code" v-show="inputData4.visible">
      <code class="code-bg">
          <div class="code-text">
            通过 <code>prefixIcon</code>和
      <code>suffixIcon</code> 属性增加图标。另外，<code>prefix</code> 和
      <code>suffix</code> 命名的插槽也能正常工作。
    </div>
    <m-code :value="inputData4.code"></m-code>
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
  </div> -->
    <!-- 不同尺寸 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="datePickerDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸的时间选择器</span>
            <div class="desc-text">使用 <code>size</code> 属性改变时间选择器大小。 除了默认大小外，还有另外两个选项：<code>large</code> ,
                <code>small</code>
                。
            </div>
        </div>
        <div class="demo-code" v-show="inputData5.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code>size</code>和
            <code>String</code> 属性控制时间选择器尺寸
        </div>
        <pre v-html="demo4"></pre>
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
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import datePickerDemo1 from './datePicker1.demo.vue'
import datePickerDemoRaw1 from './datePicker1.demo.vue?raw'
import datePickerDemo2 from './datePicker2.demo.vue'
import datePickerDemoRaw2 from './datePicker2.demo.vue?raw'
import datePickerDemo3 from './datePicker3.demo.vue'
import datePickerDemoRaw3 from './datePicker3.demo.vue?raw'
import datePickerDemo4 from './datePicker4.demo.vue'
import datePickerDemoRaw4 from './datePicker4.demo.vue?raw'
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    datePickerDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    datePickerDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    datePickerDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    datePickerDemoRaw4,
    Prism.languages.html,
    "html"
);
const inputData = reactive({
    visible: false,
});
const toggleDemoCode = () => {
    inputData.visible = !inputData.visible;
};
const inputData1 = reactive({
    visible: false,
});
const toggleDemoCode1 = () => {
    inputData1.visible = !inputData1.visible;
};
const inputData2 = reactive({
    visible: false,
});
const toggleDemoCode2 = () => {
    inputData2.visible = !inputData2.visible;
};
const inputData3 = reactive({
    visible: false,
});
const toggleDemoCode3 = () => {
    inputData3.visible = !inputData3.visible;
};
const inputData4 = reactive({
    visible: false,
});
const toggleDemoCode4 = () => {
    inputData4.visible = !inputData4.visible;
};
const inputData5 = reactive({
    visible: false,
});
const toggleDemoCode5 = () => {
    inputData5.visible = !inputData5.visible;
};
const onBlur = e => {
    console.log('blur', e)
}
const onChange = e => {
    console.log(e)
}
</script>
<style lang="scss" scoped>
</style>