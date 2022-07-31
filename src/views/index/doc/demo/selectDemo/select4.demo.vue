<template>
    <tg-select v-model:value="value1" size="mini">
        <tg-option value="选项一"></tg-option>
        <tg-option value="选项二"></tg-option>
    </tg-select>
    <br>
    <tg-select v-model:value="value2" size="small" style="margin:12px 0">
        <tg-option value="选项一"></tg-option>
        <tg-option value="选项二"></tg-option>
    </tg-select>
    <br>
    <tg-select v-model:value="value3" size="large">
        <tg-option value="选项一"></tg-option>
        <tg-option value="选项二"></tg-option>
    </tg-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>