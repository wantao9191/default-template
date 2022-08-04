<template>
  <div class="m-aside shadow">
    <ul>
      <li
        v-for="(m, i) in menus"
        :key="i"
        @click="onClick(m)"
        :class="{ active: $route.path == m.path }"
      >
        <div class="label label-flex" style="padding: 12px 12px 0">
          <span class="label-bold">
            {{ m.label }}
          </span>
          <!-- <tg-icon :icon="`tg-arrow-${m.slider ? 'forward' : 'down'}`"></tg-icon> -->
        </div>
        <div class="menu-child">
          <ul>
            <li
              v-for="(c, n) in m.children"
              :key="n"
              @click.stop="onClick(c)"
              :class="{ active: $route.path == c.path }"
            >
              <span class="label" :class="{ type: c.type }" :style="{padding:c.padding}">{{
                c.type || c.label
              }}</span>
              <ul>
                <li
                  v-for="(cc, nn) in c.children"
                  :key="nn"
                  @click.stop="onClick(cc)"
                  :class="{ active: $route.path == cc.path }"
                >
                  <span class="label" style="padding: 8px 12px">{{
                    cc.label
                  }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const menus = reactive([
      {
        label: "指南",
        children: [
          { label: "安装", path: "/doc/install",padding:'8px 12px' },
          { label: "快速开始", path: "/doc/start" ,padding:'8px 12px' },
        ],
      },
      {
        label: "组件",
        icon: "dict",
        slider: false,
        children: [
          {
            type: "Basic",
            children: [
              { label: "Icon 图标", path: "/doc/icon" },
              { label: "Button 按钮", path: "/doc/button" },
            ],
          },
          {
            type: "Form",
            children: [
              { label: "Switch 开关", path: "/doc/switch" },
              { label: "Input 输入框", path: "/doc/input" },
              { label: "Radio 单选框", path: "/doc/radio" },
              { label: "Checkbox 多选框", path: "/doc/checkbox" },
              { label: "Select 下拉框", path: "/doc/select" },
              { label: "DatePicker 日期选择器", path: "/doc/datePicker" },
              { label: "TimeSelect 时间选择", path: "/doc/timeSelect" },
              { label: "TimePicker 时间选择器", path: "/doc/timePicker" },
            ],
          },
          {
            type: "Feedback",
            children: [
              { label: "Dialog 模态框", path: "/doc/dialog" },
              { label: "Tooltip 文字提示", path: "/doc/tooltip" },
              { label: "MessageBox 提示弹框", path: "/doc/messageBox" },
              { label: "Message 消息提示", path: "/doc/message" },
            ],
          },
          {
            type: "Navigation",
            children: [{ label: "Tabs 标签页", path: "/doc/tabs" }],
          },
        ],
      },
    ]);
    const onClick = (e) => {
      if (e.path) {
        router.push(e.path);
        store.commit("menuChange", false);
      } else {
      }
    };
    return { menus, onClick };
  },
};
</script>
<style lang="scss" scoped>
.m-aside {
  background: #fff;
  width: 240px;
  height: calc(100% - 2px);
  margin-top: 2px;
  overflow-y: auto;
  padding-right: 10px;
  &::-webkit-scrollbar {
    /*高宽分别对应横竖滚动条的尺寸*/
    width: 5px;
    height: 20px;
  }

  /*滚动条里面小方块*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px !important;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
    /* 颜色 */
    /* background:#b6b6b6!important; */
    /* 线性渐变背景 */
    background: #d2d6dd;
  }

  ul {
    li {
      user-select: none;
      cursor: pointer;
      color: #666;
      margin-top: 4px;
      font-size: 13px;
      .label-bold {
        font-weight: bold;
        font-size: 14px;
      }
      &.active {
        // background: #333;
        border-right: 3px solid $primary;
        background: #f0faff;
        font-weight: bold;
        color: $primary;
      }

      > .label {
        display: block;
        padding: 12px;
        &:hover {
          color: $primary;
        }
      }

      .label-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .menu-child {
        .type {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>