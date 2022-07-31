<template>
    <div class="demo icon-demo">
        <h2>Select 下拉框</h2>
        <p>
            基本表单组件，在一组选项中进行单选或多选。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>当选项过多时，使用下拉菜单展示并选择内容。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <component :is="selectDemo1"></component>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">适用广泛的基础单选 <code>v-model</code> 的值为当前被选中的 <code>tg-option</code> 的
                    <code>value</code> 属性值
                </div>
            </div>
            <div class="demo-code" v-show="selectData.visible">
                <code class="code-bg">
          <div class="code-text">
            要使用 <code>Select</code> 组件，只需要设置 <code>v-model:value</code> 绑定变量， 选中变量的值为相应 <code>Select Value</code>
                属性的值，<code>value</code> 可以是 <code>String</code> 、<code>Number</code>。
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
    <!-- 可清空选项 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="selectDemo2"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">可清空选项</span>
            <div class="desc-text">包含清空按钮，可将选择器清空为初始状态</div>
        </div>
        <div class="demo-code" v-show="selectData3.visible">
            <code class="code-bg">
          <div class="code-text">
            为 <code>tg-select</code> 增加 <code>clearable</code> 属性，则可将选择器清空。 需要注意的是， <code>clearable</code> 属性仅适用于单选。
        </div>
        <pre v-html="demo2"></pre>
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
    <!-- 禁用状态 -->
    <div class="demo-block">
        <div class="demo-component">
           <component :is="selectDemo3"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">禁用状态</span>
            <div class="desc-text"><code>disabled</code> 属性可以用来控制单选框的禁用状态</div>
        </div>
        <div class="demo-code" v-show="selectData1.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>disbaled</code> <code>Boolean</code>的属性控制单选框状态
        </div>
        <pre v-html="demo3"></pre>
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
    <!-- 不同尺寸 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="selectDemo4"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸</span>
            <div class="desc-text"><code>size</code> 属性可以用来控制单选框的大小</div>
        </div>
        <div class="demo-code" v-show="selectData2.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>size</code> <code>String</code>的属性控制单选框状态
        </div>
        <pre v-html="demo4"></pre>
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
    <!-- 筛选选项 -->
    <div class="demo-block">
        <div class="demo-component">
            <component :is="selectDemo5"></component>
        </div>
        <div class="demo-desc">
            <span class="desc-title">筛选选项</span>
            <div class="desc-text">可以利用筛选功能快速查找选项</div>
        </div>
        <div class="demo-code" v-show="selectData4.visible">
            <code class="code-bg">
          <div class="code-text">
            为 <code>tg-select</code> 添加 <code>filterable</code> 属性即可启用筛选功能。 默认情况下，<code>Select</code> 会找出所有
            <code>label</code> 属性包含输入值的选项。
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
import { reactive } from "vue";
import selectDemo1 from './select1.demo.vue'
import selectDemoRaw1 from './select1.demo.vue?raw'
import selectDemo2 from './select2.demo.vue'
import selectDemoRaw2 from './select2.demo.vue?raw'
import selectDemo3 from './select3.demo.vue'
import selectDemoRaw3 from './select3.demo.vue?raw'
import selectDemo4 from './select4.demo.vue'
import selectDemoRaw4 from './select4.demo.vue?raw'
import selectDemo5 from './select5.demo.vue'
import selectDemoRaw5 from './select5.demo.vue?raw'
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
    selectDemoRaw1,
    Prism.languages.html,
    "html"
);
const demo2 = Prism.highlight(
    selectDemoRaw2,
    Prism.languages.html,
    "html"
);
const demo3 = Prism.highlight(
    selectDemoRaw3,
    Prism.languages.html,
    "html"
);
const demo4 = Prism.highlight(
    selectDemoRaw4,
    Prism.languages.html,
    "html"
);
const demo5 = Prism.highlight(
    selectDemoRaw5,
    Prism.languages.html,
    "html"
);
const selectData = reactive({
    visible: false,
});
const toggleDemoCode = () => {
    selectData.visible = !selectData.visible;
};
const selectData1 = reactive({
    visible: false,
});
const toggleDemoCode1 = () => {
    selectData1.visible = !selectData1.visible;
};
const selectData2 = reactive({
    visible: false,
});
const toggleDemoCode2 = () => {
    selectData2.visible = !selectData2.visible;
};
const selectData3 = reactive({
    visible: false,
});
const toggleDemoCode3 = () => {
    selectData3.visible = !selectData3.visible;
};
const selectData4 = reactive({
    visible: false,
});
const toggleDemoCode4 = () => {
    selectData4.visible = !selectData4.visible;
};
</script>
<style lang="scss" scoped>
</style>