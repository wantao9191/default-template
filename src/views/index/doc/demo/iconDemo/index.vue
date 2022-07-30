<template>
    <div class="demo icon-demo">
        <h2>Icon 图标</h2>
        <p>一种图标格式，用于系统图标、软件图标等</p>
        <h3>何时使用</h3>
        <ul>
            <li>
                当该模块有多个状态时，同一图标同时存在多个，影响开发流程，可以使用图标替代
            </li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基础用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="iconDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">基础的图标用法</div>
            </div>
            <div class="demo-code" v-show="iconData.visible">
                <code class="code-bg">
          <div class="code-text">
            通过
            <code>icon</code>
                属性
                <code>String</code> 类型的变量，改变
                <code>tg-icon</code>
                的样式。
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
    <div class="demo-block">
        <div class="demo-component">
            <component :is="iconDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">改变尺寸</span>
            <div class="desc-text">改变图标的尺寸</div>
        </div>
        <div class="demo-code" v-show="iconData1.visible">
            <code class="code-bg">
          <div class="code-text">
            通过
            <code>size</code>
            属性
            <code>String</code> 类型的变量，改变
            <code>tg-icon</code>
            的尺寸。
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
    <div class="demo-block">
        <div class="demo-component" style="font-size: 12px;color:#888">点击下面的图标按钮可以直接复制组件代码</div>
        <div class="demo-desc">
            <span class="desc-title">全部图标</span>
        </div>
    </div>
    <div class="icons">
        <div class="icon-item" v-for="item in icons" :key="item.icon_id">
            <tg-icon :icon="item.name" size="32"></tg-icon>
            <p>{{ item.name }}</p>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import json from '@/assets/icons/iconfont.json'
import iconDemo1Raw from './icon1.demo.vue?raw'
import iconDemo1 from './icon1.demo.vue'
import iconDemo2Raw from './icon2.demo.vue?raw'
import iconDemo2 from './icon2.demo.vue'
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    iconDemo1Raw,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    iconDemo2Raw,
    Prism.languages.html,
    "html"
);
const icons = reactive(json.glyphs)
const iconData = reactive({
    visible: false,
    txt: "显示",
});
const toggleDemoCode = () => {
    iconData.visible = !iconData.visible;
    iconData.txt = iconData.visible ? "收起" : "显示";
};
const iconData1 = reactive({
    visible: false,
    txt: "显示",
});
const toggleDemoCode1 = () => {
    iconData1.visible = !iconData1.visible;
    iconData1.txt = iconData1.visible ? "收起" : "显示";
};
</script>
<style lang="scss" scoped>
.demo-icon {
    margin-right: 24px;
}

.icons {
    display: flex;
    flex-wrap: wrap;

    .icon-item {
        width: 120px;
        text-align: center;
        height: 100px;
        cursor: pointer;

        >p {
            font-size: 14px;
            color: #666;
            margin-top: 6px;
        }
    }
}
</style>