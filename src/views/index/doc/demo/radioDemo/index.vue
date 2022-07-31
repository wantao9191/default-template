<template>
    <div class="demo icon-demo">
        <h2>Radio 单选框</h2>
        <p>
            基本表单组件，在一组备选项中进行单选。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="radioDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="radioData.visible">
                <code class="code-bg">
          <div class="code-text">
            要使用 <code>Radio</code> 组件，只需要设置 <code>v-model:value</code> 绑定变量， 选中意味着变量的值为相应 <code>Radio Value</code>
                属性的值，<code>value</code> 可以是 <code>String</code> 、<code>Number</code>。
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
            <component :is="radioDemo2"></component>
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
        <pre v-html="demo2"></pre>
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
            <component :is="radioDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸</span>
            <div class="desc-text"><code>size</code> 属性可以用来控制单选框的大小</div>
        </div>
        <div class="demo-code" v-show="radioData2.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>size</code> <code>String</code>的属性控制单选框状态
        </div>
        <pre v-html="demo3"></pre>
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
import radioDemo1 from './radio1.demo.vue'
import radioDemoRaw1 from './radio1.demo.vue?raw'
import radioDemo2 from './radio2.demo.vue'
import radioDemoRaw2 from './radio2.demo.vue?raw'
import radioDemo3 from './radio3.demo.vue'
import radioDemoRaw3 from './radio3.demo.vue?raw'
import { reactive } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    radioDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    radioDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    radioDemoRaw3,
    Prism.languages.html,
    "html"
);
const radioData = reactive({
    visible: false,
});
const toggleDemoCode = () => {
    radioData.visible = !radioData.visible;
};
const radioData1 = reactive({
    visible: false,
});
const toggleDemoCode1 = () => {
    radioData1.visible = !radioData1.visible;
};
const radioData2 = reactive({
    visible: false,
});
const toggleDemoCode2 = () => {
    radioData2.visible = !radioData2.visible;
};
</script>
<style lang="scss" scoped>
</style>