<template>
    <span style="margin-right:6px">primary:</span>
    <tg-switch v-model:value="visible1" type="primary" />
    <span style="margin:0 6px 0 24px">danger:</span>
    <tg-switch v-model:value="visible2" type="danger" />
    <span style="margin:0 6px 0 24px">success:</span>
    <tg-switch v-model:value="visible3" type="success" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible1 = ref(true)
const visible2 = ref(true)
const visible3 = ref(true)
</script>