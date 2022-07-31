<template>
    <tg-input v-model:value="value" size="small" disabled />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>