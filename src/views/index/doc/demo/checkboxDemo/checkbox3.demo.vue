<template>
    <tg-checkbox-group v-model:value="value" disabled>
        <tg-checkbox value="选项一"></tg-checkbox>
        <tg-checkbox value="选项二"></tg-checkbox>
    </tg-checkbox-group>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const value = reactive([])
</script>