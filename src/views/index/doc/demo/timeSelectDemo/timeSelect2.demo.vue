<template>
    <tg-time-select v-model:value="value" start="00:00" end="12:30"></tg-time-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>