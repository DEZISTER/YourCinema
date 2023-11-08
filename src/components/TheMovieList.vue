<template>
  <div class="list">
    <div class="list__search">
      <slot name="serchField"></slot>
    </div>
    <slot name="title"></slot>
    <div class="list__cards">
      <slot name="cards">List is empty...</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-movie-list",
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-flow: column;
  gap: 15px;

  &__search {
    margin: auto;
    width: 100%;
  }

  &__cards {
    display: flex;
    flex-flow: column;
    gap: 15px;
  }

  @media screen and (min-width: 480px) {
    &__cards {
      display: flex;
      flex-flow: row wrap;
    }

    &__search {
      width: calc((100% - 15px) / 2);
    }
  }
  @media screen and (min-width: 768px) {
    &__search {
      width: calc((100% - 45px) / 3);
    }
  }
  @media screen and (min-width: 1200px) {
    &__search {
      width: calc((100% - 60px) / 5);
    }
  }
}
</style>