<template>
    <tg-switch v-model:value="visible" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref(true)
</script>