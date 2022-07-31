<template>
    <tg-input v-model:value="value1" size="small" prefixIcon="desktop" />
    <tg-input v-model:value="value2" size="small" style="margin:12px 0" clearable>
        <template v-slot:suffixIcon>
            <tg-icon icon="tg-search"></tg-icon>
        </template>
    </tg-input>
    <tg-input v-model:value="value3" size="small">
        <template v-slot:prefixIcon>
            <tg-icon icon="tg-mail-unread"></tg-icon>
        </template>
        <template v-slot:suffixIcon>
            <tg-icon icon="tg-search"></tg-icon>
        </template>
    </tg-input>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>