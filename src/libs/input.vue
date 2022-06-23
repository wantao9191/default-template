<template>
    <div class="tg-input" :class="`tg-input-${size}`">
        <input :type="type" v-model="inputValue" @input="onInput" :disabled="disabled">
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    props: {
        type: { type: String, default: 'text' },
        value: { type: String, default: '' },
        size: { type: String, default: 'small' },
        disabled: { type: Boolean, default: false }
    },
    setup(props, context) {
        const inputValue = ref(props.value)
        const onInput = () => {
            context.emit('update:value', inputValue.value)
        }
        return { inputValue, onInput }
    },
}
</script>
<style lang="scss" scoped>
.tg-input {
    border: 1px solid #ddd;
    border-radius: 4px;

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
}
</style>