<template>
    <div class="demo icon-demo">
        <h2>message 消息弹窗</h2>
        <p>
            常用于主动操作后的反馈提示。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>操作后反馈用户，根据状态显示不同弹窗。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="messageDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">从顶部弹出，3秒后消失。</div>
            </div>
            <div class="demo-code" v-show="inputData.visible">
                <code class="code-bg">
          <div class="code-text">
            通过 <code>alert</code>方法打开提示弹窗，当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。
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
    <!-- 不同状态 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="messageDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同状态</span>
            <div class="desc-text">
                用来显示「成功、警告、消息、错误」类的操作反馈。
            </div>
        </div>
        <div class="demo-code" v-show="inputData1.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code>type</code>参数选择不同状态弹窗，默认为message。
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
    <!-- 文字居中 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="messageDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">文字居中</span>
            <div class="desc-text">
                使消息弹窗文字居中
            </div>
        </div>
        <div class="demo-code" v-show="inputData2.visible">
            <code class="code-bg">
          <div class="code-text">
           使用 <code>center</code> 属性让文字水平居中。
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
    <!-- 可关闭的消息提示 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="messageDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">可关闭的消息提示</span>
            <div class="desc-text">
                消息弹框支持使用居中布局。
            </div>
        </div>
        <div class="demo-code" v-show="inputData3.visible">
            <code class="code-bg">
          <div class="code-text">
           将 <code>center</code> 属性设置为 <code>true</code> 可将内容居中显示。
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
import messageDemo1 from './message1.demo.vue'
import messageDemoRaw1 from './message1.demo.vue?raw'
import messageDemo2 from './message2.demo.vue'
import messageDemoRaw2 from './message2.demo.vue?raw'
import messageDemo3 from './message3.demo.vue'
import messageDemoRaw3 from './message3.demo.vue?raw'
import messageDemo4 from './message4.demo.vue'
import messageDemoRaw4 from './message4.demo.vue?raw'
import { reactive } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    messageDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    messageDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    messageDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    messageDemoRaw4,
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