<template>
    <tg-switch v-model:value="visible1" :disabled="true" style="margin-right:10px" />
    <tg-switch v-model:value="visible2" type="success" disabled />
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible1 = ref(true)
const visible2 = ref(true)
</script>