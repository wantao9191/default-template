<template>
  <div>
    <m-aside></m-aside>
  </div>
</template>
<script>
import MAside from "@/components/MAside.vue";
export default {
  components:{MAside},
  setup() {
    const onClick = () => {};
    return { onClick };
  },
};
</script>