<template>
  <div id="app-view">
    <main>
      <tg-form
        v-model:value="form"
        label-position="right"
        label-width="70px"
        ref="formRef"
        :rules="rules"
        size="mini"
      >
        <tg-form-item label="姓名" prop="name">
          <tg-input v-model:value="form.name"></tg-input>
        </tg-form-item>
        <tg-form-item label="年龄" prop="age">
          <tg-input v-model:value="form.age"></tg-input>
        </tg-form-item>
        <tg-form-item>
          <tg-button type="primary" @click="submit">提交</tg-button>
          <tg-button>取消</tg-button>
        </tg-form-item>
      </tg-form>
    </main>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { messageBox, message } from "@/libs";
const visible = ref(false);
const formRef = ref("");
const form = reactive({ name: "", age: "" });
const rules = reactive({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
});
const submit = () => {
  formRef.value.validate((valid:boolean)=>{

  });
};
const beforeClose = (done: any) => {
  messageBox
    .confirm("是否确认关闭", "提示")
    .then(() => {
      done();
    })
    .catch(() => {
      message({ message: "取消关闭", type: "error" });
    });
};
</script>

<style lang="scss">
#app-view {
  height: 100%;
  background: #f5f7f9;

  > main {
    height: calc(100% - 50px);

    .router-view {
      min-height: 100%;
    }
  }
}
</style>
