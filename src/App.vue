<template>
  <div id="app" class="template">
    <the-header />
    
    <main class="template__main">
      <router-view />
    </main>

    <the-footer />
  </div>
</template>

<style lang="scss">
@import "@/scss/base/_modern-normalize.scss";
@import "@/scss/base/_default-settings.scss";

.template {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background: $main-bg-color;
  font-family: "Josefin Sans", sans-serif;
  position: relative;
  z-index: 1;

  &__main {
    flex: 1 1 0;
  }
}
</style>
