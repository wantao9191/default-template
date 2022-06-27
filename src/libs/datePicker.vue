<template>
    <div class="tg-date-picker">
        <tg-input class="tg-date-input" v-model:value="propValueComputed" :placeholder="placeholder" :size="size"
            @focus="onFocus" :disabled="disabled" :readonly="readonly" @blur="onBlur" prefixIcon='calendar'
            ref="inputRef">
            <template #suffixIcon>
                <tg-icon :icon="icon" class="arrow" @click="onToggle"></tg-icon>
                <tg-icon icon="tg-close-circle-out" class="clear" @click="onClear"></tg-icon>
            </template>
        </tg-input>
        <div class="tg-picker-dropdown shadow" v-if="visible">
            <div class="picker-wrap" v-if="propType === 'date'">
                <div class="picker-tools" @mousedown.prevent>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round" @click="prev('year')">
                        </tg-icon>
                        <tg-icon icon="tg-arrow-back" class="arrow-round" @click="prev('month')"></tg-icon>
                    </span>
                    <div class="tools-name">
                        <span @click="toggleType('year')">{{ year }}年</span>
                        <span @click="toggleType('month')">{{ month < 10 ? '0' + month : month }}月</span>
                    </div>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-forward" class="arrow-round" @click="next('month')"></tg-icon>
                        <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round" @click="next('year')">
                        </tg-icon>
                    </span>
                </div>
                <div class="picker-content" @mousedown.prevent>
                    <div class="picker-item" v-for="(w, i) in weeks" :key="i">
                        <div class="picker-header">
                            <span>{{ w.label }}</span>
                        </div>
                        <div class="picker-day" :class="{ 'out-day': d.month != month }" v-for="(d, n) in w.days"
                            :key="n" @click="onDayClick(d)">
                            <span :class="{
                                active: propValueComputed === d.value,
                                'is-check': d.day === today.day && today.year === d.year && today.month === d.month
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
                        <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round" @click="prev('year')">
                        </tg-icon>
                    </span>
                    <div class="tools-name">
                        <span @click="toggleType('year')">{{ year }}年</span>
                    </div>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round" @click="next('year')">
                        </tg-icon>
                    </span>
                </div>
                <div class="month-content">
                    <div v-for="m in 12" class="month-item" :key="m" @click="onMonthClick(m)">
                        <span :class="{
                            active: month === m && today.selectYear == year,
                            'is-check': today.year === year && today.month === m
                        }">{{ m }}月</span>
                    </div>
                </div>
            </div>
            <div class="month-wrap" v-if="propType === 'year'" @mousedown.prevent>
                <div class="picker-tools">
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-back" size="20" class="arrow-round" @click="prev('year')">
                        </tg-icon>
                    </span>
                    <div class="tools-name">
                        <span>{{ years.label }}</span>
                    </div>
                    <span class="tool-methods">
                        <tg-icon icon="tg-arrow-round-forw" size="20" class="arrow-round" @click="next('year')">
                        </tg-icon>
                    </span>
                </div>
                <div class="month-content">
                    <div v-for="m in years.arrs" class="month-item" :key="m" @click="onYearClick(m)">
                        <span :class="{
                            active: today.selectYear == m,
                            'is-check': today.year === m
                        }">{{ m }}年</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, reactive, toRef, watch, } from "vue"
import datePicker from './datePicker.js'
const props = defineProps({
    value: { type: String, default: '' },
    type: { type: String, default: 'date' },
    placeholder: { type: String, default: '请选择' },
    size: { type: String, default: 'small' },
    disabled: { type: Boolean, default: false },
    format: { type: String, default: 'YYYY-MM-DD' },
    readonly: { type: Boolean, default: false }
})
const inputRef = ref('')
const emit = defineEmits(['update:value', 'change'])
const visible = ref(false)
const propValueComputed = computed({
    get: () => props.value,
    set: (param) => param
})
const propType = ref(props.type)
// () => props.value ? new Date(props.value) : new Date()
const date = ref(new Date())
const year = ref(date.value.getFullYear())
const month = ref(date.value.getMonth() + 1)
const today = reactive({
    year: date.value.getFullYear(),
    month: date.value.getMonth() + 1,
    day: date.value.getDate(),
    selectYear: ''
})
watch(propValueComputed, (newDate, b) => {
    if (newDate) {
        date.value = new Date(newDate)
        year.value = date.value.getFullYear()
        month.value = date.value.getMonth() + 1
    }
})
const reset = () => {
    year.value = date.value.getFullYear()
    month.value = date.value.getMonth() + 1
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
const onDayClick = (d, close = true) => {
    // props.value = d.value
    today.selectYear = year.value
    emit('update:value', d.value)
    emit('change', d.value)
    if (close) inputRef.value.blur()
}
const onMonthClick = (m, close = true) => {
    month.value = m
    if (props.type === 'month') {
        onDayClick({
            value: timeFormat({ year: year.value, month: month.value },
                ['YYYY-MM', 'YYYY-M'].includes(props.format) ? props.format : 'YYYY-MM')
        }, close)
        return
    }
    if (close) propType.value = 'date'
    onDayClick({ value: timeFormat({ year: year.value, month: month.value, day: 1 }, props.format) }, false)

}
const onYearClick = m => {
    year.value = m
    if (props.type === 'year') {
        onDayClick({ value: String(m) })
    } else {
        propType.value = 'month'
        onMonthClick(month.value, false)
    }

}
const prev = (type) => {
    if (type === 'month') {
        if (month.value > 1) {
            month.value--
        } else {
            year.value--
            month.value = 12
        }
    }
    else {
        if (propType.value === 'year') {
            year.value = year.value - year.value % 1000 % 10 - 1
        } else {
            year.value--
        }

    }
}
const next = type => {
    if (type === 'month') {
        if (month.value < 12) {
            month.value++
        } else {
            month.value = 1
            year.value++
        }
    } else {
        if (propType.value === 'year') {
            year.value = year.value - year.value % 1000 % 10 + 10
        } else {
            year.value++
        }

    }
}
const toggleType = type => {
    propType.value = type
}
const icon = computed(() => visible.value ? 'tg-arrow-up' : 'tg-arrow-down')
const weeks = computed(() => reactive(new datePicker({ year: year.value, month: month.value, format: props.format }).calendar))
const years = computed(() => {
    let arrs = []
    let min = year.value - year.value % 1000 % 10
    let max = min + 9
    for (let i = min; i < max + 1; i++) {
        arrs.push(i)
    }
    return { label: `${min}-${max}`, arrs }
})
function timeFormat(time, format = 'YYYY-MM-DD') {
    const acts = {
        'YYYY-MM-DD': () => `${time.year}-${time.month < 10 ? '0' + time.month : time.month}-${time.day < 10 ? '0' + time.day : time.day}`,
        'YYYY-M-D': () => `${time.year}-${time.month}-${time.day}`,
        'YYYY-MM': () => `${time.year}-${time.month < 10 ? '0' + time.month : time.month}`,
        'YYYY-M': () => `${time.year}-${time.month}`
    }
    const actiton = acts[format] || acts['YYYY-MM-DD']
    return actiton.call()
}
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