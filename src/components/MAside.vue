<template>
  <div class="m-aside shadow">
    <ul>
      <li v-for="(m, i) in menus" :key="i" @click="onClick(m)" :class="{ active: $route.path == m.path }">
        <div class="label label-flex">
          <span>
            <tg-icon icon="tg-disc" size="18"></tg-icon>
            {{ m.label }}
          </span>
          <!-- <tg-icon :icon="`tg-arrow-${m.slider ? 'forward' : 'down'}`"></tg-icon> -->
        </div>
        <div class="menu-child">
          <ul>
            <li v-for="(c, n) in m.children" :key="n" @click.stop="onClick(c)"
              :class="{ active: $route.path == c.path }">
              <span class="label">{{ c.label }}</span>
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
export default {
  setup() {
    const router = useRouter();
    const menus = reactive([
      {
        label: "组件",
        icon: 'dict',
        slider: false,
        children: [
          { label: "Icon 图标", path: "/doc/icon" },
          { label: "Dialog 模态框", path: "/doc/dialog" },
          { label: "Switch 开关", path: "/doc/switch" },
          { label: "Button 按钮", path: "/doc/button" },
          { label: "Input 输入框", path: "/doc/input" },
          { label: "Radio 单选框", path: "/doc/radio" },
          { label: "Checkbox 多选框", path: "/doc/checkbox" },
          { label: "Select 下拉框", path: "/doc/select" },
          { label: "DatePicker 时间选择器", path: "/doc/datePicker" },
          { label: "tooltip 文字提示", path: "/doc/tooltip" },
        ],
      },
    ]);
    const onClick = (e) => {
      if (e.path) {
        router.replace(e.path);
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
  width: 200px;
  height: calc(100% - 2px);
  margin-top: 2px;

  ul {
    li {
      user-select: none;
      cursor: pointer;
      color: #666;
      margin-top: 4px;
      font-size: 13px;

      &.active {
        // background: #333;
        border-right: 3px solid #1890ff;
        background: #f0faff;
      }

      >.label {
        display: block;
        padding: 12px 12px 12px 24px;

        &:hover {
          color: #1890ff;
        }
      }

      .label-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .menu-child {
        .label {
          padding-left: 3em;
        }
      }
    }
  }
}
</style>