<template>
    <div class="m-nav-content">
        <nav class="m-nav">
            <a href="javaScript:;" v-for="(l, i) in labels" :key="i" :class="{ active: active === l.label }"
                @click="onClick(l, i)">{{ l.label }}</a>
            <span class="border-pos" :style="{ top: activeTop+'px' }"></span>
        </nav>
    </div>
</template>
<script setup>
import { nextTick, reactive, ref } from "vue"
let labels = reactive([])
const active = ref('')
const activeTop = ref(0)
const init = () => {
    setTimeout(() => {
        const navs = document.querySelectorAll('.desc-title')
        for (let n of navs) {
            const { y } = n.getBoundingClientRect()
            labels.push({ label: n.innerText, y })
        }
        active.value = labels[0].label
    }, 100);
    nextTick(() => {
        document.querySelector('.router-main').onscroll = e => {
            const navs = document.querySelectorAll('.desc-title')
            for (let i = 0; i < navs.length; i++) {
                let n = navs[i]
                const { top } = n.getBoundingClientRect()
                if (top > 0 && top < 200) {
                    active.value = n.innerText
                    activeTop.value = i*22
                    console.log(i)
                }
            }

        }
    })
}
const onClick = (l, i) => {
    active.value = l.label
    activeTop.value = i*22
    document.querySelector('.router-main').scrollTo(0, document.querySelectorAll('.desc-title')[i].parentElement.parentElement.offsetTop)
}
init()
</script>
<style lang="scss" scoped>
.m-nav-content {
    padding: 12px;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    width: 200px;
    .m-nav {
        display: flex;
        flex-direction: column;
        position: relative;

        >a {
            padding-bottom: 6px;
            padding-left: 12px;
            font-size: 12px;
            color: #666;

            &.active {
                color: $primary ;
            }
        }

        >.border-pos {
            transition: .2s;
            position: absolute;
            left: 0;
            width: 3px;
            background: $primary;
            height: 16px;
            transform: translateY(1px);
            border-radius: 4px;
        }
    }
}
</style>