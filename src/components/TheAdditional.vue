<template>
  <div class="additional" :style="show ? { width: `100%` } : { width: `0px` }">
    <main-container class="additional__container">
      <div class="additional__inner">
        <img
          class="additional__img"
          :src="
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : null
          "
          width="100%"
        />
        <main-button class="additional__btn" @click="hiddeAdditional">
          Close
        </main-button>
      </div>
      <div class="additional__inner">
        <h3 class="additional__title">{{ movie.title }}</h3>
        <p class="additional__desct">{{ movie.overview }}</p>

        <p>
          <span class="additional__subtitle">Genres: </span
          ><span :key="genre.id" v-for="genre in movie.genres"
            >{{ genre.name }},
          </span>
        </p>
        <p>
          <span class="additional__subtitle">Genres: </span
          ><span :key="company.id" v-for="company in movie.production_companies"
            >{{ company.name }},
          </span>
        </p>

        <p>
          <span class="additional__subtitle">Budget: </span>{{ movie.budget }}$
        </p>
        <p>
          <span class="additional__subtitle">Release: </span
          >{{ movie.release_date }}
        </p>
        <p>
          <span class="additional__subtitle">Rating: </span
          >{{ movie.vote_average }}
        </p>
      </div>
    </main-container>
  </div>
</template>

<script>
export default {
  name: "the-additional",

  props: {
    movie: {
      type: Object,
      default() {
        return {};
      },
    },
    show: {
      type: Boolean,
    },
  },

  data() {
    return {};
  },

  methods: {
    hiddeAdditional() {
      this.$emit("hidden", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.additional {
  background: $main-bg-color;
  padding-top: 20px;
  padding-bottom: 20px;
  transition-property: width;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &__subtitle {
    color: $accent-color;
    font-weight: bold;
    text-shadow: 1px 1px 0 rgb(66, 45, 15);
  }

  &__btn {
    width: 100%;
  }

  &__img {
    display: block;
  }
  &__container {
    display: flex;
    flex-flow: column;
    gap: 50px;
    height: 100%;
  }
  &__inner {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 10px;
    text-align: start;
  }

  &__title {
    text-align: center;
    margin: 0 auto 30px;
    font-size: 28px;
    text-shadow: 2px 2px 0 rgb(66, 45, 15);
    color: $accent-color;
  }

  @media screen and (min-width: 768px) {
    &__container {
      flex-flow: row;
    }

    &__img {
      height: 75%;
      width: auto;
    }
  }
}
</style>