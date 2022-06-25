<template>
    <div class="tg-option"
        :class="[`tg-option-${options.size || size}`, { active: options.data && options.data === label || options.data && options.data === value }]"
        @click.stop="onClick">
        {{ label || value }}
    </div>
</template>
<script setup>
import { inject, reactive, ref } from "vue"

const props = defineProps({
    label: { type: [String, Number], default: '' },
    value: { type: [String, Number], default: '' },
    size: { type: String, default: 'small' }
})
const options = reactive(inject(['options']))
const update = inject('update')
const onClick = () => { 
    console.log(props.value || props.label,2222)
    update(props.value || props.label) }
</script>
<style lang="scss" scoped>
.tg-option {
    cursor: pointer;
    padding: 6px 12px;

    &.active {
        color: $primary;
        font-weight: bold;
    }

    &.tg-option-mini {
        font-size: 12px;
    }

    &.tg-option-small {
        font-size: 14px;
    }

    &.tg-option-large {
        font-size: 16px;
    }

    &:hover {
        background: #ddd;
    }
}
</style>