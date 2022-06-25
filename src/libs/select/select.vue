<template>
    <div class="tg-select" :class="[`tg-select-${size}`]">
        <tg-input v-model:value="value" :placeholder="placeholder" :size="size" @focus="onFocus" @blur="onBlur" readonly
            :suffixIcon="icon">
        </tg-input>
        <div class="tg-select-dropdown shadow" v-show="visible">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import { computed, provide, reactive, ref } from "vue"
const props = defineProps({
    value: { type: [String, Number, Array], default: '' },
    size: { type: String, default: 'small' },
    placeholder: { type: String, default: '请选择' }
})
const options = reactive({ size: props.size, data: props.value})
provide('options', options)
const emit = defineEmits(['update:value', 'change'])
const visible = ref(false)
const onFocus = () => {
    visible.value = true
}
const onBlur = () => {
    // visible.value = false
}
const update = (e) => {
    options.data = e
    emit('update:value', e)
    emit('change', 'e')
}
provide('update',update)
const icon = computed(() => visible.value ? 'arrow-up' : 'arrow-down')
</script>
<style lang="scss" scoped>
.tg-select {
    display: inline-block;
    position: relative;

    .tg-select-mini {
        font-size: 12px;
    }

    .tg-select-small {
        font-size: 14px;
    }

    .tg-select-large {
        font-size: 16px;
    }

    .tg-select-dropdown {
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        background: #fff;
        z-index: 9999;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 6px 0;
    }
}
</style>