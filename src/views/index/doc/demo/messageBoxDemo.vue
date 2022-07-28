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
                <tg-button size="mini" theme="link" @click="openMessageBox">点击打开message box</tg-button>
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
            <m-code :value="inputData.code"></m-code>
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
            <tg-button size="mini" theme="link" @click="openConfirmBox">点击打开confirm box</tg-button>
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
        <m-code :value="inputData1.code"></m-code>
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
            <tg-tooltip placement="top" content="tooptip top" theme="dark" style="margin-right:12px">
                <template #content>tooptip left slot</template>
                <tg-button size="mini">Dark</tg-button>
            </tg-tooltip>
            <tg-tooltip placement="top" content="tooptip top" theme="light">
                <template #content>tooptip left slot</template>
                <tg-button size="mini">Light</tg-button>
            </tg-tooltip>
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
        <m-code :value="inputData2.code"></m-code>
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
            <tg-tooltip placement="top" content="tooptip top" theme="dark" style="margin-right:12px">
                <template #content>tooptip left slot</template>
                <tg-button size="mini">Hover</tg-button>
            </tg-tooltip>
            <tg-tooltip placement="top" content="tooptip top" trigger="click">
                <template #content>tooptip left slot</template>
                <tg-button size="mini">Click</tg-button>
            </tg-tooltip>
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
        <m-code :value="inputData3.code"></m-code>
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
<script setup>
import { reactive } from "vue";
import MCode from "@/components/MCode.vue";
import { messageBox } from "@/libs";
const openMessageBox = () => {
    messageBox.alert('这是一段内容', '提示', {
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                instance.confirmLoading = true
            } else {
                done()
            }
        }
    })
}
const openConfirmBox = () => {
    messageBox.confirm('这是一段内容', '提示').then(() => { }).catch(() =>{})
}
const inputData = reactive({
    value: "",
    code: 'import { messageBox，message } from "tg-ui";,<script setup>,2&messageBox.alert("这是一段内容"，"提示").then(()=>{,4&,6&message.success("确认了弹窗") ,2&}),<script>',
    visible: false,
});
const toggleDemoCode = () => {
    inputData.visible = !inputData.visible;
};
const inputData1 = reactive({
    value: "",
    code: 'import { messageBox，message } from "tg-ui";,<script setup>,2&messageBox.confirm("这是一段内容"，"提示").then(()=>{,4&,6&message.success("确认了弹窗") ,2&}).catch(()=>{,6&message.error("取消了弹窗"),2&}),<script>',
    visible: false,
});
const toggleDemoCode1 = () => {
    inputData1.visible = !inputData1.visible;
};
const inputData2 = reactive({
    value: "",
    code: '<tg-tooltip placement="top" content="tooptip top" theme="dark">,2&<tg-button size="mini">Dark</tg-button>,</tg-tooltip>,<tg-tooltip placement="top" content="tooptip top" theme="light">,2&<tg-button size="mini">Light</tg-button>,</tg-tooltip>',
    visible: false,
});
const toggleDemoCode2 = () => {
    inputData2.visible = !inputData2.visible;
};
const inputData3 = reactive({
    value: "",
    code: '<tg-tooltip placement="top" content="tooptip top" trigger="hover">,2&<tg-button size="mini">Hover</tg-button>,</tg-tooltip>,<tg-tooltip placement="top" content="tooptip top" trigger="click">,2&<tg-button size="mini">Click</tg-button>,</tg-tooltip>',
    visible: false,
});
const toggleDemoCode3 = () => {
    inputData3.visible = !inputData3.visible;
};
</script>
<style lang="scss" scoped>
</style>