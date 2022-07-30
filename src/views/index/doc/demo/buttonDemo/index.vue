<template>
  <div class="demo button-demo">
    <h2>Button 按钮</h2>
    <p>常规的操作按钮</p>
    <h3>何时使用</h3>
    <ul>
      <li>按钮用于开始一个即时操作。</li>
      <li>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基础用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="buttonDemo1"></component>
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">基础的按钮用法</div>
      </div>
      <div class="demo-code" v-show="buttonData1.visible">
        <code class="code-bg">
          <div class="code-text">
            通过
            <code>type</code>
        属性
        <code>String</code> 类型的变量，改变
        <code>tg-button</code>
        的样式。
      </div>
      <pre v-html="demo1"></pre>
      </code>

    </div>
    <div class="demo-btns">
      <a href="javaScript:;">copy</a>
      <a href="javaScript:;" @click="toggleDemoCode1">{{ buttonData1.txt }}</a>
    </div>
  </div>
  <!-- 按钮类型 -->
  <div class="demo-block">
    <div class="demo-component">
      <component :is="buttonDemo2"></component>
    </div>
    <div class="demo-desc">
      <span class="desc-title">三种类型</span>
      <div class="desc-text">按钮的不同类型</div>
    </div>
    <div class="demo-code" v-show="buttonData3.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>theme</code>
      属性
      <code>String</code> 类型的变量:
      <code style="margin-right:6px">text</code>
      <code style="margin-right:6px">link</code>
      <code style="margin-right:6px">button</code>改变
      <code>tg-button</code>
      的类型。
    </div>
    <pre v-html="demo2"></pre>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">copy</a>
    <a href="javaScript:;" @click="toggleDemoCode3">{{ buttonData3.txt }}</a>
  </div>
  </div>
  <!-- 其他尺寸 -->
  <div class="demo-block">
    <div class="demo-component">
      <component :is="buttonDemo3"></component>
    </div>
    <div class="demo-desc">
      <span class="desc-title">三种尺寸</span>
      <div class="desc-text">按钮的不同大小</div>
    </div>
    <div class="demo-code" v-show="buttonData2.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>size</code>
      属性
      <code>String</code> 类型的变量:
      <code style="margin-right:6px">small</code>
      <code style="margin-right:6px">normal</code>
      <code style="margin-right:6px">large</code>改变
      <code>tg-button</code>
      的尺寸。
    </div>
    <pre v-html="demo3"></pre>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">copy</a>
    <a href="javaScript:;" @click="toggleDemoCode2">{{ buttonData2.txt }}</a>
  </div>
  </div>
  <!-- 禁用状态 -->
  <div class="demo-block">
    <div class="demo-component">
      <component :is="buttonDemo4"></component>
    </div>
    <div class="demo-desc">
      <span class="desc-title">禁用按钮</span>
      <div class="desc-text">按钮的禁用状态</div>
    </div>
    <div class="demo-code" v-show="buttonData3.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>disabled</code>
      属性
      <code>Boolean</code> 类型的变量,控制
      <code>tg-button</code>
      的禁用状态。
    </div>
    <pre v-html="demo4"></pre>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">copy</a>
    <a href="javaScript:;" @click="toggleDemoCode3">{{ buttonData3.txt }}</a>
  </div>
  </div>
  <!-- 按钮Loading -->
  <div class="demo-block">
    <div class="demo-component">
      <component :is="buttonDemo5"></component>
    </div>
    <div class="demo-desc">
      <span class="desc-title">Loading状态</span>
      <div class="desc-text">按钮的loading的状态</div>
    </div>
    <div class="demo-code" v-show="buttonData4.visible">
      <code class="code-bg">
          <div class="code-text">
            通过
            <code>loading</code>
      属性
      <code>Boolean</code> 类型的变量,控制
      <code>tg-button</code>
      的加载状态。
    </div>
    <pre v-html="demo5"></pre>
    </code>
  </div>
  <div class="demo-btns">
    <a href="javaScript:;">copy</a>
    <a href="javaScript:;" @click="toggleDemoCode4">{{ buttonData4.txt }}</a>
  </div>
  </div>
  </div>
</template>
<script setup lang='ts'>
import buttonDemo1 from './button1.demo.vue'
import buttonDemoRaw1 from './button1.demo.vue?raw'
import buttonDemo2 from './button2.demo.vue'
import buttonDemoRaw2 from './button2.demo.vue?raw'
import buttonDemo3 from './button3.demo.vue'
import buttonDemoRaw3 from './button3.demo.vue?raw'
import buttonDemo4 from './button4.demo.vue'
import buttonDemoRaw4 from './button4.demo.vue?raw'
import buttonDemo5 from './button5.demo.vue'
import buttonDemoRaw5 from './button5.demo.vue?raw'
import { reactive } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
  buttonDemoRaw1,
  Prism.languages.html,
  "html"
);
const demo2 = Prism.highlight(
  buttonDemoRaw2,
  Prism.languages.html,
  "html"
);
const demo3 = Prism.highlight(
  buttonDemoRaw3,
  Prism.languages.html,
  "html"
);
const demo4 = Prism.highlight(
  buttonDemoRaw4,
  Prism.languages.html,
  "html"
);
const demo5 = Prism.highlight(
  buttonDemoRaw5,
  Prism.languages.html,
  "html"
);
const buttonData1 = reactive({ visible: false, txt: "显示" });
const toggleDemoCode1 = () => {
  buttonData1.visible = !buttonData1.visible;
  buttonData1.txt = buttonData1.visible ? "隐藏" : "显示";
};
const buttonData2 = reactive({ visible: false, txt: "显示" });
const toggleDemoCode2 = () => {
  buttonData2.visible = !buttonData2.visible;
  buttonData2.txt = buttonData2.visible ? "隐藏" : "显示";
};
const buttonData3 = reactive({ visible: false, txt: "显示" });
const toggleDemoCode3 = () => {
  buttonData3.visible = !buttonData3.visible;
  buttonData3.txt = buttonData3.visible ? "隐藏" : "显示";
};
const buttonData4 = reactive({ visible: false, txt: "显示" });
const toggleDemoCode4 = () => {
  buttonData4.visible = !buttonData4.visible;
  buttonData4.txt = buttonData4.visible ? "隐藏" : "显示";
};
</script>
<style lang="scss" scoped>
</style>