<template>
    <div class="tg-checkbox-group">
        <slot></slot>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
const props = defineProps({
    value: { type: Array, default: [] },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: 'small' }
})
const emit = defineEmits(['update:value', 'change'])
const value = ref(props.value)
const onUpdate = e => {
    emit('update:value', e)
    emit('change', e)
}
provide('options', { data: value.value, disabled: props.disabled, size: props.size })
provide('update', onUpdate)
</script>
<style lang="scss" scoped>
.tg-checkbox-group {
    display: inline-flex;
}
</style>