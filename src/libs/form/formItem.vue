<template>
  <div
    class="tg-form-item"
    :class="[
      `tg-form-item-${injectSize || size || 'small'}`,
      `tg-form-item-${labelPosition}`,
      { 'tg-inline-form-item': inline },
    ]"
  >
    <span
      class="tg-form-item-label"
      :class="{ 'label-required': required }"
      :style="{ width: labelWidth }"
      ><slot name="label">{{ label }}</slot></span
    >
    <div class="tg-form-item-content">
      <slot></slot>
      <div class="error-content" v-if="errorConfig.visible">
        {{ errorConfig.message }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, inject, provide, reactive, ref, useSlots } from "vue";

const props = defineProps({
  label: String,
  size: { type: String, default: "" },
  labelPosition: { type: String, default: "left" },
  labelWidth: { type: String, default: "auto" },
  prop: String,
});
const injectSize = ref(inject("size"));
provide("size", injectSize || props.size || "small");
const labelPosition = ref(inject("labelPosition"));
const labelWidth = ref(inject("labelWidth"));
const inline = ref(inject("inline"));
const validator = inject("validator");
const slots = useSlots();
const errorConfig = reactive({ visible: false, message: "" });
const rule = inject("rules")[props.prop];
const required = computed(() => {
  if (rule) {
    if (rule.length) {
      const item = rule.find((r) => r.required);
      return item && item.required;
    } else {
      return item.required === true;
    }
  } else {
    return false;
  }
});
const validFn = (errors) => {
  const item = errors.find((e) => e.field === props.prop);
  errorConfig.visible = item != null;
  errorConfig.message = item.message;
};
defineExpose({ validFn, prop: props.prop });
</script>
<style lang="scss" scoped>
.tg-form-item {
  display: flex;
  // align-items: center;
  margin-bottom: 18px;
  > .tg-form-item-label {
    font-size: 14px;
    margin-right: 12px;
    line-height: 32px;

    &.label-required::before {
      display: inline-block;
      content: "*";
      margin-right: 4px;
      color: $danger;
    }
  }
  &.tg-form-item-mini {
    > .tg-form-item-label {
      font-size: 13px;
      line-height: 24px;
    }
  }
  &.tg-form-item-large {
    > .tg-form-item-label {
      font-size: 16px;
      line-height: 36px;
    }
  }
  > .tg-form-item-content {
    flex-grow: 1;
    position: relative;
    .error-content {
      font-size: 12px;
      color: $danger;
      position: absolute;
      left: 0;
      bottom: -16px;
    }
  }
  &.tg-form-item-center {
    > .tg-form-item-label {
      text-align: center;
    }
  }
  &.tg-form-item-right {
    > .tg-form-item-label {
      text-align: right;
    }
  }
  &.tg-form-item-top {
    display: block;
    text-align: left;
    > .tg-form-item-label {
      display: block;
      margin-bottom: 12px;
    }
  }
  &.tg-inline-form-item {
    display: inline-flex;
    align-content: center;
    margin-right: 12px;
    > .tg-form-item-label {
      margin-bottom: 0;
    }
  }
}
</style>
