<template>
    <tg-checkbox-group v-model:value="value1" size="mini">
        <tg-checkbox value="选项一"></tg-checkbox>
        <tg-checkbox value="选项二"></tg-checkbox>
    </tg-checkbox-group>
    <br>
    <tg-checkbox-group v-model:value="value2" size="small" style="margin:12px 0">
        <tg-checkbox value="选项一"></tg-checkbox>
        <tg-checkbox value="选项二"></tg-checkbox>
    </tg-checkbox-group>
    <br>
    <tg-checkbox-group v-model:value="value3" size="large">
        <tg-checkbox value="选项一"></tg-checkbox>
        <tg-checkbox value="选项二"></tg-checkbox>
    </tg-checkbox-group>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
</script>