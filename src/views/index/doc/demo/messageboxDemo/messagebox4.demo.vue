<template>
    <tg-button size="mini" theme="link" @click="openMessageBoxCenter">点击打开message box</tg-button>
</template>
<script setup lang="ts">
import { messageBox, message } from "@/libs";
const openMessageBoxCenter = () => {
    messageBox.alert('这是一段内容', '提示', {
        align: 'center'
    }).then(() => {
        message.success({ message: '确认了弹窗', type: 'success' })
    }).catch(() => {
        message({ message: '取消了弹窗', type: 'error' })
    })
}
</script>