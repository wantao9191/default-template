<template>
    <tg-date-picker v-model:value="value1" size="mini" />
    <br>
    <tg-date-picker v-model:value="value2" style="margin-top:12px"> </tg-date-picker>
    <br>
    <tg-date-picker v-model:value="value3" size="large" style="margin-top:12px"></tg-date-picker>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>