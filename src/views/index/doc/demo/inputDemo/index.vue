<template>
    <div class="demo icon-demo">
        <h2>Input 输入框</h2>
        <p>
            基本表单组件，支持 input 和
            textarea，并在原生控件基础上进行了功能扩展，可以组合使用。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>在表单输入时使用，通过鼠标或键盘输入字符。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="inputDemo1"></component>
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
    <!-- 一键清空 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="inputDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">一键清空</span>
            <div class="desc-text">
                使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框
            </div>
        </div>
        <div class="demo-code" v-show="inputData1.visible">
            <code class="code-bg">
          <div class="code-text">
            传入 <code>clearable</code> <code>Boolean</code>的属性控制清空按键
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
    <!-- 禁用状态 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="inputDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">禁用状态</span>
            <div class="desc-text">
                使用 <code>disabled</code> 属性即可得到一个被禁用的输入框
            </div>
        </div>
        <div class="demo-code" v-show="inputData2.visible">
            <code class="code-bg">
          <div class="code-text">
            传入 <code>disbaled</code> <code>Boolean</code>的属性控制输入框状态
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
    <!-- 密码框 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="inputDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">密码框</span>
            <div class="desc-text">
                更改 <code>type</code> 属性即可得到一个密码框，使用
                <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框
            </div>
        </div>
        <div class="demo-code" v-show="inputData3.visible">
            <code class="code-bg">
          <div class="code-text">
            传入 <code>type="password"</code> 控制输入框类型
        </div>
        <pre v-html="demo4"></pre>
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
    <div class="demo-block">
        <div class="demo-component">
            <component :is="inputDemo5"></component>
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
        <pre v-html="demo5"></pre>
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
    <!-- 不同尺寸 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="inputDemo6"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸的输入框</span>
            <div class="desc-text">使用 <code>size</code> 属性改变输入框大小。 除了默认大小外，还有另外两个选项：<code>large</code> ,
                <code>small</code> 。
            </div>
        </div>
        <div class="demo-code" v-show="inputData5.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code>prefixIcon</code>和
            <code>suffixIcon</code> 属性增加图标。另外，<code>prefix</code> 和
            <code>suffix</code> 命名的插槽也能正常工作。
        </div>
        <pre v-html="demo6"></pre>
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
import inputDemo1 from './input1.demo.vue'
import inputDemoRaw1 from './input1.demo.vue?raw'
import inputDemo2 from './input2.demo.vue'
import inputDemoRaw2 from './input2.demo.vue?raw'
import inputDemo3 from './input3.demo.vue'
import inputDemoRaw3 from './input3.demo.vue?raw'
import inputDemo4 from './input4.demo.vue'
import inputDemoRaw4 from './input4.demo.vue?raw'
import inputDemo5 from './input5.demo.vue'
import inputDemoRaw5 from './input5.demo.vue?raw'
import inputDemo6 from './input6.demo.vue'
import inputDemoRaw6 from './input6.demo.vue?raw'
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    inputDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    inputDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    inputDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    inputDemoRaw4,
    Prism.languages.html,
    "html"
);
const demo5 = Prism.highlight(
    inputDemoRaw5,
    Prism.languages.html,
    "html"
);
const demo6 = Prism.highlight(
    inputDemoRaw6,
    Prism.languages.html,
    "html"
);
const inputData = reactive({
    value: "",
    visible: false,
});
const toggleDemoCode = () => {
    inputData.visible = !inputData.visible;
};
const inputData1 = reactive({
    value: "",
    visible: false,
});
const toggleDemoCode1 = () => {
    inputData1.visible = !inputData1.visible;
};
const inputData2 = reactive({
    value: "",
    visible: false,
});
const toggleDemoCode2 = () => {
    inputData2.visible = !inputData2.visible;
};
const inputData3 = reactive({
    value: "",
    visible: false,
});
const toggleDemoCode3 = () => {
    inputData3.visible = !inputData3.visible;
};
const inputData4 = reactive({
    value: "",
    visible: false,
});
const toggleDemoCode4 = () => {
    inputData4.visible = !inputData4.visible;
};
const inputData5 = reactive({
    value: "",
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