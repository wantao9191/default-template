<template>
    <tg-input v-model:value="value1" size="mini" />
    <tg-input v-model:value="value2" size="small" />
    <tg-input v-model:value="value3" size="large" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
<style lang="scss" scoped>
.tg-input {
    &:not(:last-child) {
        margin-bottom: 12px;
    }
}
</style>