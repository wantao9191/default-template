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
                <tg-button size="mini" theme="link" @click="openMessageBox">点击打开message box</tg-button>
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
    <!-- 插槽 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-tooltip placement="top" content="tooptip top" theme="dark">
                <template #content>tooptip <br> top</template>
                <tg-button size="mini">tooptip top</tg-button>
            </tg-tooltip>
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
const openMessageBox = ()=>{
    messageBox.alert('这是一段内容','标题名称',{
        cancelButtonText:'放弃',
        confirmButtonText:'保存',
        beforeClose:(action,instance,done)=>{
            console.log(instance)
            // done()
        }
    })
}
const inputData = reactive({
    value: "",
    code: '<tg-tooltip placement="top" content="tooptip top">,2&<tg-button size="mini">tooptip top</tg-button>,</tg-tooltip>,<tg-tooltip placement="right" content="tooptip right">,2&<tg-button size="mini">tooptip right</tg-button>,</tg-tooltip>,<tg-tooltip placement="bottom" content="tooptip bottom">,2&<tg-button size="mini">tooptip bottom</tg-button>,</tg-tooltip>,<tg-tooltip placement="left" content="tooptip left">,2&<tg-button size="mini">tooptip left</tg-button>,</tg-tooltip>',
    visible: false,
});
const toggleDemoCode = () => {
    inputData.visible = !inputData.visible;
};
const inputData1 = reactive({
    value: "",
    code: '<tg-tooltip placement="top">,2&<template #content>tooptip top</template>,2&<tg-button size="mini">tooptip top</tg-button>,</tg-tooltip>',
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