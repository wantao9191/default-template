<template>
  <template v-if="visible">
    <Teleport to='body'>
      <div class="wt-dialog-overlay" @click="onClickOverlay"></div>
      <div class="wt-dialog-wrapper" :style="{ width }">
        <div class="wt-dialog" :class="`wt-dialog-${center ? 'center' : 'default'}`">
          <header>
            <slot name="title">{{ title }}</slot>
            <span class="wt-dialog-close" @click="close">X</span>
          </header>
          <main>
            <slot />
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang='ts'>
export default {
  props: {
    visible: { type: Boolean, default: false },
    closeOnOverlay: { type: Boolean, default: true },
    title: { type: String, default: "" },
    center: { type: Boolean, default: false },
    width: { type: String, default: '50%' }
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
      context.emit("close");
    };
    const onClickOverlay = () => {
      if (props.closeOnOverlay) {
        close();
      }
    };
    return { close, onClickOverlay };
  },
};
</script>
<style lang="scss">
.wt-dialog-overlay {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2000;
}

.wt-dialog-wrapper {
  width: 50%;
  background: #fff;
  position: absolute;
  top: 20vh;
  left: 50%;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  z-index: 2001;

  >.wt-dialog {
    >header {
      font-size: 18px;
      padding: 20px 20px 10px;
      font-weight: 400;
      position: relative;

      >.wt-dialog-close {
        cursor: pointer;
        font-weight: normal;
        font-size: 14px;
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    >main {
      padding: 30px 20px;
    }

    >footer {
      padding: 10px 20px 20px;
      text-align: right;
    }

    &.wt-dialog-center {

      header,
      footer {
        text-align: center;
      }
    }
  }
}
</style>