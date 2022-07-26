<template>
    <div class="tg-date-picker" :class="{'tg-date-disabled':disabled}">
        <tg-input class="tg-date-input" v-model:value="bindValue" :placeholder="placeholder" :size="size"
            @focus="onFocus" :disabled="disabled" :readonly="readonly" @blur="onBlur" prefixIcon='calendar'
            ref="inputRef">
            <template #suffixIcon>
                <tg-icon :icon="icon" class="arrow" @click="onToggle"></tg-icon>
                <tg-icon icon="tg-close-circle-out" class="clear" @click="onClear"></tg-icon>
            </template>
        </tg-input>
        <div class="tg-picker-dropdown shadow" :class="{ 'tg-picker-date-dropdown': type === 'date' }" v-if="visible">
            <div class="picker-wrap" v-if="propType === 'date'">
                <div class="picker-tools" @mousedown.prevent>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round" @click="onPrev('year')">
                        </tg-icon>
                        <tg-icon icon="tg-arrow-back" class="arrow-round" @click="onPrev('month')"></tg-icon>
                    </span>
                    <div class="tools-name">
                        <span @click="toggleType('year')">{{ calendar.year }}年</span>
                        <span @click="toggleType('month')">{{ calendar.month < 10 ? '0' + calendar.month :
                                calendar.month
                        }}月</span>
                    </div>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-forward" class="arrow-round" @click="onNext('month')"></tg-icon>
                        <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round" @click="onNext('year')">
                        </tg-icon>
                    </span>
                </div>
                <div class="picker-content" @mousedown.prevent>
                    <div class="picker-item" v-for="(w, i) in calendar.calendars" :key="i">
                        <div class="picker-header">
                            <span>{{ w.label }}</span>
                        </div>
                        <!-- :class="{ 'out-day': d.month != month }" -->
                        <div class="picker-day" v-for="(d, n) in w.days" :key="n" @click="onDayClick(d)">
                            <span :class="{
                                active: [d.value, d.timestamp].includes(bindValue),
                                'is-check': d.isCheck
                            }">
                                {{ d.day }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="month-wrap" v-if="propType === 'month'" @mousedown.prevent>
                <div class="picker-tools">
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round" @click="onPrev('year')">
                        </tg-icon>
                    </span>
                    <div class="tools-name">
                        <span @click="toggleType('year')">{{ calendar.year }}年</span>
                    </div>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round" @click="onNext('year')">
                        </tg-icon>
                    </span>
                </div>
                <div class="month-content">
                    <div v-for="m in 12" class="month-item" :key="m" @click="onMonthClick(m)">
                        <!-- -->
                        <span :class="{
                            active: calendar.month === m && calendar.year == calendar.year,
                            'is-check': calendar.year === calendar.year && calendar.month === m
                        }">{{ m }}月</span>
                    </div>
                </div>
            </div>
            <div class="month-wrap" v-if="propType === 'year'" @mousedown.prevent>
                <div class="picker-tools">
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round" @click="onPrev('year')">
                        </tg-icon>
                    </span>
                    <div class="tools-name">
                        <span>{{ years.label }}</span>
                    </div>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round" @click="onNext('year')">
                        </tg-icon>
                    </span>
                </div>
                <div class="month-content">
                    <div v-for="m in years.arrs" class="month-item" :key="m" @click="onYearClick(m)">
                        <span :class="{
                            active: calendar.year == m || bindValue == m,
                            'is-check': calendar.year === m
                        }">{{ m }}年</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, toRef, reactive } from "vue"
