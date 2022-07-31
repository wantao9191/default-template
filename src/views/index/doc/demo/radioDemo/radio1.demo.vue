<template>
    <tg-radio-group v-model:value="value">
        <tg-radio value="选项一"></tg-radio>
        <tg-radio value="选项二"></tg-radio>
    </tg-radio-group>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>