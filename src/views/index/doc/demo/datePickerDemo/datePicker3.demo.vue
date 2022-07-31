<template>
    <tg-date-picker v-model:value="value1" size="small" type="date" />
    <br>
    <tg-date-picker v-model:value="value2" size="small" type="month" style="margin-top:12px" />
    <br>
    <tg-date-picker v-model:value="value3" size="small" type="year" style="margin-top:12px" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>