<template>
  <footer class="footer">
    <main-container class="footer__container">
      <span class="footer__info">@Kales_Nick</span>
    </main-container>
  </footer>
</template>

<script>
export default {
    name: "the-footer",
}
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    border-top: 2px solid $accent-color;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
  }

  &__info {
    font-weight: bold;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
      color: $accent-color;
    }
  }
}
</style>