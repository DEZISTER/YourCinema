<template>
  <header class="header">
    <main-container class="header__container">
      <nav class="header__nav">
        <the-logo class="header__logo" />
      </nav>
      <main-button v-if="this.$route.path !== '/signIn' && this.$route.path !== '/signUp'" class="users-form__button" @click="exitAcc">Exit</main-button>
    </main-container>
  </header>
</template>

<script>
export default {
    name: "the-header",

    data() {
    return {
      conter: 1,
    };
  },

  methods: {
    exitAcc() {
      localStorage.setItem("AuthStatus", false);
      this.$router.push('/signIn');
    },
  },

  mounted() {
    // !this.showCatalog ? this.$router.push('/singIn') : none;
  }
}
</script>

<style lang="scss" scoped>
.header {
  color: $main-text-color;
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  // background: linear-gradient($main-bg-color, $main-bg-color, $main-bg-color, rgba(255, 255, 255, 0));
  background: $main-bg-color;

  &__container {
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    border-bottom: 2px solid $accent-color;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // &::before {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   width: 100%;
    //   height: 1px;
    //   background: white;
    //   border: none;
    //   bottom: 0;
    // }
  }

  &__nav {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
  }

  &__pages {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    gap: 30px;
    font-size: 16px;
  }

  &__link {
    color: $main-text-color;
    position: relative;
    cursor: pointer;
    padding: 5px 0;

    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      width: 0;
      background: $main-text-color;
      bottom: 0;
      transition-property: width;
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::before {
      width: 100%;
    }
  }
}
</style>