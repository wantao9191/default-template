<template>
    <tg-button size="mini" theme="link" @click="openpromptBox">点击打开prompt box</tg-button>
</template>
<script setup lang="ts">
import { messageBox, message } from "@/libs";
const openpromptBox = () => {
    messageBox.prompt('请输入邮箱', '提示',
        {
            inputValue: '', inputPlaceholder: '请输入邮箱啊',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            errorMessage: '请输入邮箱',
        }).then(() => {
            message.success({ message: '确认了弹窗', type: 'success' })
        }).catch(() => {
            message({ message: '取消了弹窗', type: 'error' })
        })
}
</script>