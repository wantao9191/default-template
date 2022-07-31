<template>
    <tg-button size="mini" theme="link" @click="openMessageBox">点击打开message box</tg-button>
</template>
<script setup lang="ts">
import { messageBox, message } from "@/libs";
const openMessageBox = () => {
    messageBox.alert('这是一段内容', '提示', {
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                instance.confirmLoading = true
            } else {
                done()
            }
        }
    })
}
</script>