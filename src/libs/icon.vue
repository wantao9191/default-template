<template>
    <span class="tg-icon">
        <i class="iconfont" :class="`icon-${icon}`" :style="{ 'font-size': size + 'px',color }"></i>
        <slot></slot>
    </span>
</template>
<script>
export default {
    props: {
        icon: { type: String, default: '' },
        size: { type: String, default: '16' },
        color:{type:String,default:''}
    },
    setup() {

    },
}
</script>
<style lang="scss" scoped>
i {
    color: inherit;
}
</style>