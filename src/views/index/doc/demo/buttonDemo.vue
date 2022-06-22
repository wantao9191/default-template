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
        <div class="component-item">
          <tg-button>默认按钮</tg-button>
          <tg-button type="primary">主要按钮</tg-button>
          <tg-button type="success">成功按钮</tg-button>
          <tg-button type="danger">危险按钮</tg-button>
        </div>
        <div class="component-item">
          <tg-button round>默认按钮</tg-button>
          <tg-button type="primary" round>主要按钮</tg-button>
          <tg-button type="success" round>成功按钮</tg-button>
          <tg-button type="danger" round>危险按钮</tg-button>
        </div>
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
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">&lt;div&gt;</span>
          <span class="code-tag code-script-4">
            &lt;tg-button&gt;
            <span>默认按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="primary"&gt;
            <span>主要按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="success"&gt;
            <span>成功按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="danger"&gt;
            <span>危险按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">&lt;/div&gt;</span>
          <span class="code-tag code-script-2">&lt;div&gt;</span>
          <span class="code-tag code-script-4">
            &lt;tg-button round&gt;
            <span>默认按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="primary" round&gt;
            <span>主要按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="success" round&gt;
            <span>成功按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="danger" round&gt;
            <span>危险按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">&lt;/div&gt;</span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode1">{{buttonData1.txt}}</a>
      </div>
    </div>
    <!-- 按钮类型 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-button>button</tg-button>
        <tg-button theme="text">text</tg-button>
        <tg-button theme="link">link</tg-button>
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
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">
            &lt;tg-button theme="button"&gt;
            <span>small</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button theme="text"&gt;
            <span>text</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button theme="link" &gt;
            <span>link</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode3">{{buttonData3.txt}}</a>
      </div>
    </div>
    <!-- 其他尺寸 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-button type="primary" size="large">large</tg-button>
        <tg-button type="primary" size="normal">normal</tg-button>
        <tg-button type="primary" size="small">small</tg-button>
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
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">
            &lt;tg-button size="small"&gt;
            <span>small</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button size="normal"&gt;
            <span>normal</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button size="large" &gt;
            <span>large</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode2">{{buttonData2.txt}}</a>
      </div>
    </div>
    <!-- 禁用状态 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-button>正常</tg-button>
        <tg-button type="primary" disabled>禁用</tg-button>
        <tg-button type="danger" :disabled="true">禁用</tg-button>
        <tg-button type="success" :disabled="true">禁用</tg-button>
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
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">
            &lt;tg-button"&gt;
            <span>正常</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button type="parimary" disabled&gt;
            <span>禁用</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button type="danger" :disabled="true" &gt;
            <span>禁用</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode3">{{buttonData3.txt}}</a>
      </div>
    </div>
    <!-- 按钮Loading -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-button>正常</tg-button>
        <tg-button loading>Loading...</tg-button>
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
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">
            &lt;tg-button"&gt;
            <span>正常</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">
            &lt;tg-button loading&gt;
            <span>loadinng...</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode4">{{buttonData4.txt}}</a>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { reactive } from "vue";
export default {
  setup() {
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
    return {
      buttonData1,
      toggleDemoCode1,
      buttonData2,
      toggleDemoCode2,
      buttonData3,
      toggleDemoCode3,
      buttonData4,
      toggleDemoCode4,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>