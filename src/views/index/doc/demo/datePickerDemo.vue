<template>
  <div class="demo icon-demo">
    <h2>DatePicker 输入框</h2>
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
        {{inputData.value}}
        <tg-date-picker v-model:value="inputData.value" size="small" type="month" />
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
  <!-- <div class="demo-block">
    <div class="demo-component">
      <tg-date-picker v-model:value="inputData1.value" size="small" clearable />
    </div>
    <div class="demo-desc">
      <span class="desc-title">一键清空</span>
      <div class="desc-text">
        使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框
      </div>
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
  </div> -->
  <!-- 禁用状态 -->
  <!-- <div class="demo-block">
    <div class="demo-component">
      <tg-date-picker v-model:value="inputData2.value" size="small" disabled />
    </div>
    <div class="demo-desc">
      <span class="desc-title">禁用状态</span>
      <div class="desc-text">
        使用 <code>disabled</code> 属性即可得到一个被禁用的输入框
      </div>
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
  </div> -->
  <!-- 密码框 -->
  <!-- <div class="demo-block">
    <div class="demo-component">
      <tg-date-picker v-model:value="inputData3.value" size="small" type="password" show-password />
    </div>
    <div class="demo-desc">
      <span class="desc-title">密码框</span>
      <div class="desc-text">
        更改 <code>type</code> 属性即可得到一个密码框，使用
        <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框
      </div>
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
  </div> -->
  <!-- 带图标的 -->
  <!-- <div class="demo-block">
    <div class="demo-component">
      <tg-date-picker v-model:value="inputData4.value1" size="small" prefixIcon="desktop" />
      <tg-date-picker v-model:value="inputData4.value2" size="small" style="margin:12px 0" clearable>
        <template v-slot:suffixIcon>
          <tg-icon icon="tg-search"></tg-icon>
        </template>
      </tg-date-picker>
      <tg-date-picker v-model:value="inputData4.value3" size="small">
        <template v-slot:prefixIcon>
          <tg-icon icon="tg-mail-unread"></tg-icon>
        </template>
        <template v-slot:suffixIcon>
          <tg-icon icon="tg-search"></tg-icon>
        </template>
      </tg-date-picker>
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
  </div> -->
  <!-- 不同尺寸 -->
  <!-- <div class="demo-block">
    <div class="demo-component">
      <tg-date-picker v-model:value="inputData5.value1" size="mini" prefixIcon="desktop" />
      <tg-date-picker v-model:value="inputData5.value2"  style="margin:12px 0" clearable>
        <template v-slot:suffixIcon>
          <tg-icon icon="tg-search"></tg-icon>
        </template>
      </tg-date-picker>
      <tg-date-picker v-model:value="inputData5.value3" size="large">
        <template v-slot:prefixIcon>
          <tg-icon icon="tg-mail-unread"></tg-icon>
        </template>
        <template v-slot:suffixIcon>
          <tg-icon icon="tg-search"></tg-icon>
        </template>
      </tg-date-picker>
    </div>
    <div class="demo-desc">
      <span class="desc-title">不同尺寸的输入框</span>
      <div class="desc-text">使用 <code>size</code> 属性改变输入框大小。 除了默认大小外，还有另外两个选项：<code>large</code> , <code>small</code> 。</div>
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
  </div> -->
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
      code: '<tg-date-picker v-model:value="input"></tg-date-picker>',
      visible: false,
    });
    setTimeout(() => {
       inputData.value = '2000-10'
    }, 1000);
    const toggleDemoCode = () => {
      inputData.visible = !inputData.visible;
    };
    const inputData1 = reactive({
      value: "",
      code: '<tg-date-picker v-model:value="input" clearable></tg-date-picker>',
      visible: false,
    });
    const toggleDemoCode1 = () => {
      inputData1.visible = !inputData1.visible;
    };
    const inputData2 = reactive({
      value: "",
      code: '<tg-date-picker v-model:value="input" disabled></tg-date-picker>',
      visible: false,
    });
    const toggleDemoCode2 = () => {
      inputData2.visible = !inputData2.visible;
    };
    const inputData3 = reactive({
      value: "",
      code: '<tg-date-picker v-model:value="input" type="password"></tg-date-picker>',
      visible: false,
    });
    const toggleDemoCode3 = () => {
      inputData3.visible = !inputData3.visible;
    };
    const inputData4 = reactive({
      value: "",
      code: '<tg-date-picker v-model:value="input" prefixIcon="desktop" />,<tg-date-picker ,2&v-model:value="input",2&suffixIcon="search" ,/>,<tg-date-picker ,2&v-model:value="input",2&prefixIcon="mail-unread" ,2&suffixIcon="search" ,/>',
      visible: false,
    });
    const toggleDemoCode4 = () => {
      inputData4.visible = !inputData4.visible;
    };
    const inputData5 = reactive({
      value: "",
      code: '<tg-date-picker v-model:value="input" prefixIcon="desktop" size="mini" />,<tg-date-picker ,2&v-model:value="input" ,2&size="small" ,2&suffixIcon="search" ,/>,<tg-date-picker ,2&v-model:value="input" ,2&size="large" ,2&prefixIcon="mail-unread" ,2&suffixIcon="search" ,/>',
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