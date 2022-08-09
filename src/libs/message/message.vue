<template>
    <div class="tg-message-box" :style="{ top: props.top + 'px' }">
        <div class="tg-message-wrap in" :style="{ 'text-align': props.align }" :class="[`tg-message-${props.type}`]"
            @mouseover="mouseover" @mouseout="mouseout">{{
                    props.message
            }}
            <a href="javaScript:;" @click="onClose" v-if="props.showClose">
                <tg-icon icon="tg-close" size="20"></tg-icon>
            </a>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "vue"
import tgIcon from '../icon.vue'
const props = defineProps({
    message: String,
    showClose: Boolean,
    type: { type: String, default: 'message' },
    top: { type: Number, default: 0 },
    align: { type: String, default: 'left' }
})
const emits = defineEmits(['close'])
let timer = null
const off = () => {
    if (props.showClose) return
    timer = setTimeout(() => {
        emits('close')
    }, 3000);
}
const mouseover = () => {
    clearTimeout(timer)
}
const mouseout = () => {
    off()
}
const onClose = ()=>{
    emits('close')
}
onMounted(() => off())
</script>
<style lang="scss" scoped>
.tg-message-box {
    position: fixed;
    top: 2vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2001;
    transition: .5s;

    .tg-message-wrap {
        font-size: 14px;
        min-width: 320px;
        border-radius: 6px;
        padding: 8px 12px;
        position: relative;

        >a {
            color: inherit;
            position: absolute;
            right: 6px;
        }

        &.tg-message-success {
            border: 1px solid #e1f3d8;
            background: #f0f9eb;
            color: $success;
        }

        &.tg-message-message {
            border: 1px solid #e9e9eb;
            background: #f4f4f5;
            color: #888;
        }

        &.tg-message-warning {
            border: 1px solid #faecd8;
            background: #fdf6ec;
            color: #e6a23c;
        }

        &.tg-message-error {
            border: 1px solid #fdf6ec;
            background: #fef0f0;
            color: $danger;
        }

        &.in {
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
        }

        @keyframes shake {

            0% {
                opacity: 0;
                transform: translateY(-80px);
            }

            100% {}


        }
    }
}
</style>