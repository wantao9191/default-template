<template>
    <tg-radio-group v-model:value="value1" size="mini">
        <tg-radio value="选项一"></tg-radio>
        <tg-radio value="选项二"></tg-radio>
    </tg-radio-group>
    <br>
    <tg-radio-group v-model:value="value2" size="small" style="margin:12px 0">
        <tg-radio value="选项一"></tg-radio>
        <tg-radio value="选项二"></tg-radio>
    </tg-radio-group>
    <br>
    <tg-radio-group v-model:value="value3" size="large">
        <tg-radio value="选项一"></tg-radio>
        <tg-radio value="选项二"></tg-radio>
    </tg-radio-group>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>