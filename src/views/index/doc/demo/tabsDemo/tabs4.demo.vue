<template>
    <tg-tabs v-model:value="value" @tabClick="onClick">
        <tg-tabs-pane name="1">
            <template #label>标签一</template>
            标签一
        </tg-tabs-pane>
        <tg-tabs-pane name="2" label="标签二">
            标签二
        </tg-tabs-pane>
        <tg-tabs-pane name="3">
            <template #label>标签三</template>
            标签三
        </tg-tabs-pane>
    </tg-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref('1')
const onClick = e => {
    console.log(e)
}
</script>