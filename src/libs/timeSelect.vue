<template>
    <div class="time-select">
        <tg-input v-model:value="value" readonly :placeholder="props.placeholder" @focus="onFocus" @blur="onBlur"
            ref="input" @mouseleave="onMouseleave" @mouseover="onMouseover">
            <template v-slot:prefixIcon>
                <tg-icon icon="tg-alarm" color="#333"></tg-icon>
            </template>
            <template v-slot:suffixIcon>
                <tg-icon icon="tg-close-circle-out" v-if="isHover && value" @click="clear"></tg-icon>
                <tg-icon :icon="visible ? 'tg-arrow-up' : 'tg-arrow-down'" v-else></tg-icon>

            </template>
        </tg-input>
        <div v-if="visible" class="tg-select-dropdown shadow">
            <div class="tg-select-dropdown-wrap scroll" ref="drop">
                <ul>
                    <li v-for="(item, index) in list" :class="{ active: props.value === item }" :key="index"
                        @mousedown.prevent @click="onClick(item)">{{ item }}
                    </li>
                </ul>
                <span class="arrow-light arrow-down arrow"></span>
                <span class="arrow-down arrow"></span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, nextTick, reactive, ref } from "vue";
import TgInput from "./input.vue";
const props = defineProps({ value: { type: String, default: '' }, placeholder: { type: String, default: '选择时间' } })
const emits = defineEmits(['update:value', 'change'])
const value = computed(() => props.value)
const visible = ref(false)
const input = ref('')
const drop = ref('')
const isHover = ref(false)
let timeArrays = new Array(24).fill('').map((item, index) => (index < 10 ? '0' + index : index) + ':00');
const list = reactive(timeArrays)
const onClick = e => {
    emits('update:value', e)
    emits('change', e)
    input.value.blur()
}
const onFocus = () => {
    visible.value = true
    nextTick(() => {
        if (value.value) {
            drop.value.scrollTo(0, drop.value.querySelector('li.active').offsetTop)
        }
    })
}
const onBlur = () => {
    visible.value = false
}
const onMouseover = () => {
    isHover.value = true
}
const onMouseleave = () => {
    isHover.value = false
}
const clear = () => {
    emits('update:value', '')
    emits('change', '')
}
</script>
<style lang="scss" scoped>
.time-select {
    position: relative;
    width: 200px;

    >.tg-select-dropdown {
        position: absolute;
        background: #fff;
        width: 100%;
        z-index: 100;
        top: calc(100% + 12px);
        border-radius: 6px;

        >.tg-select-dropdown-wrap {
            padding: 6px 0;
            position: relative;
            font-size: 14px;
            height: 200px;
            overflow-y: auto;

            ul {
                >li {
                    padding: 6px 0 6px 12px;
                    color: #666;
                    letter-spacing: 1px;
                    cursor: pointer;
                    font-size: 12px;

                    &.active {
                        color: $primary;
                    }

                    &:hover {
                        background: #f5f7fa;
                    }
                }
            }

            .arrow {
                position: absolute;
                top: -12px;
                left: 50%;
                transform: translateX(-50%);

                &.arrow-down {
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 6px solid #fff;

                    &.arrow-light {
                        border-bottom-color: #666;
                        z-index: -1
                    }
                }
            }
        }

    }
}
</style>