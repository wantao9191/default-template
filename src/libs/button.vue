<template>
  <button class="tg-button" :class="classes" :disabled="disabled">
    <span class="tg-loadingIndicator" v-if="loading"></span>
    <slot />
  </button>
</template>
<script lang='ts'>
import { computed } from "vue";
export default {
  props: {
    theme: { type: String, default: "button" },
    size: { type: String, default: "normal" },
    type: { type: String, default: "" },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  setup(props) {
    const { theme, size, type, round } = props;
    const classes = computed(() => {
      return {
        [`tg-theme-${theme}`]: theme,
        [`tg-${size}-button`]: size,
        [`tg-${type}-button`]: type,
        "tg-round-button": round,
      };
    });
    return { classes };
  },
};
</script>
<style lang="less">
@h: 32px;
@border-color: #d9d9d9;
@color: #333;
@blue: #40a9ff;
@radius: 4px;
@red: red;
@grey: #ddd;
@green: #83d944;
.tg-button {
  box-sizing: border-box;
  font-size: 14px;
  height: @h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: @color;
  border: 1px solid @border-color;
  border-radius: @radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  vertical-align: bottom;
  & + & {
    margin-left: 8px;
  }
  &.tg-round-button {
    border-radius: @h;
  }
  &:hover,
  &:focus {
    color: @blue;
    border-color: @blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.tg-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: @blue;
    &:hover,
    &:focus {
      color: lighten(@blue, 10%);
    }
  }
  &.tg-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.tg-large-button {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.tg-small-button {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.tg-theme-button {
    &.tg-primary-button {
      background: @blue;
      color: white;
      border-color: @blue;
      &:hover,
      &:focus {
        background: darken(@blue, 10%);
        border-color: darken(@blue, 10%);
      }
    }
    &.tg-danger-button {
      background: @red;
      border-color: @red;
      color: white;
      &:hover,
      &:focus {
        background: darken(@red, 10%);
        border-color: darken(@red, 10%);
      }
    }
    &.tg-success-button {
      background: @green;
      border-color: @green;
      color: white;
      &:hover,
      &:focus {
        background: darken(@green, 10%);
        border-color: darken(@green, 10%);
      }
    }
  }
  &.tg-theme-link {
    &.tg-danger-button {
      color: @red;
      &:hover,
      &:focus {
        color: darken(@red, 10%);
      }
    }
  }
  &.tg-theme-text {
    &.tg-primary-button {
      color: @blue;
      &:hover,
      &:focus {
        color: darken(@blue, 10%);
      }
    }
    &.tg-danger-button {
      color: @red;
      &:hover,
      &:focus {
        color: darken(@red, 10%);
      }
    }
    &.tg-success-button {
      color: @green;
      &:hover,
      &:focus {
        color: darken(@green, 10%);
      }
    }
    &:hover,
    &:focus {
      background: none;
    }
  }
  &.tg-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: @grey;
      &:hover {
        border-color: @grey;
      }
    }
  }
  &.tg-theme-link,
  &.tg-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: @grey;
    }
  }
  > .tg-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: @blue @blue @blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: tg-spin 1s infinite linear;
  }
}
@keyframes tg-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>