<template>
    <tg-tooltip placement="top" content="tooptip top" theme="dark" style="margin-right:12px">
        <template #content>tooptip top <br> slot</template>
        <tg-button size="mini">tooptip top</tg-button>
    </tg-tooltip>
    <tg-tooltip placement="right" content="tooptip right" theme="dark" style="margin-right:12px">
        <template #content>tooptip right <br> slot</template>
        <tg-button size="mini">tooptip right</tg-button>
    </tg-tooltip>
    <tg-tooltip placement="bottom" content="tooptip bottom" theme="dark" style="margin-right:12px">
        <template #content>tooptip bottom <br> slot</template>
        <tg-button size="mini">tooptip bottom</tg-button>
    </tg-tooltip>
    <tg-tooltip placement="left" content="tooptip left" theme="dark">
        <template #content>tooptip left <br> slot</template>
        <tg-button size="mini">tooptip left</tg-button>
    </tg-tooltip>
</template>
<script setup lang="ts">
</script>