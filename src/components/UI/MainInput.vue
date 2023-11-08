<template>
  <input
    :value="modelValue"
    @input="updateInput"
    :class="colorTheme == 'dark' ? 'main-input main-input--dark' : 'main-input'"
  />
</template>

<script>
export default {
  name: "main-input",

  props: {
    modelValue: [String, Number],
    colorTheme: {
      type: String,
    },
  },

  methods: {
    updateInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-input {
  width: 100%;
  background: $sub-gb-color;
  color: $main-text-color;
  border: 2px solid $accent-color;
  outline: none;
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

  &:hover, &:focus {
    scale: 1.1;
  }
}
</style>