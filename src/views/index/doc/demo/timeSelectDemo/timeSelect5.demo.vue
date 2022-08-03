<template>
  <tg-time-select
    v-model:value="value"
    min-time="12:00"
    max-time="16:00"
  ></tg-time-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>