<template>
    <tg-switch v-model:value="visible" active-text="开" inactive-text="关" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref(true)
</script>