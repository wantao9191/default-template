<template>
    <tg-tabs v-model:value="value" @tabClick="onClick" :before-leave="onLeave">
        <tg-tabs-pane name="1">
            <template #label>标签一</template>
            标签一
        </tg-tabs-pane>
        <tg-tabs-pane name="2" label="标签二">
            标签二
        </tg-tabs-pane>
        <tg-tabs-pane name="3">
            <template #label>标签三</template>
            标签三
        </tg-tabs-pane>
    </tg-tabs>
</template>
<script setup lang="ts">
import { messageBox,message } from "@/libs";
import { ref } from "vue";
const value = ref('1')
const onClick = e => {
    console.log(e)
}
const onLeave = ({ activeName, beforeName }, done) => {
    messageBox.confirm(`是否确认从${beforeName}切换到${activeName}?`,'提示').then(()=>{
        done()
        message({message:'切换成功',type:'success'})
    }).catch(()=>{
        message({message:'取消了切换',type:'error'})
    })
}
</script>