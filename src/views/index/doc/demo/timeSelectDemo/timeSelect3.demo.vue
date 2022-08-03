<template>
    <tg-time-select v-model:value="value" disabled></tg-time-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>