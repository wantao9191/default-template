<template>
    <tg-button size="mini" theme="link" @click="open">open message</tg-button>
</template>
<script setup lang="ts">
import { message } from '@/libs'
const open = () => {
    message({ message: '这是一个消息弹窗' })
}
</script>