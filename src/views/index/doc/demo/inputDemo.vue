<template>
  <div class="demo icon-demo">
    <h2>Input 输入框</h2>
    <p>
      基本表单组件，支持 input 和
      textarea，并在原生控件基础上进行了功能扩展，可以组合使用。
    </p>
    <h3>何时使用</h3>
    <ul>
      <li>在表单输入时使用，通过鼠标或键盘输入字符。</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基本用法 -->
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
            <code>v-model:value</code> 到一个 <code>String</code> 类型的变量。
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
    <!-- 一键清空 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-input v-model:value="inputData1.value" size="small" clearable />
      </div>
      <div class="demo-desc">
        <span class="desc-title">一键清空</span>
        <div class="desc-text">使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框</div>
      </div>
      <div class="demo-code" v-show="inputData1.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>clearable</code> <code>Boolean</code>的属性控制清空按键
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
    <!-- 禁用状态 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-input v-model:value="inputData2.value" size="small" disabled />
      </div>
      <div class="demo-desc">
        <span class="desc-title">禁用状态</span>
        <div class="desc-text">使用 <code>disabled</code> 属性即可得到一个被禁用的输入框</div>
      </div>
      <div class="demo-code" v-show="inputData2.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>disbaled</code> <code>Boolean</code>的属性控制输入框状态
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
    <!-- 密码框 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-input v-model:value="inputData3.value" size="small" type="password" show-password />
      </div>
      <div class="demo-desc">
        <span class="desc-title">密码框</span>
        <div class="desc-text">更改 <code>type</code> 属性即可得到一个密码框，使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框</div>
      </div>
      <div class="demo-code" v-show="inputData3.visible">
        <code class="code-bg">
          <div class="code-text">
            传入 <code>type="password"</code> 控制输入框类型
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
    return { toggleDemoCode1, inputData, toggleDemoCode, inputData1,inputData2,toggleDemoCode2,toggleDemoCode3,inputData3 };
  },
};
</script>
<style lang="scss" scoped>
</style>