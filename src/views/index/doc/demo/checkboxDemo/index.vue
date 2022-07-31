<template>
    <div class="demo icon-demo">
        <h2>Checkbox 单选框</h2>
        <p>
            基本表单组件，在一组备选项中进行多选。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="checkboxDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="radioData3.visible">
                <code class="code-bg">
          <div class="code-text">
            要使用 <code>Checkbox</code> 组件，只需要设置 <code>v-model:value</code> 绑定变量， 选中意味着变量的值为相应
                <code>Checkbox Value</code>
                属性的值，<code>value</code> 可以是 <code>Boolean</code> 。
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
    <!-- 多选框组 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="checkboxDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">多选框组</span>
            <div class="desc-text">适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</div>
        </div>
        <div class="demo-code" v-show="radioData.visible">
            <code class="code-bg">
          <div class="code-text">
            在 <code>tg-checkbox-group</code> 组件中嵌套 <code>tg-checkbox</code>组件，即可得到多选框组，改组绑定值应为数组 <code>Array</code>。
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
    <div class="demo-block">
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
    </div>
    <!-- 不同尺寸 -->
    <div class="demo-block">
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
    </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import checkboxDemo1 from './checkbox1.demo.vue'
import checkboxDemoRaw1 from './checkbox1.demo.vue?raw'
import checkboxDemo2 from './checkbox2.demo.vue'
import checkboxDemoRaw2 from './checkbox2.demo.vue?raw'
import checkboxDemo3 from './checkbox3.demo.vue'
import checkboxDemoRaw3 from './checkbox3.demo.vue?raw'
import checkboxDemo4 from './checkbox4.demo.vue'
import checkboxDemoRaw4 from './checkbox4.demo.vue?raw'
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    checkboxDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    checkboxDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    checkboxDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    checkboxDemoRaw4,
    Prism.languages.html,
    "html"
);
const radioData = reactive({
    value: ['选项一'],
    visible: false,
});
const toggleDemoCode = () => {
    radioData.visible = !radioData.visible;
};
const radioData1 = reactive({
    value: ['选项一'],
    visible: false,
});
const toggleDemoCode1 = () => {
    radioData1.visible = !radioData1.visible;
};
const radioData2 = reactive({
    value: ['选项一'],
    value1: ['选项一'],
    value2: ['选项一'],
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
    code: '',
    visible: false,
})
const toggleDemoCode3 = () => {
    radioData3.visible = !radioData3.visible;
};
</script>
<style lang="scss" scoped>
</style>