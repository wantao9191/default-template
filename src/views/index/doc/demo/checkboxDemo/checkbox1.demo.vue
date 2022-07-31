<template>
    <tg-checkbox v-model:value="value1" label="选项1"></tg-checkbox>
    <tg-checkbox v-model:value="value2" label="选项2"></tg-checkbox>
    <br>
    <tg-checkbox v-model:value="value3" label="选项3" style="margin: 12px 0;"></tg-checkbox>
    <tg-checkbox v-model:value="value4" label="选项4"></tg-checkbox>
    <br>
    <tg-checkbox v-model:value="value5" label="选项5"></tg-checkbox>
    <tg-checkbox v-model:value="value6" label="选项6"></tg-checkbox>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
</script>