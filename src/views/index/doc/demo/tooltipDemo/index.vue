<template>
    <div class="demo icon-demo">
        <h2>tooltip 文字提示</h2>
        <p>
            常用于展示鼠标 hover 时的提示信息。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>网页文本鼠标hover后展示详细信息</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="tooltipDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="inputData.visible">
                <code class="code-bg">
          <div class="code-text">
            传入
            <code>placement</code> <code>String</code> 类型的变量，控制 <code>tooltip</code>位置
            </div>
            <pre v-html="demo1"></pre>
            </code>
        </div>
        <div class="demo-btns">
            <a href="javaScript:;">
                <tg-tooltip content="复制代码" placement="bottom">
                    <tg-icon icon="tg-copy"></tg-icon>
                </tg-tooltip>
            </a>
            <a href="javaScript:;">
                <tg-tooltip content="查看代码" placement="bottom">
                    <tg-icon icon="tg-code" size="21" @click="toggleDemoCode"></tg-icon>
                </tg-tooltip>
            </a>
        </div>
    </div>
    <!-- 插槽 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tooltipDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">更多文字提示</span>
            <div class="desc-text">
                展示多行文本或者是设置文本内容的格式。
            </div>
        </div>
        <div class="demo-code" v-show="inputData1.visible">
            <code class="code-bg">
          <div class="code-text">
            使用具名插槽slot <code>content</code> 替代 <code>tooltip</code> 中的 <code>content</code> 属性
        </div>
        <pre v-html="demo2"></pre>
        </code>
    </div>
    <div class="demo-btns">
        <a href="javaScript:;">
            <tg-tooltip content="复制代码" placement="bottom">
                <tg-icon icon="tg-copy"></tg-icon>
            </tg-tooltip>
        </a>
        <a href="javaScript:;">
            <tg-tooltip content="查看代码" placement="bottom">
                <tg-icon icon="tg-code" size="21" @click="toggleDemoCode1"></tg-icon>
            </tg-tooltip>
        </a>
    </div>
    </div>
    <!-- 主题 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tooltipDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">主题</span>
            <div class="desc-text">
                使用 <code>theme</code> 属性控制 <code>tooltip</code> 颜色
            </div>
        </div>
        <div class="demo-code" v-show="inputData2.visible">
            <code class="code-bg">
          <div class="code-text">
            传入 <code>theme</code> <code>dark</code> <code>light</code> 改变主题
        </div>
        <pre v-html="demo3"></pre>
        </code>
    </div>
    <div class="demo-btns">
        <a href="javaScript:;">
            <tg-tooltip content="复制代码" placement="bottom">
                <tg-icon icon="tg-copy"></tg-icon>
            </tg-tooltip>
        </a>
        <a href="javaScript:;">
            <tg-tooltip content="查看代码" placement="bottom">
                <tg-icon icon="tg-code" size="21" @click="toggleDemoCode2"></tg-icon>
            </tg-tooltip>
        </a>
    </div>
    </div>
    <!-- 触发方式 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tooltipDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">触发方式</span>
            <div class="desc-text">
                改变 <code>tooltip</code> 的触发方式，更加灵活
            </div>
        </div>
        <div class="demo-code" v-show="inputData3.visible">
            <code class="code-bg">
          <div class="code-text">
            传入 <code>trigger</code> <code>click</code> <code>hover</code> 控制触发方式
        </div>
        <pre v-html="demo4"></pre>
        </code>
    </div>
    <div class="demo-btns">
        <a href="javaScript:;">
            <tg-tooltip content="复制代码" placement="bottom">
                <tg-icon icon="tg-copy"></tg-icon>
            </tg-tooltip>
        </a>
        <a href="javaScript:;">
            <tg-tooltip content="查看代码" placement="bottom">
                <tg-icon icon="tg-code" size="21" @click="toggleDemoCode3"></tg-icon>
            </tg-tooltip>
        </a>
    </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import tooltipDemo1 from './tooltip1.demo.vue'
import tooltipDemoRaw1 from './tooltip1.demo.vue?raw'
import tooltipDemo2 from './tooltip2.demo.vue'
import tooltipDemoRaw2 from './tooltip2.demo.vue?raw'
import tooltipDemo3 from './tooltip3.demo.vue'
import tooltipDemoRaw3 from './tooltip3.demo.vue?raw'
import tooltipDemo4 from './tooltip4.demo.vue'
import tooltipDemoRaw4 from './tooltip4.demo.vue?raw'
import { reactive } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    tooltipDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    tooltipDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    tooltipDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    tooltipDemoRaw4,
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
</script>
<style lang="scss" scoped>
</style>