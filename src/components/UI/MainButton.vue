<template>
  <button class="main-button" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  name: "main-button",
};
</script>

<style lang="scss" scoped>
.main-button {
  cursor: pointer;
  background: $accent-color;
  color: $sub-text-color;
  border: 2px solid $accent-color;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition-property: background, color, scale;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
  }
}
</style>