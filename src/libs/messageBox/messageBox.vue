<template>
    <div class="tg-messagebox-box" @click="close">
        <div class="tg-messagebox-wrap" @click.stop>
            <header>
                {{ props.title }}
                <tg-icon icon="tg-close" class="close" size="24" @click="close"></tg-icon>
            </header>
            <main>{{ props.content }}</main>
            <footer>
                <tg-button size="mini" @click="cancel" :loading="props.cancelLoading">{{ props.cancelButtonText }}
                </tg-button>
                <tg-button size="mini" type="primary" @click="confirm" :loadin="props.confirmLoading">
                 {{props.confirmLoading}}   {{ props.confirmButtonText }}</tg-button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import tgButton from "../button.vue";
import tgIcon from "../icon.vue";
const props = defineProps({
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    cancelButtonText: { type: String, default: '取消' },
    confirmButtonText: { type: String, default: '确认' },
    cancelLoading: Boolean,
    confirmLoading: Boolean
})
const emits = defineEmits(['confirm', 'cancel', 'close'])
const confirm = () => {
    emits('confirm')
}
const close = () => {
    emits('close')
}
const cancel = () => {
    emits('cancel')
}
</script>
<style lang="scss" scoped>
.tg-messagebox-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .45);
    z-index: 1000;

    .tg-messagebox-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 6px;
        width: 320px;

        header {
            padding: 12px;
            position: relative;

            .close {
                cursor: pointer;
                color: #999;
                position: absolute;
                right: 6px;
                top: 6px;
            }
        }

        main {
            padding: 0 12px 12px;
            font-size: 13px;
            color: #666;
        }

        footer {
            padding: 0 12px 12px;
            text-align: right;
        }
    }
}
</style>