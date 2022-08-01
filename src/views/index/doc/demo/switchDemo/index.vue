<template>
    <div class="demo switch-demo">
        <h2>Switch 开关</h2>
        <p>开关选择器</p>
        <h3>何时使用</h3>
        <ul>
            <li>需要表示开关状态/两种状态之间的切换时；</li>
            <li>表示两种相对立的状态间的切换，</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基础用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="switchDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="switchData1.visible">
                <code class="code-bg">
          <div class="code-text">
            绑定
            <code>v-model:value</code> 到一个
                <code>Boolean</code> 类型的变量。
            </div>
            <pre v-html="demo1"></pre>
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
    <!-- 文字描述 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="switchDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">文字描述</span>
            <div class="desc-text">开关带有文字描述</div>
        </div>
        <div class="demo-code" v-show="switchData5.visible">
            <code class="code-bg">
          <div class="code-text">
            使用
            <code>active-text</code>
            属性与
            <code>inactive-text</code>
            属性来设置开关的文字描述。
        </div>
        <pre v-html="demo2"></pre>
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
    <!-- 其他颜色 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="switchDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">其他配色</span>
            <div class="desc-text">开关的其他颜色</div>
        </div>
        <div class="demo-code" v-show="switchData2.visible">
            <code class="code-bg">
          <div class="code-text">
            通过
            <code>type</code>
            属性
            <code>String</code>
            类型的变量:
            <code style="margin-right:5px">danger</code>
            <code style="margin-right:5px">success</code>
            <code>primary</code> 改变颜色
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
    <!-- 禁用状态  -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="switchDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">禁用状态</span>
            <div class="desc-text">开关的是否可点击状态控制</div>
        </div>
        <div class="demo-code" v-show="switchData3.visible">
            <code class="code-bg">
          <div class="code-text">
            通过
            <code>disabled</code>
            属性
            <code>Boolean</code>
            类型的变量控制状态
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
    <!-- 两种尺寸 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="switchDemo5"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">两种尺寸</span>
            <div class="desc-text">开关包含两种尺寸</div>
        </div>
        <div class="demo-code" v-show="switchData4.visible">
            <code class="code-bg">
          <div class="code-text">
            通过
            <code>size</code>
            属性
            <code>small</code>
            选择小尺寸开关
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
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import switchDemo1 from './switch1.demo.vue';
import switchDemoRaw1 from './switch1.demo.vue?raw';
import switchDemo2 from './switch2.demo.vue';
import switchDemoRaw2 from './switch2.demo.vue?raw';
import switchDemo3 from './switch3.demo.vue';
import switchDemoRaw3 from './switch3.demo.vue?raw';
import switchDemo4 from './switch4.demo.vue';
import switchDemoRaw4 from './switch4.demo.vue?raw';
import switchDemo5 from './switch5.demo.vue';
import switchDemoRaw5 from './switch5.demo.vue?raw';
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    switchDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    switchDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    switchDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    switchDemoRaw4,
    Prism.languages.html,
    "html"
);
const demo5 = Prism.highlight(
    switchDemoRaw5,
    Prism.languages.html,
    "html"
);
const switchData1 = reactive({
    txt: "显示",
    visible: false,
});
const switchData2 = reactive({
    txt: "显示",
    visible: false,
});
const switchData3 = reactive({
    txt: "显示",
    visible: false,
});
const switchData4 = reactive({
    txt: "显示",
    visible: false,
});
const switchData5 = reactive({
    txt: "显示",
    visible: false,
});
const toggleDemoCode1 = () => {
    switchData1.visible = !switchData1.visible;
    switchData1.txt = switchData1.visible ? "收起" : "显示";
};
const toggleDemoCode2 = () => {
    switchData2.visible = !switchData2.visible;
    switchData2.txt = switchData2.visible ? "收起" : "显示";
};
const toggleDemoCode3 = () => {
    switchData3.visible = !switchData3.visible;
    switchData3.txt = switchData3.visible ? "收起" : "显示";
};
const toggleDemoCode4 = () => {
    switchData4.visible = !switchData4.visible;
    switchData4.txt = switchData4.visible ? "收起" : "显示";
};
const toggleDemoCode5 = () => {
    switchData5.visible = !switchData5.visible;
    switchData5.txt = switchData5.visible ? "收起" : "显示";
};
</script>
<style lang="scss" scoped>
</style>