<template>
    <div class="tg-radio-group">
        <slot></slot>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
const props = defineProps({ value: { type: [String, Number], default: '' } })
const value = ref(props.value)
const emit = defineEmits(['update:value','change'])
// console.log(emit('update:value'))
const onUpdate = e => {
    emit('update:value',e)
    emit('change',e)
}
provide('options', { data: value.value })
provide('update', onUpdate)
</script>
<style lang="scss" scoped>
</style>