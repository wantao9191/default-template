<template>
    <div class="tg-messagebox-box" @click="close">
        <div class="tg-messagebox-wrap" :class="[`tg-message-${props.align}`]" @click.stop>
            <header>
                {{ props.title }}
                <tg-icon icon="tg-close" class="close" size="24" @click="close"></tg-icon>
            </header>
            <main>
                {{ props.content }}
                <tg-input v-model:value="inputValue" :placeholder="props.inputPlaceholder" @input="emitValue"
                    size="mini" style="margin:12px 0" v-if="props.type === 'prompt'" />
                <div class="is-error" v-if="props.isError">{{ props.errorMessage }}</div>
            </main>
            <footer>
                <tg-button size="mini" @click="cancel" :loading="props.cancelLoading" v-if="props.type != 'alert'">{{
                        props.cancelButtonText
                }}
                </tg-button>
                <tg-button size="mini" type="primary" @click="confirm" :loading="props.confirmLoading">
                    {{ props.confirmButtonText }}</tg-button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import { ref, toRef } from "vue";
import tgButton from "../button.vue";
import tgIcon from "../icon.vue";
import tgInput from "../input.vue";
const props = defineProps({
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    cancelButtonText: { type: String, default: '取消' },
    confirmButtonText: { type: String, default: '确认' },
    inputValue: { type: String, default: '' },
    inputPlaceholder: { type: String, default: '' },
    align: { type: String, default: 'left' },
    type: String,
    errorMessage: String,
    isError: Boolean,
    cancelLoading: Boolean,
    confirmLoading: Boolean,
})
const inputValue = ref(props.inputValue)
const emits = defineEmits(['confirm', 'cancel', 'close', 'update:inputValue'])
const confirm = () => {
    emits('confirm')
}
const close = () => {
    emits('close')
}
const cancel = () => {
    emits('cancel')
}
const emitValue = value => {
    emits('update:inputValue', value)
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
        &.tg-message-center {
            text-align: center;
            footer {
                text-align: center;
            }
        }
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
            position: relative;

            .is-error {
                font-size: 12px;
                color: $danger;
                position: absolute;
                bottom: 6px;
                left: 12px;
            }
        }

        footer {
            padding: 0 12px 12px;
            text-align: right;
        }
    }
}
</style>