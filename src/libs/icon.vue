<template>
        <i class="iconfont" :class="`icon-${icon}`" :style="{ 'font-size': size + 'px' }"></i>
        <slot></slot>
</template>
<script>
export default {
    props: {
        icon: { type: String, default: '' },
        size: { type: String, default: '16' },
    },
    setup() {

    },
}
</script>
<style lang="scss" scoped>
i {
    vertical-align: bottom;
    color: inherit;
}
</style>