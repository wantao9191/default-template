<template>
    <div class="demo icon-demo">
        <h2>Tabs 标签页</h2>
        <p>
            分隔内容上有关联但属于不同类别的数据集合。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>用户可以基于索引标签，快速定位到目标内容。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="tabsDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">基础的、简洁的标签页。</div>
            </div>
            <div class="demo-code" v-show="inputData.visible">
                <code class="code-bg">
                    <div class="code-text"><code>Tabs</code> 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。
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
    <!-- 卡片风格 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tabsDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">卡片风格的标签</span>
            <div class="desc-text">
                你可以设置具有卡片风格的标签。
            </div>
        </div>
        <div class="demo-code" v-show="inputData1.visible">
            <code class="code-bg">
          <div class="code-text">
           只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。
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
    <!-- 带边框的卡片风格 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tabsDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">带边框的卡片风格</span>
            <div class="desc-text">
                你还可以设置标签页为带有边框的卡片
            </div>
        </div>
        <div class="demo-code" v-show="inputData2.visible">
            <code class="code-bg">
          <div class="code-text">
           将 <code>type</code> 设置为 <code>border-card</code> 。
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
    <!-- 自定义标签内容 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tabsDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">自定义标签内容</span>
            <div class="desc-text">
                可以通过具名插槽来实现自定义标签页的内容
            </div>
        </div>
        <div class="demo-code" v-show="inputData3.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code> #label</code> 自定义标签内容
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
    <!-- 异步切换 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="tabsDemo5"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">异步切换</span>
            <div class="desc-text">
                一个异步操作的标签页
            </div>
        </div>
        <div class="demo-code" v-show="inputData3.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code> before-leave</code> 控制标签的切换
        </div>
        <pre v-html="demo5"></pre>
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
import tabsDemo1 from './tabs1.demo.vue'
import tabsDemoRaw1 from './tabs1.demo.vue?raw'
import tabsDemo2 from './tabs2.demo.vue'
import tabsDemoRaw2 from './tabs2.demo.vue?raw'
import tabsDemo3 from './tabs3.demo.vue'
import tabsDemoRaw3 from './tabs3.demo.vue?raw'
import tabsDemo4 from './tabs4.demo.vue'
import tabsDemoRaw4 from './tabs4.demo.vue?raw'
import tabsDemo5 from './tabs5.demo.vue'
import tabsDemoRaw5 from './tabs5.demo.vue?raw'
import { reactive } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    tabsDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    tabsDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    tabsDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    tabsDemoRaw4,
    Prism.languages.html,
    "html"
);
const demo5 = Prism.highlight(
    tabsDemoRaw5,
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