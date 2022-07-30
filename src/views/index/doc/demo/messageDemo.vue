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
                <tg-button size="mini" theme="link" @click="openMessageBox">open message</tg-button>
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
    <!-- 不同状态 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-button size="mini" theme="link" @click="openConfirmBox('message')">message</tg-button>
            <tg-button size="mini" theme="link" @click="openConfirmBox('success')">success</tg-button>
            <tg-button size="mini" theme="link" @click="openConfirmBox('warning')">warning</tg-button>
            <tg-button size="mini" theme="link" @click="openConfirmBox('error')">error</tg-button>
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
    <!-- 文字居中 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-button size="mini" theme="link" @click="openpromptBox">open center message</tg-button>
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
    <!-- 可关闭的消息提示 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-button size="mini" theme="link" @click="openMessageBoxCenter">show close</tg-button>
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
import { message } from "@/libs";
const openMessageBox = () => {
    message({ message: '这是一个消息弹窗' })
}
const openMessageBoxCenter = () => {
    message({ message: '这是一个可关闭消息弹窗', showClose: true })
}
const openConfirmBox = (type) => {
    message({ message: '这是一个消息弹窗', type })
}
const openpromptBox = () => {
    message({ message: '这是一个居中消息弹窗', align: 'center' })
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
    code: 'import { messageBox，message } from "tg-ui";,<script setup>,2&messageBox.prompt("这是一段内容"，"提示",4&{,6&errorMessage:"请输入邮箱",6&inputPattern:/正则内容/,4&}).then(()=>{,4&,6&message.success("确认了弹窗"),2&}).catch(()=>{,6&message.error("取消了弹窗"),2&}),<script>',
    visible: false,
});
const toggleDemoCode2 = () => {
    inputData2.visible = !inputData2.visible;
};
const inputData3 = reactive({
    value: "",
    code: 'import { messageBox，message } from "tg-ui";,<script setup>,2&messageBox.alert("这是一段内容"，"提示",4&{,6&align:"center",4&}).then(()=>{,4&,6&message.success("确认了弹窗"),2&}).catch(()=>{,6&message.error("取消了弹窗"),2&}),<script>',
    visible: false,
});
const toggleDemoCode3 = () => {
    inputData3.visible = !inputData3.visible;
};
</script>
<style lang="scss" scoped>
</style>