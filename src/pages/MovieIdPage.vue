<template>
  <section
    class="movie"
    :style="
      movie.backdrop_path
        ? {
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }
        : { background: 'none' }
    "
  >
    <main-container class="movie__container">
      <h2 class="movie__title">{{ movie.title }}</h2>
      <p class="movie__tag">{{movie.tagline}}</p>
      <p class="movie__rating">{{ movie.vote_average }}</p>
      <div class="movie__inner">
        <main-button class="movie__btn" @click="showMovieDetails">
          More Details
        </main-button>

        <main-button
          class="movie__btn"
          @click="
            () => {
              this.$router.push('/');
            }
          "
        >
          To Catalog
        </main-button>
      </div>
    </main-container>

    <the-additional class="movie__details" :show="isDetails" :movie="movie" @hidden="(value) => {isDetails = value}" />
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "movie-id-page",

  data() {
    return {
      movie: {},
      isDetails: false,
    };
  },

  methods: {
    showMovieDetails() {
      this.isDetails = !this.isDetails;
    },

    async fetchMovie(id) {
      try {
        const movieInfo = await axios.get(
          `http://api.themoviedb.org/3/movie/${id}?api_key=6a81fe8bf742382e2978ccde3e88097f`,
          {
            headers: {
              accept: "application/json",
            },
          }
        );
        this.movie = movieInfo.data;
        console.log(this.movie);
      } catch {
        alert("Error");
      }
    },
  },

  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.movie {
  min-height: 100%;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  &__container {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    color: $sub-text-color;
  }

  &__title {
    font-size: 60px;
  }

  &__rating {
    color: $grade-color;
  }

  &__inner {
    display: flex;
    flex-flow: column;
    gap: 15px;
    width: 100%;
    justify-content: center;
  }

  &__details {
    height: 100%;
    position: absolute;
    overflow-y: scroll;
    top: 0;
    left: 0;
    width: 0%;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media screen and (min-width: 480px) {
    &__inner {
      flex-flow: row;
      gap: 15px;
    }
  }
}
</style>