<template>
    <div class="tg-checkbox"
        :class="[`tg-checkbox${icon}`, disabledComputed, `tg-checkbox-${options && options.size || size}`]"
        @click="onClick">
        <tg-icon class="checkbox-icon" :icon="`tg${icon}`" size="18"></tg-icon>
        <span class="tg-checkbox-label">{{ label || value }}</span>
    </div>
</template>
<script setup>
import { computed, inject, reactive, ref } from "vue";
const props = defineProps({
    value: { type: [String, Number, Boolean], default: '' },
    label: { type: [String, Number], default: '' },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: 'small' }
})
let options = inject('options', null)
// if(options) options = reactive(options)
const update = inject('update', () => { })
const emits = defineEmits(['update:value', 'change'])
const onClick = () => {
    if (!options) {
        emits('update:value', !props.value)
        emits('change', !props.value)
        return
    }
    if (options.disabled || props.disabled) return
    let key = props.value || props.label
    const index = options.data.indexOf(key)
    if (index > -1) {
        options.data.splice(index, 1)
    } else {
        options.data.push(key)
    }
    update(options.data)
}
const icon = computed(() => {
    if (options) {
        return options.data && options.data.includes(props.value) || !props.value && options.data && options.data.includes(props.label) ? '-square' : '-square-outline'
    } else {
        return props.value ? '-square' : '-square-outline'
    }
})
const disabledComputed = computed(() => options && options.disabled || props.disabled ? 'tg-checkbox-disabled' : '')
</script>
<style lang="scss" scoped>
.tg-checkbox {
    cursor: pointer;
    font-size: 14px;
    display: inline-flex;

    &+& {
        margin-left: 8px;
    }

    .checkbox-icon {
        margin-right: 4px;
        color: #ddd;
    }

    &.tg-checkbox-square {
        color: $primary;

        .checkbox-icon {
            color: inherit;
        }
    }

    &.tg-checkbox-disabled {
        cursor: not-allowed;
        color: #888;

        .checkbox-icon {
            color: #888;
        }
    }

    &.tg-checkbox-mini {
        font-size: 12px;
    }

    &.tg-checkbox-large {
        font-size: 16px;
    }

    .tg-checkbox-label {
        vertical-align: text-bottom;
        font-size: inherit;
    }
}
</style>