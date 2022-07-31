<template>
    <tg-button size="mini" theme="link" @click="open('message')">message</tg-button>
    <tg-button size="mini" theme="link" @click="open('success')">success</tg-button>
    <tg-button size="mini" theme="link" @click="open('warning')">warning</tg-button>
    <tg-button size="mini" theme="link" @click="open('error')">error</tg-button>
</template>
<script setup lang="ts">
import { message } from '@/libs'
const open = (type) => {
    message({ message: '这是一个消息弹窗', type })
}
</script>