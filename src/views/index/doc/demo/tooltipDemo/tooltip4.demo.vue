<template>
    <tg-tooltip placement="top" content="tooptip top" theme="dark" style="margin-right:12px">
        <template #content>tooptip left slot</template>
        <tg-button size="mini">Hover</tg-button>
    </tg-tooltip>
    <tg-tooltip placement="top" content="tooptip top" trigger="click">
        <template #content>tooptip left slot</template>
        <tg-button size="mini">Click</tg-button>
    </tg-tooltip>
</template>
<script setup lang="ts"></script>