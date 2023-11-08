<template>
  <section class="catalog">
    <main-container>
      <main-input
        class="catalog__search"
        :placeholder="'Movie name...'"
        :modelValue="search"
        @input="searchFilm"
      />
    </main-container>

    <main-container v-if="search !== ''">
      <the-movie-list class="catalog__list">
        <template v-slot:cards>
          <the-movie-card
            :key="movie.id"
            v-for="movie in moviesList"
            :movie="movie"
          />
        </template>
      </the-movie-list>
    </main-container>

    <main-container v-else>
      <the-movie-list class="catalog__list">
        <template v-slot:title>
          <h2>Popular</h2>
        </template>
        <template v-slot:cards>
          <the-movie-card
            :key="movie.id"
            v-for="movie in topRatedMovies"
            :movie="movie"
          />
        </template>
      </the-movie-list>

      <the-movie-list class="catalog__list">
        <template v-slot:title>
          <h2>Upcoming</h2>
        </template>
        <template v-slot:cards>
          <the-movie-card
            :key="movie.id"
            v-for="movie in topUpcomingMovies"
            :movie="movie"
          />
        </template>
      </the-movie-list>
    </main-container>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "the-main-page",

  data() {
    return {
      showCatalog: false,
      search: "",
      moviesList: [],
      upcomingMovies: [],
    };
  },

  computed: {
    topRatedMovies() {
      return this.moviesList.slice(0, 10);
    },
    topUpcomingMovies() {
      return this.upcomingMovies.slice(0, 10);
    },
  },

  methods: {
    async searchFilm(value) {
      this.search = value;
      this.search === ""
        ? (this.moviesList = await this.fetchMovies())
        : (this.moviesList = await this.fetchMovies("search", this.search));
    },

    getOwnDate(month) {
      return new Date(
        new Date().setMonth(new Date().getMonth() + month)
      ).toLocaleDateString("en-ca");
    },

    async fetchMovies(status = null, search = "") {
      try {
        let url = `https://api.themoviedb.org/3/trending/movie/day?&page=1&api_key=6a81fe8bf742382e2978ccde3e88097f`;
        if (status === "search") {
          url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=6a81fe8bf742382e2978ccde3e88097f`;
        } else if (status == "upcoming") {
          url = `https://api.themoviedb.org/3/discover/movie/?language=en-US&page=1&sort_by=popularity.desc&with_release_type=1&release_date.gte=${this.getOwnDate(
            1
          )}&release_date.lte=${this.getOwnDate(
            2
          )}&api_key=6a81fe8bf742382e2978ccde3e88097f`;
        }
        const movies = await axios.get(url, {
          headers: {
            accept: "application/json",
          },
        });
        return movies.data.results;
      } catch {
        alert("Error");
      }
    },
  },

  async mounted() {
    this.moviesList = await this.fetchMovies();
    this.upcomingMovies = await this.fetchMovies("upcoming");
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__search {
    margin: 40px auto 0;
    width: 100%;
  }

  @media screen and (min-width: 480px) {
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