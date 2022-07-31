<template>
    <tg-input v-model:value="value" size="small" type="password" show-password />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>