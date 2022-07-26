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
                <tg-select v-model:value="selectData.value">
                    <tg-option value="选项一"></tg-option>
                    <tg-option value="选项二"></tg-option>
                </tg-select>
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
    <!-- 可清空选项 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-select v-model:value="selectData3.value" clearable>
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
            </tg-select>
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
        <m-code :value="selectData3.code"></m-code>
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
            <tg-select v-model:value="selectData1.value" disabled>
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
            </tg-select>
            <br>
            <tg-select v-model:value="selectData1.value" style="margin-top:12px">
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
             传入 <code>size</code> <code>String</code>的属性控制单选框状态
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
    <!-- 筛选选项 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-select v-model:value="selectData4.value" filterable>
                <tg-option value="选项一"></tg-option>
                <tg-option value="选项二"></tg-option>
                
            </tg-select>
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
        <m-code :value="selectData4.code"></m-code>
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
<script>
import { reactive } from "vue";
import MCode from '@/components/MCode.vue'
export default {
    components: { MCode },
    setup() {
        const selectData = reactive({
            value: '',
            code: '<tg-select v-model:value="selectValue">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode = () => {
            selectData.visible = !selectData.visible;
        };
        const selectData1 = reactive({
            value: '',
            code: '<tg-select v-model:value="selectValue" disabled>,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>,<tg-select v-model:value="selectValue">,2&<tg-option label="选项一" value="1" disabled></tg-option>,2&<tg-option label="选项二" value="2" disabled></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode1 = () => {
            selectData1.visible = !selectData1.visible;
        };
        const selectData2 = reactive({
            value: '',
            code: '<tg-select v-model:value="selectValue" size="mini">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>,<tg-select v-model:value="selectValue" size="small">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>,<tg-select v-model:value="selectValue" size="large">,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode2 = () => {
            selectData2.visible = !selectData2.visible;
        };
        const selectData3 = reactive({
            value: '',
            code: '<tg-select v-model:value="selectValue" clearable>,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode3 = () => {
            selectData3.visible = !selectData3.visible;
        };
        const selectData4 = reactive({
            value: '',
            code: '<tg-select v-model:value="selectValue" filterable>,2&<tg-option label="选项一" value="1"></tg-option>,2&<tg-option label="选项二" value="2"></tg-option>,</tg-select>',
            visible: false,
        });
        const toggleDemoCode4 = () => {
            selectData4.visible = !selectData4.visible;
        };
        return { selectData, toggleDemoCode, selectData1, toggleDemoCode1, selectData2, toggleDemoCode2, selectData3, toggleDemoCode3, selectData4, toggleDemoCode4 }
    }
}
</script>
<style lang="scss" scoped>
</style>