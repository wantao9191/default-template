<template>
    <tg-time-select v-model:value="value" class="item" size="mini"></tg-time-select>
    <tg-time-select v-model:value="value" class="item" size="small"></tg-time-select>
    <tg-time-select v-model:value="value"  size="large"></tg-time-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('')
</script>
<style lang="scss" scoped>
.item {
    margin-bottom: 12px;
}
</style>