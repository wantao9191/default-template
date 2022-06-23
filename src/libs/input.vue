<template>
    <div class="tg-input" :class="`tg-input-${size}`">
        <input :type="type" v-model="inputValue" @input="onInput" :disabled="disabled" :placeholder="placeholder">
        <span class="clearable" v-show="clearable&&inputValue" @click="onClear">
            <tg-icon icon="tg-close-circle-out" size="18"></tg-icon>
        </span>

    </div>
</template>
<script>
import { ref } from "vue";
export default {
    props: {
        type: { type: String, default: 'text' },
        value: { type: String, default: '' },
        size: { type: String, default: 'small' },
        disabled: { type: Boolean, default: false },
        placeholder: { type: String, default: '请输入' },
        clearable: { type: Boolean, default: false }
    },
    setup(props, context) {
        const inputValue = ref(props.value)
        const onInput = () => {
            context.emit('update:value', inputValue.value)
        }
        const onClear = ()=>{
            inputValue.value = ''
            context.emit('update:value', inputValue.value)
        }
        return { inputValue, onInput ,onClear}
    },
}
</script>
<style lang="scss" scoped>
.tg-input {
    border: 1px solid #ddd;
    border-radius: 4px;
    position: relative;

    input {
        border: none;
        width: 100%;
        border-radius: 4px;

        &:focus {
            outline: 1px solid $primary;
        }

        &:disabled {
            cursor: not-allowed;
            user-select: none;
        }
    }

    &.tg-input-mini {
        input {
            padding: $mini;
            font-size: $fontMini;
        }
    }

    &.tg-input-small {
        input {
            padding: $small;
            font-size: $fontSmall;
        }
    }

    &.tg-input-large {
        input {
            padding: $large;
            font-size: $fontLarge;
        }
    }

    .clearable {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
        font-weight: bolder;
        cursor: pointer;
    }
}
</style>