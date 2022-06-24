<template>
    <div class="tg-radio-group">
        <slot></slot>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
const props = defineProps({
    value: { type: [String, Number], default: '' },
    disabled: { type: Boolean, default: false },
    size:{ type: String, default: 'small' }
})
const emit = defineEmits(['update:value', 'change'])
const value = ref(props.value)
const onUpdate = e => {
    emit('update:value', e)
    emit('change', e)
}
console.log(props.size)
provide('options', { data: value.value, disabled: props.disabled, size: props.size })
provide('update', onUpdate)
</script>
<style lang="scss" scoped>
.tg-radio-group {
    display: inline-flex;
}
</style>