<template>
    <div class="tg-radio-group">
        <slot></slot>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
const props = defineProps({ value: { type: [String, Number], default: '' } ,disabled:{type:Boolean,default:false}})
const emit = defineEmits(['update:value', 'change'])
const value = ref(props.value)
const onUpdate = e => {
    emit('update:value', e)
    emit('change', e)
}
provide('options', { data: value.value ,disabled:props.disabled})
provide('update', onUpdate)
</script>
<style lang="scss" scoped>
.tg-radio-group {
    display: inline-flex;
}
</style>