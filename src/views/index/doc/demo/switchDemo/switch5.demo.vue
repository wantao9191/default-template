<template>
    <tg-switch v-model:value="visible1" style="margin-right:10px" />
    <tg-switch v-model:value="visible2" size="small" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible1 = ref(true)
const visible2 = ref(true)
</script>