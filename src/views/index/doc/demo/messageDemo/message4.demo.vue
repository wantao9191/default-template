<template>
    <tg-button size="mini" theme="link" @click="open">show close</tg-button>
</template>
<script setup lang="ts">
import { message } from '@/libs'
const open = () => {
    message({ message: '这是一个可关闭消息弹窗',showClose:true })
}
</script>