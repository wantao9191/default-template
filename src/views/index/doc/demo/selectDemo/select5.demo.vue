<template>
    <tg-select v-model:value="value" filterable>
        <tg-option value="选项一"></tg-option>
        <tg-option value="选项二"></tg-option>
    </tg-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>