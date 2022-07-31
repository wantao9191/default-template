<template>
    <tg-tooltip placement="top" content="tooptip top" theme="dark" style="margin-right:12px">
        <template #content>tooptip left slot</template>
        <tg-button size="mini">Dark</tg-button>
    </tg-tooltip>
    <tg-tooltip placement="top" content="tooptip top" theme="light">
        <template #content>tooptip left slot</template>
        <tg-button size="mini">Light</tg-button>
    </tg-tooltip>
</template>
<script setup lang="ts"></script>