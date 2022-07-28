<template>
  <button class="tg-button" :class="classes" :disabled="disabled || loading">
    <span class="tg-loadingIndicator" v-if="loading"></span>
    <slot />
  </button>
</template>
<script lang='ts' setup>
import { computed } from "vue";

const props = defineProps({
  theme: { type: String, default: "button" },
  size: { type: String, default: "normal" },
  type: { type: String, default: "" },
  disabled: Boolean,
  loading: Boolean,
  round: Boolean,
});

const { theme, size, type, round } = props;
const classes = computed(() => {
  return {
    [`tg-theme-${theme}`]: theme,
    [`tg-${size}-button`]: size,
    [`tg-${type}-button`]: type,
    "tg-round-button": round,
  };
});
</script>
<style lang="scss" scoped>
$h: 28px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$grey: #ddd;

.tg-button {
  box-sizing: border-box;
  font-size: 14px;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  vertical-align: baseline;

  &+& {
    margin-left: 8px;
  }

  &.tg-round-button {
    border-radius: $h;
  }

  &:hover,
  &:focus {
    color: $primary;
    border-color: $primary;
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
    color: $primary;

    &:hover,
    &:focus {
      color: lighten($primary, 10%);
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

    &.tg-default-button {
      &:hover {
        color: $primary;
      }
    }
  }

  &.tg-large-button {
    font-size: 18px;
    height: 34px;
    padding: 0 16px;
  }

  &.tg-small-button {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.tg-theme-button {
    &.tg-primary-button {
      background: $primary;
      color: white;
      border-color: $primary;

      &:hover,
      &:focus {
        background: darken($primary, 10%);
        border-color: darken($primary, 10%);
      }
    }

    &.tg-danger-button {
      background: $danger;
      border-color: $danger;
      color: white;

      &:hover,
      &:focus {
        background: darken($danger, 10%);
        border-color: darken($danger, 10%);
      }
    }

    &.tg-success-button {
      background: $success;
      border-color: $success;
      color: white;

      &:hover,
      &:focus {
        background: darken($success, 10%);
        border-color: darken($success, 10%);
      }
    }
  }

  &.tg-theme-link {
    &.tg-danger-button {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }
  }

  &.tg-theme-text {
    &.tg-primary-button {
      color: $primary;

      &:hover,
      &:focus {
        color: darken($primary, 10%);
      }
    }

    &.tg-danger-button {
      color: $danger;

      &:hover,
      &:focus {
        color: darken($danger, 10%);
      }
    }

    &.tg-success-button {
      color: $success;

      &:hover,
      &:focus {
        color: darken($success, 10%);
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
      opacity: .6;
      &:hover {
        background: $primary !important;
        border-color: $primary;
        color: #fff !important;
      }
    }
  }

  &.tg-danger-button {
    &[disabled] {
      cursor: not-allowed;
      opacity: .6;

      &:hover {
        background: $danger !important;
        color: #fff !important;
      }
    }
  }

  &.tg-success-button {
    &[disabled] {
      cursor: not-allowed;
      opacity: .6;

      &:hover {
        background: $success !important;
        color: #fff !important;
      }
    }
  }

  &.tg-theme-link,
  &.tg-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  >.tg-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $primary $primary $primary transparent;
    border-style: solid;
    border-width: 2px;
    animation: tg-spin 1s infinite linear;
  }

  &.tg-theme-button {
    >.tg-loadingIndicator {
      border-color: #fff #fff #fff transparent;
    }
  }

  &.tg-normal-button {
    &[disabled] {
      &:hover {
        background: #fff;
        color: inherit;
        border-color: #fff;
      }
    }

    >.tg-loadingIndicator {
      border-color: $primary $primary $primary transparent;
    }
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