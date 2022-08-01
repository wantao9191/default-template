<template>
    <div class="tg-tabs-pane" v-show="name === value">
        <slot></slot>
    </div>
</template>
<script setup>
import { inject } from "vue"
const props = defineProps({ label: { type: String, default: '' }, name: { type: [String, Number] } })
const value = inject('value')
</script>
<style lang="scss" scoped>
.tg-tabs-pane {
    padding: 12px;
    font-size: 14px;
}
</style>