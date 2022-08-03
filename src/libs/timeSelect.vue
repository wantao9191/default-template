<template>
  <div class="time-select" ref="timeSelect">
    <tg-input
      v-model:value="value"
      readonly
      :placeholder="placeholder"
      :disabled="disabled"
      :size="size"
      @focus="onFocus"
      @blur="onBlur"
      ref="input"
      @mouseleave="onMouseleave"
      @mouseover="onMouseover"
    >
      <template v-slot:prefixIcon>
        <tg-icon icon="tg-alarm" color="#333"></tg-icon>
      </template>
      <template v-slot:suffixIcon>
        <tg-icon
          icon="tg-close-circle-out"
          v-if="isHover && value"
          @click="clear"
        ></tg-icon>
        <tg-icon
          :icon="visible ? 'tg-arrow-up' : 'tg-arrow-down'"
          v-else
        ></tg-icon>
      </template>
    </tg-input>
    <div
      v-if="visible"
      class="tg-select-dropdown shadow"
      :class="[`direction-${placement}`]"
    >
      <div class="tg-select-dropdown-wrap">
        <ul class="scroll" ref="drop">
          <li
            v-for="(item, index) in list"
            :class="{ active: props.value === item, disabled: item.disabled }"
            :key="index"
            @mousedown.prevent
            @click="onClick(item)"
          >
            {{ item.label }}
          </li>
        </ul>
        <span class="arrow-light arrow-down arrow"></span>
        <span class="arrow-down arrow"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, nextTick, reactive, ref } from "vue";
import { C } from "../../dist/assets/index.e6d3a975";
import TgInput from "./input.vue";
const props = defineProps({
  value: { type: String, default: "" },
  placeholder: { type: String, default: "选择时间" },
  step: { type: String, default: "00:30" },
  start: { type: String, default: "09:00" },
  end: { type: String, default: "18:00" },
  disabled: Boolean,
  size: { type: String, default: "small" },
  minTime: { type: String },
  maxTime: { type: String },
});
const emits = defineEmits(["update:value", "change"]);
const value = computed(() => props.value);
const visible = ref(false);
const placement = ref("bottom");
const input = ref("");
const drop = ref("");
const timeSelect = ref("");
const isHover = ref(false);
const getMins = (time) => {
  const [h, m] = time.split(":");
  return Number(h) * 60 + Number(m);
};
const mins = getMins(props.step);
const start = getMins(props.start);
const end = getMins(props.end);
const minTime = props.minTime && getMins(props.minTime);
const maxTime = props.maxTime && getMins(props.maxTime);

const list = computed(() =>
  new Array(Math.floor((end - start + mins) / mins))
    .fill("")
    .map((item, index) => {
      const T = index * mins + start;
      const H = Math.floor(T / 60);
      const M = T % 60;
      if (props.maxTime) {
        console.log(maxTime)
      }
      return {
        label: `${H < 10 ? "0" + H : H}:${M < 10 ? "0" + M : M}`,
        disabled: T < minTime||T>maxTime,
      };
    })
);
const onClick = (e) => {
  if (e.disabled) return;
  emits("update:value", e.label);
  emits("change", e.label);
  input.value.blur();
};
const onFocus = () => {
  visible.value = true;
  nextTick(() => {
    const { bottom } = timeSelect.value.getBoundingClientRect();
    placement.value =
      bottom + 200 > document.body.clientHeight ? "top" : "bottom";
    if (value.value) {
      drop.value.scrollTo(0, drop.value.querySelector("li.active").offsetTop);
    }
  });
};
const onBlur = () => {
  visible.value = false;
};
const onMouseover = () => {
  isHover.value = true;
};
const onMouseleave = () => {
  isHover.value = false;
};
const clear = () => {
  emits("update:value", "");
  emits("change", "");
};
</script>
<style lang="scss" scoped>
.time-select {
  position: relative;
  width: 200px;

  > .tg-select-dropdown {
    position: absolute;
    background: #fff;
    width: 100%;
    z-index: 100;
    top: calc(100% + 12px);
    border-radius: 6px;

    > .tg-select-dropdown-wrap {
      padding: 6px 0;
      position: relative;
      font-size: 14px;

      ul {
        height: 200px;
        overflow-y: auto;
        > li {
          padding: 6px 0 6px 12px;
          color: #666;
          letter-spacing: 1px;
          cursor: pointer;
          font-size: 12px;

          &.active {
            color: $primary;
          }

          &:hover {
            background: #f5f7fa;
          }
          &.disabled{
            cursor:not-allowed;
            color: #999;
            &:hover{
                background: none;
            }
          }
        }
      }

      .arrow {
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);

        &.arrow-down {
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #fff;

          &.arrow-light {
            border-bottom-color: #666;
            z-index: -1;
          }
        }
      }
    }
    &.direction-top {
      top: -224px;
      > .tg-select-dropdown-wrap {
        .arrow {
          top: 212px;
          &.arrow-down {
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #fff;
            border-bottom-color: transparent;
            &.arrow-light {
              border-top-color: #666;
              border-bottom-color: transparent;
              z-index: -1;
            }
          }
        }
      }
    }
  }
}
</style>