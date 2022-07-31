<template>
    <div class="demo icon-demo">
        <h2>messageBox 消息弹窗</h2>
        <p>
            模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>业务过程，提示，确认等操作。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="messageboxDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">打开一个消息弹窗</div>
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
    <!-- 确认弹窗 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="messageboxDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">确认弹窗</span>
            <div class="desc-text">
                打开一个确认弹窗
            </div>
        </div>
        <div class="demo-code" v-show="inputData1.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code>confirm</code>方法打开确认弹窗，提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。
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
    <!-- 提交内容 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="messageboxDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">提交内容</span>
            <div class="desc-text">
                当需要用户输入内容时，可以使用 Prompt 类型的消息框。
            </div>
        </div>
        <div class="demo-code" v-show="inputData2.visible">
            <code class="code-bg">
          <div class="code-text">
           通过 <code>prompt</code>方法打开提交内容弹窗，
            可以用 <code>inputPattern</code> 字段自己规定匹配模式， 用 <code>errorMessage</code> 来提示用户错误原因。 此外，可以用
            <code>inputPlaceholder</code>
            字段来定义输入框的占位符。
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
    <!-- 居中布局 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="messageboxDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">居中布局</span>
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
import messageboxDemo1 from './messagebox1.demo.vue'
import messageboxDemoRaw1 from './messagebox1.demo.vue?raw'
import messageboxDemo2 from './messagebox2.demo.vue'
import messageboxDemoRaw2 from './messagebox2.demo.vue?raw'
import messageboxDemo3 from './messagebox3.demo.vue'
import messageboxDemoRaw3 from './messagebox3.demo.vue?raw'
import messageboxDemo4 from './messagebox4.demo.vue'
import messageboxDemoRaw4 from './messagebox4.demo.vue?raw'
import { reactive } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    messageboxDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    messageboxDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    messageboxDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    messageboxDemoRaw4,
    Prism.languages.html,
    "html"
);
const inputData = reactive({
    value: "",
    code: 'import { messageBox，message } from "tg-ui";,<script setup>,2&messageBox.alert("这是一段内容"，"提示").then(()=>{,4&,6&message.success("确认了弹窗") ,2&}),<script>',
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