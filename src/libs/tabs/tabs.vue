<template>
    <div class="tg-tabs" :class="[`${props.type}`]" ref="content">
        <div class="tg-tabs-header" :class="{ 'over-wrap': headerWrapWidth > headerWidth }" ref="header">
            <a href="javaScript:;" class="arrow prev" @click="prev">
                <tg-icon icon="tg-arrow-back"></tg-icon>
            </a>
            <div class="tg-tabs-header-wrap"
                :style="{ width: headerWrapWidth ? headerWrapWidth + 'px' : 'auto', transform: `translateX(${headerTransform}px)`, 'margin': headerWrapWidth > headerWidth ? '0 20px' : '0' }">
                <span v-for="(l, i) in labels" class="tg-tabs-header-label" :key="i"
                    :class="{ active: props.value === l.name }" @click="onClick(l)">{{
                            l.label
                    }}</span>
                <div class="tabs-active-line" v-show="!props.type" :style="activePos"></div>
            </div>
            <a href="javaScript:;" class="arrow next" @click="next">
                <tg-icon icon="tg-arrow-forward"></tg-icon>
            </a>
        </div>
        <div class="tg-tabs-main">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, provide, reactive, ref, useSlots } from 'vue';
const props = defineProps({ value: { type: [String, Number] }, type: { type: String, default: '' }, beforeLeave: { type: Function } })
const slots: any = useSlots()
const emits = defineEmits(['update:value', 'tabClick'])
const header: any = ref('')
const content: any = ref('')
const headerTransform = ref(0)
const labels = reactive(slots.default().map(m => {
    let label
    if (m.children && m.children.label) {
        label = m.children.label()[0].children
    }
    return { label, ...m.props }
}))
const headerWrapWidth: any = computed(() => {
    let width = 0
    const nodes = header.value && header.value.querySelectorAll('.tg-tabs-header-label')
    nodes && nodes.forEach(n => {
        width += n.offsetWidth
    })
    if (content && width > content.value.offsetWidth) {
        return width + 40
    }
    return ''
})
const headerWidth = computed(() => {
    return header.value && header.value.offsetWidth
})
const activePos = computed(() => {
    const index = labels.findIndex(l => l.name === props.value)
    let activeNode = header.value && header.value.querySelectorAll('.tg-tabs-header-label')[index]
    return { width: activeNode.offsetWidth - 40 + 'px', transform: `translateX(${activeNode.offsetLeft + 20}px)` }
})

const onClick = (e) => {
    if (props.beforeLeave) {
        props.beforeLeave({ activeName: e.label, beforeName: labels.find(l=>l.name === props.value).label}, () => {
            emits('update:value', e.name)
            emits('tabClick', e)
        })
        return
    }
    emits('update:value', e.name)
    emits('tabClick', e)
}
const next = () => {
    let trans = headerTransform.value - headerWidth.value
    if (headerWrapWidth.value / Math.abs(trans) > 2) {
        headerTransform.value = trans
    } else {
        headerTransform.value = -(headerWrapWidth.value - headerWidth.value)
        console.log(headerTransform.value)
    }
}
const prev = () => {
    const trans = headerTransform.value + headerWidth.value
    headerTransform.value = trans > 0 ? 0 : trans
}
provide('value', computed(() => props.value))
</script>
<style lang="scss" scoped>
.tg-tabs {

    .tg-tabs-header {
        overflow: hidden;
        position: relative;

        .tg-tabs-header-wrap {
            position: relative;
            border-bottom: 2px solid #ddd;
            transition: transform .5s;

            >span {
                cursor: pointer;
                font-size: 12px;
                padding: 6px 20px;
                display: inline-block;
                color: #666;

                &.active {
                    color: $primary;
                }
            }

            >.tabs-active-line {
                transition: all .4s;
                position: absolute;
                bottom: -2px;
                height: 2.5px;
                background: $primary;
                width: 30px;
            }
        }

        .arrow {
            position: absolute;
            background: #fff;
            height: 100%;
            line-height: 2;
            top: 0;
            z-index: 9;
            display: none;

            &.next {
                right: 0;
            }
        }

        &.over-wrap {
            padding-right: 20px;

            .arrow {
                display: inline-block;
            }
        }
    }

    &.card {
        .tg-tabs-header {
            .tg-tabs-header-wrap {
                border: 1px solid #ddd;
                border-radius: 4px 4px 0 0;

                .tg-tabs-header-label {
                    &:not(:last-child) {
                        border-right: 1px solid #ddd;
                    }

                }
            }
        }
    }

    &.border-card {
        border: 1px solid #ddd;
        border-radius: 4px 4px 0 0;

        .tg-tabs-header {

            .tg-tabs-header-wrap {
                background: #f4f4f5;
                border-bottom: 1px solid #ddd;

                .tg-tabs-header-label {
                    &.active {
                        background: #fff;
                        border-bottom: 1px solid #fff;
                        position: relative;
                        margin-bottom: -1px;
                    }

                }
            }
        }
    }
}
</style>