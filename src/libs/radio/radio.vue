<template>
    <div class="tg-radio" :class="[`tg-radio-${icon}`, disabled]" @click="onClick">
        <tg-icon class="radio-icon" :icon="`tg-radio-button-${icon}`"></tg-icon>
        <span>{{ label || value }}</span>
    </div>
</template>
<script setup>
import { computed, inject, reactive } from "vue";
const props = defineProps({
    value: { type: [String, Number], default: '' },
    label: { type: [String, Number], default: '' },
})
const options = reactive(inject('options'))
const update = inject('update')
const onClick = () => {
    if (options.disabled) return
    options.data = props.value || props.label
    update(props.value || props.label)
}
const icon = computed(() => options.data && options.data === props.value || !props.value && options.data && options.data === props.label ? 'on' : 'off')
const disabled = computed(() => options.disabled ? 'tg-radio-disabled' : '')
</script>
<style lang="scss" scoped>
.tg-radio {
    cursor: pointer;

    

    &+& {
        margin-left: 8px;
    }

    .radio-icon {
        margin-right: 4px;
        color: #ddd;
    }

    &.tg-radio-on {
        color: $primary;

        .radio-icon {
            color: inherit;
        }
    }
    &.tg-radio-disabled {
        cursor: not-allowed;
        color: #888;

        .radio-icon {
            color: #888;
        }
    }
}
</style>