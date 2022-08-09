<template>
  <div class="tg-form">
    <component
      v-for="(item, i) in $slots.default()"
      :key="i"
      :is="item"
      ref="slot"
    ></component>
  </div>
</template>
<script setup lang="ts">
import { provide, ref, useSlots, VNode } from "vue";
import Schema from "async-validator";
const props = defineProps({
  size: { type: String, default: "small" },
  labelPosition: { type: String, default: "left" },
  inline: Boolean,
  labelWidth: { type: String, default: "auto" },
  value: { type: Object, default: {} },
  rules: { type: Object, default: {} },
});
provide("size", props.size);
provide("labelPosition", props.labelPosition);
provide("labelWidth", props.labelWidth);
provide("inline", props.inline);
provide('rules',props.rules)
const slot = ref("");
const validator = new Schema(props.rules);
provide("validator", validator);
const validate = () => {
  validator
    .validate(props.value)
    .then(() => {
      console.log("success");
    })
    .catch(({ errors, fields }) => {
      errors.forEach((e) => {
        const item = slot.value && slot.value.find((s) => s.prop === e.field);
        item && item.validFn(errors);
      });
    });
};

defineExpose({ validate });
</script>
<style lang="scss" scoped>
</style>