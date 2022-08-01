<template>
    <tg-tabs v-model:value="value" type="border-card">
        <tg-tabs-pane label="标签一" name="1">标签一</tg-tabs-pane>
        <tg-tabs-pane label="标签二" name="2">标签二</tg-tabs-pane>
        <tg-tabs-pane label="标签三" name="3">标签三</tg-tabs-pane>
    </tg-tabs>
</template>
<script  setup lang="ts">
import { ref } from "vue";
const value = ref('1')
</script>