<template>
    <div class="demo icon-demo">
        <h2>Input 输入框</h2>
        <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
        <h3>何时使用</h3>
        <ul>
            <li>
                在表单输入时使用，通过鼠标或键盘输入字符。
            </li>
        </ul>
        <h3>代码演示</h3>
        <div class="demo-block">
            <div class="demo-component">
                <tg-input v-model:value="inputData.value" size="small" />
            </div>
            <div class="demo-desc">
                <span class="desc-title">基本用法</span>
                <div class="desc-text">最简单的用法</div>
            </div>
            <div class="demo-code" v-show="inputData.visible">
                <code class="code-bg">
          <div class="code-text">
            绑定
            <code>v-model:value</code> 到一个
                <code>Boolean</code> 类型的变量。
            </div>
            <m-code :value="inputData.code"></m-code>
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
    components:{MCode},
    setup() {
        const inputData = reactive({
            value:'1111',
            code:'',
            visible:false
        })
        const toggleDemoCode1 = ()=>{
            inputData.visible = !inputData.visible
        }
        return {toggleDemoCode1,inputData}
    },
}
</script>
<style lang="scss" scoped>
</style>