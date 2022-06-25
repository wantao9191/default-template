<template>
    <div class="demo icon-demo">
        <h2>Select 单选框</h2>
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
                <tg-select v-model:value="selectData.value">
                    <tg-option value="选项一"></tg-option>
                    <tg-option value="选项二"></tg-option>
                </tg-select>
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="selectData.visible">
                <code class="code-bg">
          <div class="code-text">
            要使用 <code>Select</code> 组件，只需要设置 <code>v-model:value</code> 绑定变量， 选中意味着变量的值为相应 <code>Select Value</code>
                属性的值，<code>value</code> 可以是 <code>String</code> 、<code>Number</code>。
            </div>
            <m-code :value="selectData.code"></m-code>
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
            <tg-select v-model:value="selectData1.value" disabled>
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
            </tg-select>
            <br>
            <tg-select v-model:value="selectData1.value"  style="margin-top:12px">
                <tg-option value="选项一" disabled></tg-option>
                <tg-option value="选项二" disabled></tg-option>
            </tg-select>
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
        <m-code :value="selectData1.code"></m-code>
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
            <tg-select v-model:value="selectData2.value" size="mini">
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
            </tg-select>
            <br>
            <tg-select v-model:value="selectData2.value" size="small" style="margin:12px 0">
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
            </tg-select>
            <br>    
            <tg-select v-model:value="selectData2.value" size="large">
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
            </tg-select>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸</span>
            <div class="desc-text"><code>size</code> 属性可以用来控制单选框的大小</div>
        </div>
        <div class="demo-code" v-show="selectData2.visible">
            <code class="code-bg">
          <div class="code-text">
             传入 <code>disbaled</code> <code>Boolean</code>的属性控制单选框状态
        </div>
        <m-code :value="selectData2.code"></m-code>
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
    </div>
</template>
<script>
import { reactive } from "vue";
import MCode from '@/components/MCode.vue'
export default {
    components: { MCode },
    setup() {
        const selectData = reactive({
            value: '选项一',
            code: '<tg-select v-model:value="radio">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode = () => {
            selectData.visible = !selectData.visible;
        };
        const selectData1 = reactive({
            value: '',
            code: '<tg-select v-model:value="radio" disabled>,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>,<tg-select v-model:value="radio">,2&<tg-option label="选项一" value="1" disabled></tg-option>,2&<tg-option label="选项二" value="2" disabled></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode1 = () => {
            selectData1.visible = !selectData1.visible;
        };
        const selectData2 = reactive({
            value: '',
            code: '<tg-select v-model:value="radio" size="mini">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>,<tg-select v-model:value="radio" size="small">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>,<tg-select v-model:value="radio" size="large">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode2 = () => {
            selectData2.visible = !selectData2.visible;
        };
        return { selectData, toggleDemoCode, selectData1, toggleDemoCode1,selectData2 ,toggleDemoCode2}
    }
}
</script>
<style lang="scss" scoped>
</style>