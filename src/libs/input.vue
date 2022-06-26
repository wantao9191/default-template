<template>
  <div class="tg-input" :class="`tg-input-${size}`">
    <span class="prefixIcon" v-if="prefixIcon && type === 'text'">
      <tg-icon :icon="`tg-${prefixIcon}`"></tg-icon>
    </span>
    <span class="prefixIcon" v-if="!prefixIcon && type === 'text'">
      <slot name="prefixIcon"></slot>
    </span>
    <input :type="intputType" :readonly="readonly" v-model="inputModel" @input="onInput" :disabled="disabled"
      :placeholder="placeholder" :class="{
        'tg-input-suffix': tgInputSuffix,
        'tg-input-prefix': tgInputPrefix,
      }" @focus="onFocus" @blur="onBlur" @keyup.enter="onEnter"  ref="input"/>
    <span class="clearable" v-show="clearable && inputModel && type == 'text'" @click="onClear" :class="{ hasSlots }">
      <tg-icon icon="tg-close-circle-out" size="18"></tg-icon>
    </span>
    <span class="clearable" v-show="showPassword && inputModel && type === 'password'" @click="onToggle">
      <tg-icon :icon="intputType == 'text' ? 'tg-eye-off' : 'tg-eye'" size="18"></tg-icon>
    </span>
    <span class="clearable" v-if="suffixIcon && type === 'text'">
      <tg-icon :icon="`tg-${suffixIcon}`"></tg-icon>
    </span>
    <span class="clearable" v-if="!suffixIcon && type === 'text'">
      <slot name="suffixIcon"></slot>
    </span>
  </div>
</template>
<script setup>
import { ref, computed, toRef, useSlots } from "vue";
const props = defineProps({
  type: { type: String, default: "text" },
  value: { type: String, default: "" },
  size: { type: String, default: "small" },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: "请输入" },
  clearable: { type: Boolean, default: false },
  showPassword: { type: Boolean, default: false },
  suffixIcon: { type: String, default: "" },
  prefixIcon: { type: String, default: "" },
  readonly: { type: Boolean, default: false }
})
const slots = useSlots()
const input = ref('')
const emit = defineEmits(["update:value", 'change', 'focus', 'blur','input'])
const propsValue = ref(props.value)
const inputModel = computed({
  get: () => { return props.value },
  set: (param) => {
    propsValue.value = param
  }
})
const intputType = ref(props.type);
const onInput = () => {
  emit("update:value", propsValue.value);
  emit('input',propsValue.value)
};
const onClear = () => {
  props.value = "";
  emit("update:value", propsValue.value);
  emit('change', propsValue.value)
};
const onToggle = () => {
  intputType.value = intputType.value === "text" ? "password" : "text";
};
const onFocus = e => {
  emit('focus', e)
}
const onBlur = e => {
  emit('blur', e)
  emit('change', propsValue.value)
}
const onEnter = () => {
  emit('change', propsValue.value)
}
const blur = ()=>{
  input.value.blur()
}
const tgInputSuffix = computed(() => props.clearable || props.type === 'password' || props.suffixIcon || slots.suffixIcon)
const tgInputPrefix = computed(() => props.prefixIcon || slots.prefixIcon)
const hasSlots = computed(() => props.type === 'password' || props.suffixIcon || slots.suffixIcon)
defineExpose({blur})
</script>
<style lang="scss" scoped>
.tg-input {
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;

  input {
    border: none;
    width: 100%;
    border-radius: 4px;
    font-size: 13px;

    &:focus {
      outline: 1px solid $primary;
    }

    &[type="password"]::-ms-reveal {
      display: none;
    }

    &:disabled {
      cursor: not-allowed;
      user-select: none;
    }

    &.tg-input-suffix {
      padding-right: 28px !important;
    }

    &.tg-input-prefix {
      padding-left: 28px !important;
    }
  }

  &.tg-input-mini {
    input {
      padding: $mini;
    }
  }

  &.tg-input-small {
    input {
      padding: $small;
    }
  }

  &.tg-input-large {
    input {
      padding: $large;
    }
  }

  .clearable {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-weight: bolder;
    cursor: pointer;

    &.hasSlots {
      right: 24px;
    }
  }

  .prefixIcon {
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-weight: bolder;
    cursor: pointer;

  }
}
</style>