<template>
    <div class="tg-date-picker">
        <tg-input class="tg-date-input" v-model:value="propValue" :placeholder="placeholder" :size="size"
            @focus="onFocus" :disabled="disabled" @blur="onBlur" prefixIcon='calendar' ref="inputRef">
            <template #suffixIcon>
                <tg-icon :icon="icon" class="arrow" @click="onToggle"></tg-icon>
                <tg-icon icon="tg-close-circle-out" class="clear" @click="onClear"></tg-icon>
            </template>
        </tg-input>
        <div class="tg-picker-dropdown shadow" v-if="visible">
            <div class="picker-tools"  @mousedown.prevent>
                <span class="tool-methods">
                    <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round"></tg-icon>
                    <tg-icon icon="tg-arrow-back" size="20" class="arrow-round"></tg-icon>
                </span>
                <div class="tools-name">
                    <span>{{ year }}年</span>
                    <span>{{ month }}月</span>
                </div>
                <span class="tool-methods">
                    <tg-icon icon="tg-arrow-forward" size="20" class="arrow-round"></tg-icon>
                    <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round"></tg-icon>
                </span>
            </div>
            <div class="picker-content">
                <div class="picker-item" v-for="(w, i) in weeks" :key="i">
                    <div class="picker-header">
                        <span>{{ w.label }}</span>
                    </div>
                    <div class="picker-day" :class="{ 'out-day': d.month != month }" v-for="(d, n) in w.days" :key="n"  @mousedown.prevent
                        @click="onDayClick(d)">
                        <span :class="{ active: propValue === `${d.year}-${d.month}-${d.day}` }">{{ d.day }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, reactive, } from "vue"
import datePicker from './datePicker.js'
const props = defineProps({
    value: { type: String, default: '' },
    placeholder: { type: String, default: '请选择' },
    size: { type: String, default: 'small' },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
})
const inputRef = ref('')
const emit = defineEmits(['update:value', 'change'])
const visible = ref(false)
const propValue = ref(props.value)
const date = new Date()
const year = ref(date.getFullYear())
const month = ref(date.getMonth() + 1)
const day = date.getDate()
const days = new Date(year.value, month.value, 0).getDate()
const weeks = reactive(new datePicker({ day: days, year: year.value, month: month.value }).calendar)
const onFocus = () => {
    visible.value = true
}
const onClear = () => {
    emit('update:value', '')
    emit('change', '')
    propValue.value = ''
}
const onBlur = () => {
    visible.value = false
}
const onToggle = () => {
    if (props.disabled) return
    visible.value = !visible.value
}
const onDayClick = d => {
    propValue.value = `${d.year}-${d.month}-${d.day}`
    emit('update:value', propValue.value)
    emit('change', propValue.value)
    inputRef.value.blur()
    console.log(inputRef)
}
const icon = computed(() => visible.value ? 'tg-arrow-up' : 'tg-arrow-down')
</script>
<style lang="scss" scoped>
.tg-date-picker {
    display: inline-block;
    position: relative;

    .clear {
        display: none;
    }

    .tg-date-input:hover {
        .arrow {
            display: none;
        }

        .clear {
            display: inline;
        }
    }

    .tg-picker-dropdown {
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        background: #fff;
        z-index: 9999;
        width: 320px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 6px 0;

        .picker-tools {
            padding: 6px 12px;
            display: flex;
            justify-content: space-between;
            color: #888;

            .tools-name {
                >span {
                    margin: 0 12px;
                    cursor: pointer;
                }
            }

            .arrow-round {
                cursor: pointer;
            }
        }

        .picker-content {
            display: flex;

            .picker-item {
                flex: 1;
                text-align: center;
                font-size: 13px;

                .picker-header {
                    padding: 12px 6px;
                    border-bottom: 1px solid #ddd;
                    margin-bottom: 6px;
                }

                .picker-day {
                    height: 40px;
                    line-height: 40px;
                    display: block;
                    cursor: pointer;

                    &:hover {
                        color: $primary;
                    }

                    &.out-day {
                        color: #888;
                    }

                    .active {
                        background: $primary;
                        color: #fff;
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        border-radius: 50%;
                    }
                }
            }

        }

    }
}
</style>