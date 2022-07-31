<template>
    <tg-radio-group v-model:value="value1" disabled>
        <tg-radio value="选项一"></tg-radio>
        <tg-radio value="选项二"></tg-radio>
    </tg-radio-group>
    <br>
    <tg-radio-group v-model:value="value2" style="margin-top:12px">
        <tg-radio value="选项一" disabled></tg-radio>
        <tg-radio value="选项二" disabled></tg-radio>
    </tg-radio-group>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
</script>