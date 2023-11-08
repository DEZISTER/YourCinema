<template>
  <router-link
    class="card"
    :to="`/movies/${movie.id}`"
    :style="
      movie
        ? {
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
          }
        : { backgroundImage: 'none' }
    "
  >
    <div class="card__inner">
      <h3 class="card__title">{{ movie.title }}</h3>
      <p>{{ movie.release_date }}</p>
      <p class="card__grade">{{ movie.vote_average }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "the-movie-card",

  props: {
    movie: {
        type: Object,
        require: true
    }
  },

  data() {
    return {
    };
  },

  methods: {
  },

  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.card {
//   width: calc((100% - 60px) / 5);
  width: 100%;
  background: $accent-color;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: 2px solid $accent-color;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  height: 300px;
  cursor: pointer;
  transition-property: scale, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: $sub-text-color;

  &:hover,
  &:focus {
    scale: 1.05;
  }

  &__inner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent);
    text-align: center;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__grade {
    color: $grade-color;
  }

  @media screen and (min-width: 480px) {
    width: calc((100% - 15px) / 2);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 45px) / 3);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 60px) / 5);
  }
}
</style>