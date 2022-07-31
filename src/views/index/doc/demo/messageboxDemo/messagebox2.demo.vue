<template>
    <tg-button size="mini" theme="link" @click="openConfirmBox">点击打开confirm box</tg-button>
</template>
<script setup lang="ts">
import { messageBox, message } from "@/libs";
const openConfirmBox = () => {
    messageBox.confirm('这是一段内容', '提示').then(() => {
        message.success({message:'确认了弹窗',type:'success'})
    }).catch(() => {
        message({message:'取消了弹窗',type:'error'})
    })
}
</script>