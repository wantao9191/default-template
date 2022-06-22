<template>
    <i class="iconfont" :class="`icon-${icon}`" :style="{ 'font-size': size + 'px' }"></i>
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
    vertical-align: middle;
    color: inherit;
}
</style>