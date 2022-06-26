<template>
    <div class="tg-option"
        :class="[`tg-option-${options.size || size}`, { active: options.data && options.data === label || options.data && options.data === value }, disabled]"
        v-if="hideOption">
        <div @mousedown.stop.prevent="onClick" class="tg-option-label" v-if="disabled">{{ label || value }}</div>
        <div v-else class="tg-option-label" @mousedown.stop="onClick">{{ label || value }}</div>
    </div>
</template>
<script setup>
import { computed, inject, reactive, ref } from "vue"

const props = defineProps({
    label: { type: [String, Number], default: '' },
    value: { type: [String, Number], default: '' },
    size: { type: String, default: 'small' },
    disabled: { type: Boolean, default: false }
})
const options = reactive(inject(['options']))
const update = inject('update')
const onClick = () => {
    if (props.disabled) return
    update(props.value || props.label)
}
const hideOption = computed(()=>{
    if(options.filterValue){
        return props.label.includes(options.filterValue) || props.value.includes(options.filterValue)
    }else{
        return true
    }
})
const disabled = computed(() => props.disabled ? 'tg-option-disabled' : '')
</script>
<style lang="scss" scoped>
.tg-option {
    cursor: pointer;
    &.active {
        color: $primary;
        font-weight: bold;
    }

    &.tg-option-disabled {
        cursor: not-allowed;
        color: #888;

        &:hover {
            background: #fff;
        }
    }
    &.tg-option-mini {
        font-size: 12px;
    }
    &.tg-option-small {
        font-size: 13px;
    }
    &.tg-option-large {
        font-size: 16px;
    }
    .tg-option-label {
        padding: 6px 12px;
        font-size: inherit;
    }
    &:hover {
        background: #ddd;
    }
}
</style>