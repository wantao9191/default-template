<template>
    <nav class="m-nav">
        <a href="javaScript:;" v-for="(l, i) in labels" :key="i" :class="{ active: active === l.label }"
            @click="onClick">{{ i + 1 }}.{{
                    l.label
            }}</a>
    </nav>
</template>
<script setup>
import { nextTick, reactive, ref } from "vue"
let labels = reactive([])
const active = ref('')
const init = () => {
    setTimeout(() => {
        let navs = document.querySelectorAll('.desc-title')
        for (let n of navs) {
            let { y } = n.getBoundingClientRect()
            labels.push({ label: n.innerText, y })
        }
        console.log([...labels])
        active.value = labels[0].label
    }, 100);
    nextTick(() => {
        document.querySelector('.router-main').onscroll = e => {
            let st = e.target.scrollTop
            let item = labels.find(l => {
                return st > l.y - 10 && st < l.y + 10
            })
            if (item) active.value = item.label
            console.log(st, item)
        }
    })

}
const onClick = (l) => {
    document.querySelector('.router-main').scrollTo(0, l.y)
    active.value = l.label
}
init()
</script>
<style lang="scss" scoped>
.m-nav {
    padding: 12px;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    width: 200px;
    display: flex;
    flex-direction: column;

    >a {
        padding-bottom: 6px;
        font-size: 12px;
        color: #666;

        &.active {
            color: $primary ;
        }
    }
}
</style>