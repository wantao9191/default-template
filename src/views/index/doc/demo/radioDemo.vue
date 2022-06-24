<template>
    <div class="demo icon-demo">
        <h2>Radio 单选框</h2>
        <p>
            基本表单组件，在一组备选项中进行单选。
        </p>
        <h3>何时使用</h3>
        <ul>
            <li>单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</li>
        </ul>
        <h3>代码演示</h3>
        <!-- 基本用法 -->
        <div class="demo-block">
            <div class="demo-component">
                <tg-radio-group v-model:value="radioData.value">
                    <tg-radio value="选项一"></tg-radio>
                    <tg-radio value="选项二"></tg-radio>
                </tg-radio-group>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="radioData.visible">
                <code class="code-bg">
          <div class="code-text">
            要使用 <code>Radio</code> 组件，只需要设置 <code>v-model:value</code> 绑定变量， 选中意味着变量的值为相应 <code>Radio Value</code>
                属性的值，<code>value</code> 可以是 <code>String</code> 、<code>Number</code>。
            </div>
            <m-code :value="radioData.code"></m-code>
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
    <!-- 禁用状态 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-radio-group v-model:value="radioData1.value" disabled>
                <tg-radio value="选项一"></tg-radio>
                <tg-radio value="选项二"></tg-radio>
            </tg-radio-group>
        </div>
        <div class="demo-desc">
            <span class="desc-title">禁用状态</span>
            <div class="desc-text"><code>disabled</code> 属性可以用来控制单选框的禁用状态</div>
        </div>
        <div class="demo-code" v-show="radioData1.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>disbaled</code> <code>Boolean</code>的属性控制单选框状态
        </div>
        <m-code :value="radioData1.code"></m-code>
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
    </div>
</template>
<script>
import { reactive } from "vue";
import MCode from '@/components/MCode.vue'
export default {
    components: { MCode },
    setup() {
        const radioData = reactive({
            value: '选项一',
            code: '<tg-radio-group v-model:value="radio">,2&<tg-radio label="选项一" value="1"></tg-radio>,2&<tg-radio label="选项二" value="2"></tg-radio>,</tg-radio-group>',
            visible: false,
        });
        const toggleDemoCode = () => {
            radioData.visible = !radioData.visible;
        };
const radioData1= reactive({
            value: '选项一',
            code: '<tg-radio-group v-model:value="radio" disabled>,2&<tg-radio label="选项一" value="1"></tg-radio>,2&<tg-radio label="选项二" value="2"></tg-radio>,</tg-radio-group>',
            visible: false,
        });
        const toggleDemoCode1 = () => {
            radioData1.visible = !radioData1.visible;
        };
        return { radioData, toggleDemoCode,radioData1 ,toggleDemoCode1}
    }
}
</script>
<style lang="scss" scoped>
</style>