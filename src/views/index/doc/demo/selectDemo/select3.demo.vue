<template>
    <tg-select v-model:value="value1" disabled>
        <tg-option value="选项一"></tg-option>
        <tg-option value="选项二"></tg-option>
    </tg-select>
    <br>
    <tg-select v-model:value="value2" style="margin-top:12px">
        <tg-option value="选项一" disabled></tg-option>
        <tg-option value="选项二" disabled></tg-option>
    </tg-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
</script>