import datePicker from './datePicker.js'
import { formatTime, config } from "./moment";
const props = defineProps({
    value: { type: [String, Number], default: '' },
    type: { type: String, default: 'date' },
    placeholder: { type: String, default: '请选择' },
    size: { type: String, default: 'small' },
    disabled: { type: Boolean, default: false },
    format: { type: String, default: '' },
    readonly: { type: Boolean, default: false }
})
const emit = defineEmits(['update:value', 'change'])
const value = reactive({ value: toRef(props, 'value'), updateValue: '' })
let labelFormatOptions = config[props.type]
let labelFormat = labelFormatOptions && labelFormatOptions.find(l => l === props.format)
labelFormat = labelFormat || labelFormatOptions[0]
const bindValue = computed({
    get: () => {
        if (props.value) {
            let obj = { date: formatTime(new Date(props.value), labelFormat), month: formatTime(new Date(props.value), labelFormat), year: new Date(props.value).getFullYear() }
            return obj[props.type]
        } else {
            return ''
        }
    },
    set: param => param
})
const propType = ref(props.type)
const visible = ref(false)
const inputRef = ref('')
const reset = () => {
    const date = new Date(value.value)
    console.log(value.value)
    calendar.value.year = date.getFullYear()
    calendar.value.month = date.getMonth() + 1
    propType.value = props.type
}
const onFocus = () => {
    visible.value = true
}
const onClear = () => {
    emit('update:value', '')
    emit('change', '')
    // props.value = ''
    reset()
}
const onBlur = () => {
    visible.value = false
    reset()
}
const onToggle = () => {
    if (props.disabled) return
    visible.value = !visible.value
}
// 上一年/上个月
const onPrev = type => {
    const dateValue = value.updateValue || value.value
    const date = dateValue ? new Date(dateValue) : new Date()
    if (type === 'year') {
        if (propType.value === 'year') {
            let min = calendar.value.year - calendar.value.year % 1000 % 10 - 1
            value.updateValue = date.setFullYear(min)
        } else {
            value.updateValue = date.setFullYear(date.getFullYear() - 1)
        }

    } else {
        value.updateValue = date.setMonth(date.getMonth() - 1)
    }

}
// 下一年/下个月
const onNext = type => {
    const dateValue = value.updateValue || value.value
    const date = dateValue ? new Date(dateValue) : new Date()
    if (type === 'year') {
        if (propType.value === 'year') {
            let max = calendar.value.year - calendar.value.year % 1000 % 10 + 10
            value.updateValue = date.setFullYear(max)
        } else {
            value.updateValue = date.setFullYear(date.getFullYear() + 1)
        }

    } else {
        value.updateValue = date.setMonth(date.getMonth() + 1)
    }
}
// 日期选择
const onDayClick = e => {
    emit('update:value', e.value)
    emit('change', e.value)
    inputRef.value.blur()
}
// 月份选择
const onMonthClick = e => {
    const dateValue = value.updateValue || value.value
    const date = dateValue ? new Date(dateValue) : new Date()
    date.setMonth(e - 1)
    date.setDate(1)
    emit('update:value', date.getTime())
    emit('change', date.getTime())
    if (props.type === 'month') {
        inputRef.value.blur()
        return
    }
    propType.value = 'date'
}
// 年份选择
const onYearClick = e => {
    const dateValue = value.updateValue || value.value
    const date = dateValue ? new Date(dateValue) : new Date()
    date.setFullYear(e)
    emit('update:value', date.getTime())
    emit('change', date.getTime())
    if (props.type === 'year') {
        inputRef.value.blur()
        return
    }
    propType.value = 'month'
}
const toggleType = (type) => {
    propType.value = type
}
const calendar = computed(() => {
    const dateValue = value.updateValue || value.value
    const date = dateValue ? new Date(dateValue) : new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    return { year, month, calendars: new datePicker({ year, month, format: props.format, type: props.type }).calendar }
})
const years = computed(() => {
    let yaerValue = calendar.value.year
    console.log(111111)
    let arrs = []
    let min = yaerValue - yaerValue % 1000 % 10
    let max = min + 9
    for (let i = min; i < max + 1; i++) {
        arrs.push(i)
    }
    return { label: `${min}-${max}`, arrs }
})
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
    &.tg-date-disabled {
       .tg-date-input:hover {
        .arrow {
            display: inline;
        }

        .clear {
            display: none;
        }
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

        &.tg-picker-date-dropdown {
            height: 320px;
        }

        .picker-wrap {
            height: 320px;

            .picker-content {
                display: flex;

                .picker-item {
                    flex: 1;
                    text-align: center;
                    font-size: 13px;

                    .picker-header {
                        padding: 6px;
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

        .month-wrap {

            .month-content {
                display: flex;
                flex-wrap: wrap;

                >.month-item {
                    width: 25%;
                    text-align: center;
                    padding: 24px 0;
                    cursor: pointer;
                    font-size: 13px;

                    >span {
                        &:hover {
                            color: $primary;
                        }

                        &.active {
                            font-weight: bold;
                            color: $primary;
                        }
                    }

                }
            }

        }

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

        .is-check {
            color: $primary;
        }
    }
}
</style>