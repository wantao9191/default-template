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
                <tg-tooltip placement="top" content="tooptip top" theme="dark" style="margin-right:12px">
                    <template #content>tooptip top <br> slot</template>
                    <tg-button size="mini">tooptip top</tg-button>
                </tg-tooltip>
                <tg-tooltip placement="right" content="tooptip right" theme="dark" style="margin-right:12px">
                    <template #content>tooptip right <br> slot</template>
                    <tg-button size="mini">tooptip right</tg-button>
                </tg-tooltip>
                <tg-tooltip placement="bottom" content="tooptip bottom" theme="dark" style="margin-right:12px">
                    <template #content>tooptip bottom <br> slot</template>
                    <tg-button size="mini">tooptip bottom</tg-button>
                </tg-tooltip>
                <tg-tooltip placement="left" content="tooptip left" theme="dark">
                    <template #content>tooptip left <br> slot</template>
                    <tg-button size="mini">tooptip left</tg-button>
                </tg-tooltip>
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
                <tg-icon icon="tg-copy"></tg-icon>
            </a>
            <a href="javaScript:;" @click="toggleDemoCode">
                <tg-icon icon="tg-code" size="21"></tg-icon>
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
            <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="toggleDemoCode1">
            <tg-icon icon="tg-code" size="21"></tg-icon>
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
            <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="toggleDemoCode2">
            <tg-icon icon="tg-code" size="21"></tg-icon>
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
            <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="toggleDemoCode3">
            <tg-icon icon="tg-code" size="21"></tg-icon>
        </a>
    </div>
    </div>
    <!-- 带图标的 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-input v-model:value="inputData4.value1" size="small" prefixIcon="desktop" />
            <tg-input v-model:value="inputData4.value2" size="small" style="margin:12px 0" clearable>
                <template v-slot:suffixIcon>
                    <tg-icon icon="tg-search"></tg-icon>
                </template>
            </tg-input>
            <tg-input v-model:value="inputData4.value3" size="small">
                <template v-slot:prefixIcon>
                    <tg-icon icon="tg-mail-unread"></tg-icon>
                </template>
                <template v-slot:suffixIcon>
                    <tg-icon icon="tg-search"></tg-icon>
                </template>
            </tg-input>
        </div>
        <div class="demo-desc">
            <span class="desc-title">带图标的输入框</span>
            <div class="desc-text">带有图标标记输入类型</div>
        </div>
        <div class="demo-code" v-show="inputData4.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code>prefixIcon</code>和
            <code>suffixIcon</code> 属性增加图标。另外，<code>prefix</code> 和
            <code>suffix</code> 命名的插槽也能正常工作。
        </div>
        <m-code :value="inputData4.code"></m-code>
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
    <!-- 不同尺寸 -->
    <div class="demo-block">
        <div class="demo-component">
            <tg-input v-model:value="inputData5.value1" size="mini" prefixIcon="desktop" />
            <tg-input v-model:value="inputData5.value2" style="margin:12px 0" clearable>
                <template v-slot:suffixIcon>
                    <tg-icon icon="tg-search"></tg-icon>
                </template>
            </tg-input>
            <tg-input v-model:value="inputData5.value3" size="large">
                <template v-slot:prefixIcon>
                    <tg-icon icon="tg-mail-unread"></tg-icon>
                </template>
                <template v-slot:suffixIcon>
                    <tg-icon icon="tg-search"></tg-icon>
                </template>
            </tg-input>
        </div>
        <div class="demo-desc">
            <span class="desc-title">不同尺寸的输入框</span>
            <div class="desc-text">使用 <code>size</code> 属性改变输入框大小。 除了默认大小外，还有另外两个选项：<code>large</code> ,
                <code>small</code> 。
            </div>
        </div>
        <div class="demo-code" v-show="inputData5.visible">
            <code class="code-bg">
          <div class="code-text">
            通过 <code>prefixIcon</code>和
            <code>suffixIcon</code> 属性增加图标。另外，<code>prefix</code> 和
            <code>suffix</code> 命名的插槽也能正常工作。
        </div>
        <m-code :value="inputData5.code"></m-code>
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
    </div>
</template>
<script>
import { reactive } from "vue";
import MCode from "@/components/MCode.vue";
export default {
    components: { MCode },
    setup() {
        const inputData = reactive({
            value: "",
            code: '<tg-input v-model:value="input"></tg-input>',
            visible: false,
        });
        const toggleDemoCode = () => {
            inputData.visible = !inputData.visible;
        };
        const inputData1 = reactive({
            value: "",
            code: '<tg-input v-model:value="input" clearable></tg-input>',
            visible: false,
        });
        const toggleDemoCode1 = () => {
            inputData1.visible = !inputData1.visible;
        };
        const inputData2 = reactive({
            value: "",
            code: '<tg-input v-model:value="input" disabled></tg-input>',
            visible: false,
        });
        const toggleDemoCode2 = () => {
            inputData2.visible = !inputData2.visible;
        };
        const inputData3 = reactive({
            value: "",
            code: '<tg-input v-model:value="input" type="password"></tg-input>',
            visible: false,
        });
        const toggleDemoCode3 = () => {
            inputData3.visible = !inputData3.visible;
        };
        const inputData4 = reactive({
            value: "",
            code: '<tg-input v-model:value="input" prefixIcon="desktop" />,<tg-input ,2&v-model:value="input",2&suffixIcon="search" ,/>,<tg-input ,2&v-model:value="input",2&prefixIcon="mail-unread" ,2&suffixIcon="search" ,/>',
            visible: false,
        });
        const toggleDemoCode4 = () => {
            inputData4.visible = !inputData4.visible;
        };
        const inputData5 = reactive({
            value: "",
            code: '<tg-input v-model:value="input" prefixIcon="desktop" size="mini" />,<tg-input ,2&v-model:value="input" ,2&size="small" ,2&suffixIcon="search" ,/>,<tg-input ,2&v-model:value="input" ,2&size="large" ,2&prefixIcon="mail-unread" ,2&suffixIcon="search" ,/>',
            visible: false,
        });
        const toggleDemoCode5 = () => {
            inputData5.visible = !inputData5.visible;
        };
        const onBlur = e => {
            console.log('blur', e)
        }
        const onChange = e => {
            console.log(e)
        }
        return {
            toggleDemoCode1,
            inputData,
            toggleDemoCode,
            inputData1,
            inputData2,
            toggleDemoCode2,
            toggleDemoCode3,
            inputData3,
            inputData4,
            toggleDemoCode4,
            inputData5,
            toggleDemoCode5,
            onChange,
            onBlur
        };
    },
};
</script>
<style lang="scss" scoped>
</style>