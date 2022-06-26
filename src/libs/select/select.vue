<template>
    <div class="tg-select" :class="[`tg-select-${size}`, { hasClear: clearable }]">
        <tg-input class="tg-select-input" v-model:value="value" :placeholder="placeholder" :size="size" @focus="onFocus"
            :disabled="disabled" @blur="onBlur" readonly v-if="!filterable">
            <template #suffixIcon>
                <tg-icon :icon="icon" class="arrow" @click="onToggle"></tg-icon>
                <tg-icon icon="tg-close-circle-out" class="clear" v-if="clearable" @click="onClear"></tg-icon>
            </template>
        </tg-input>
        <tg-input class="tg-select-input" v-model:value="propsValue" :placeholder="options.data || '请选择'" :size="size"
            @focus="onFocus" @blur="onBlur1" @input="onInput" v-else>
        </tg-input>
        <div class="tg-select-dropdown shadow" v-if="visible">
            <slot></slot>
            <div v-if="noData" class="tg-nodata" @mousedown.prevent>暂无数据</div>
        </div>
    </div>
</template>
<script setup>
import { computed, provide, reactive, ref, useSlots } from "vue"
const props = defineProps({
    value: { type: [String, Number, Array], default: '' },
    size: { type: String, default: 'small' },
    placeholder: { type: String, default: '请选择' },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    filterable: { type: Boolean, default: false }
})
const options = reactive({ size: props.size, data: props.value, filterValue: '', })
const propsValue = ref('')
provide('options', options)
const emit = defineEmits(['update:value', 'change'])
const visible = ref(false)
const noData = ref(false)
const slots = useSlots()
const onFocus = () => {
    visible.value = true
}

const update = (e) => {
    options.data = e
    emit('update:value', e)
    emit('change', 'e')
}
const onClear = () => {
    options.data = ''
    emit('update:value', '')
    emit('change', '')
}
const onBlur = () => {
    visible.value = false
}
const onBlur1 = () => {
    propsValue.value = ''
    options.filterValue = ''
    noData.value = false
    visible.value = false
}
const onToggle = () => {
    if (props.disabled) return
    visible.value = !visible.value
}
const onInput = e => {
    if (props.filterable) {
        let maps = slots.default().map(u => {
            return u.props.label || u.props.value
        }).filter(u => {
            return u.includes(e) || u.includes(e)
        })
        noData.value = maps.length === 0
        options.filterValue = e
    }

}
provide('update', update)
const icon = computed(() => visible.value ? 'tg-arrow-up' : 'tg-arrow-down')
</script>
<style lang="scss" scoped>
.tg-select {
    display: inline-block;
    position: relative;

    .clear {
        display: none;
    }

    &.hasClear {
        .tg-select-input:hover {
            .arrow {
                display: none;
            }

            .clear {
                display: inline;
            }
        }
    }


    .tg-select-mini {
        font-size: 12px;
    }

    .tg-select-small {
        font-size: 13px;
    }

    .tg-select-large {
        font-size: 15px;
    }

    .tg-select-dropdown {
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        background: #fff;
        z-index: 9999;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 6px 0;
        max-height: 140px;
        overflow-y: auto;
        .tg-nodata {
            font-size: 13px;
            color: #666;
            text-align: center;
            padding: 12px;
        }
    }
}
</style>