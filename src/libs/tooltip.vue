<template>
    <div class="tg-tooltip"
        :class="[`tg-tooltip-${props.placement}`, `tg-tooltip-${props.theme}`, `tg-tooltip-${props.trigger}`]"
        @click.stop="onClick">
        <div class="tg-tooltip-flow" v-show="visible">
            <div class="tg-tooltip-flow-wrap">
                <slot name="content" v-if="slots.content"></slot>
                <span v-else>{{ props.content }}</span>
                <span class="arrow-light arrow-down arrow" v-if="props.theme === 'light'"></span>
                <span class="arrow-down arrow"></span>
            </div>
        </div>
        <slot class="tg-tooltip-content"></slot>
    </div>
</template>
<script setup>
import { ref, toRef, useSlots } from "vue"
const props = defineProps({
    content: { type: String, default: '' },
    theme: { type: String, default: 'dark' },
    placement: { type: String, default: 'top' },
    trigger: { type: String, default: 'hover' }
})
const slots = useSlots()
const visible = ref(props.trigger === 'hover' ? true : false)
const onClick = () => {
    if (props.trigger === 'click') {
        visible.value = !visible.value
    }
}
document.body.onclick = e=>{
    visible.value = false
}
</script>
<style lang="scss" scoped>
$bg: rgba(0, 0, 0, .8);

.tg-tooltip {
    display: inline-flex;
    position: relative;
    >.tg-tooltip-flow {
        position: absolute;
        white-space: nowrap;
        padding: 6px 12px;
        background: $bg;
        color: #fff;
        border-radius: 6px;
        font-size: 14px;
        z-index: 9999;
        >.tg-tooltip-flow-wrap {
            position: relative;

        }
    }

    &.tg-tooltip-hover {
        >.tg-tooltip-flow {
            display: none;
        }
    }

    .arrow {
        position: absolute;
        width: 0;
        height: 0;
        z-index: inherit;
    }

    &.tg-tooltip-top {
        >.tg-tooltip-flow {
            top: 0;
            left: 50%;
            transform: translate(-50%, calc(-100% - 12px) );

            .arrow {
                bottom: -12px;
                left: 50%;
                transform: translateX(-50%);

                &.arrow-down {
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid $bg;
                }
            }
        }
    }

    &.tg-tooltip-right {
        >.tg-tooltip-flow {
            left: calc(100% + 16px);
            top: 50%;
            transform: translateY(-50%);

            .arrow {
                left: -18px;
                top: 50%;
                transform: translateY(-50%);

                &.arrow-down {
                    border-top: 6px solid transparent;
                    border-right: 6px solid $bg;
                    border-bottom: 6px solid transparent;
                }
            }
        }

    }

    &.tg-tooltip-bottom {
        >.tg-tooltip-flow {
            top: calc(100% + 12px);
            left: 50%;
            transform: translateX(-50%);

            .arrow {
                top: -12px;
                left: 50%;
                transform: translateX(-50%);

                &.arrow-down {
                    border-left: 6px solid transparent;
                    border-bottom: 6px solid $bg;
                    border-right: 6px solid transparent;
                }
            }
        }

    }

    &.tg-tooltip-left {
        >.tg-tooltip-flow {
            right: calc(100% + 16px);
            top: 50%;
            transform: translateY(-50%);
            .arrow {
                right: -18px;
                top: 50%;
                transform: translateY(-50%);

                &.arrow-down {
                    border-top: 6px solid transparent;
                    border-left: 6px solid $bg;
                    border-bottom: 6px solid transparent;
                }
            }
        }

    }

    &.tg-tooltip-hover {
        &:hover {
            >.tg-tooltip-flow {
                display: inline-block;

            }
        }
    }


    &.tg-tooltip-light {
        >.tg-tooltip-flow {
            background: #fff;
            color: #333;
            // border: 1px solid #ddd;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
        }

        &.tg-tooltip-top {
            >.tg-tooltip-flow {
                .arrow-down {
                    border-top: 6px solid #fff;

                    &.arrow-light {
                        border-top-color: #666;
                        z-index: -1
                    }
                }
            }
        }

        &.tg-tooltip-right {
            >.tg-tooltip-flow {
                .arrow-down {
                    border-right: 6px solid #fff;

                    &.arrow-light {
                        border-right-color: #333;
                        z-index: 0
                    }
                }
            }

        }

        &.tg-tooltip-bottom {
            >.tg-tooltip-flow {
                .arrow-down {
                    border-bottom: 6px solid #fff;

                    &.arrow-light {
                        border-bottom-color: #333;
                        z-index: 0
                    }
                }
            }

        }

        &.tg-tooltip-left {
            >.tg-tooltip-flow {
                .arrow-down {
                    border-left: 6px solid #fff;

                    &.arrow-light {
                        border-left-color: #333;
                        z-index: 0
                    }
                }
            }

        }
    }
}
</style>