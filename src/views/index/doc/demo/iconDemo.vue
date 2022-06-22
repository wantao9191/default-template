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
                <tg-icon icon="tg-appstore" size="32" class="demo-icon"></tg-icon>
                <tg-icon icon="tg-alert" size="32" class="demo-icon"></tg-icon>
                <tg-icon icon="tg-alarm" size="32" class="demo-icon"></tg-icon>
                <tg-icon icon="tg-chatboxes" size="32" class="demo-icon"></tg-icon>
                <tg-icon icon="tg-cloudy" size="32" class="demo-icon"></tg-icon>
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
            <m-code :value="iconData.code"></m-code>
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
            <tg-icon icon="tg-appstore" size="24" class="demo-icon"></tg-icon>
            <tg-icon icon="tg-alert" size="28" class="demo-icon"></tg-icon>
            <tg-icon icon="tg-alarm" size="36" class="demo-icon"></tg-icon>
            <tg-icon icon="tg-chatboxes" size="40" class="demo-icon"></tg-icon>
            <tg-icon icon="tg-cloudy" size="48" class="demo-icon"></tg-icon>
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
        <m-code :value="iconData1.code"></m-code>
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
    <h3>全部图标</h3>
    <ul>
        <li>
            点击下面的图标按钮可以直接复制组件代码
        </li>
    </ul>
    <div class="icons">
        <div class="icon-item" v-for="item in icons" :key="item.icon_id">
            <tg-icon :icon="item.name" size="32"></tg-icon>
            <p>{{ item.name }}</p>
        </div>
    </div>
    </div>
</template>
<script>
import { reactive } from "vue";
import MCode from "@/components/MCode.vue";
import json from '@/assets/icons/iconfont.json'
export default {
    components: { MCode },
    setup() {
        const icons = reactive(json.glyphs)
        const iconData = reactive({
            visible: false,
            txt: "显示",
            code: '<tg-icon icon="tg-appstore"></tg-icon>,<tg-icon icon="tg-alert"></tg-icon>,<tg-icon icon="tg-alarm"></tg-icon>,<tg-icon icon="tg-chatboxes"></tg-icon>,<tg-icon icon="tg-cloudy"></tg-icon>',
        });
        const toggleDemoCode = () => {
            iconData.visible = !iconData.visible;
            iconData.txt = iconData.visible ? "收起" : "显示";
        };
        const iconData1 = reactive({
            visible: false,
            txt: "显示",
            code: '<tg-icon icon="tg-appstore" size="24"></tg-icon>,<tg-icon icon="tg-alert" size="28"></tg-icon>,<tg-icon icon="tg-alarm" size="36"></tg-icon>,<tg-icon icon="tg-chatboxes" size="40"></tg-icon>,<tg-icon icon="tg-cloudy" size="48"></tg-icon>',
        });
        const toggleDemoCode1 = () => {
            iconData1.visible = !iconData1.visible;
            iconData1.txt = iconData1.visible ? "收起" : "显示";
        };
        return { iconData, toggleDemoCode, toggleDemoCode1, iconData1, icons };
    },
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