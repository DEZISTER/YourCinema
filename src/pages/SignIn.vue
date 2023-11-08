<template>
  <section class="sign">
    <main-container class="sign__container">
      <form @submit="false" class="sign__form">
        <h3>Sign-In</h3>
        <main-input
          type="email"
          placeholder="Your email..."
          :modelValue="signData.email"
          @input="checkEmail"
          :class="
            validData.email || signData.email == ''
              ? 'sign__form-element'
              : 'sign__form-element sign__form-element--incorrect'
          "
        />
        <main-input
          type="password"
          placeholder="Your password..."
          :modelValue="signData.password"
          @input="checkPassword"
          :class="
            validData.password || signData.password == ''
              ? 'sign__form-element'
              : 'sign__form-element sign__form-element--incorrect'
          "
        />
        <p class="sign__redirect">
          Don't have an account yet?&nbsp;<router-link
            to="/signUp"
            class="sign__link"
            >signUp!</router-link
          >
        </p>
        <main-button type="button" @click="signIn">Sign In</main-button>
      </form>
    </main-container>
  </section>
</template>

<script>
import api from "@/api/idb";
export default {
  name: "sing-in",

  data() {
    return {
      signData: {
        email: "",
        password: "",
      },
      validData: {
        email: false,
        password: false,
      },
      regEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      regPassword: /^\w{8,15}$/,
    };
  },

  methods: {
    async signIn() {
      localStorage.setItem("AuthStatus", false);
      if (this.validData.email && this.validData.password) {
        let info = await api.getUser(this.signData);
        if (info) {
          localStorage.setItem("AuthStatus", info);
          this.signData.email = "";
          this.signData.password = "";
          this.$router.push("/");
        } else {
          this.signData.password = "";
          console.log('passs', this.signData.password)
          alert("Wrong login or password");
        }
      } else {
        alert("Fill in all data correctly ");
      }
    },

    checkEmail(email) {
      this.signData.email = email;
      this.validData.email = this.regEmail.test(this.signData.email);
    },

    checkPassword(password) {
      this.signData.password = password;
      this.validData.password = this.regPassword.test(this.signData.password);
    },
  },

  mounted() {
    console.log("AthStatus", JSON.parse(localStorage.getItem("AuthStatus")));
  }
};
</script>

<style lang="scss" scoped>
.sign {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  &__container {
    height: auto;
  }

  &__form {
    width: 100%;
    margin: auto;
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 25px;
    max-width: 400px;
  }

  &__form-element {
    &--incorrect {
      background: #e8554b61;
    }
  }

  &__redirect {
    display: flex;
  }

  &__link {
    color: $accent-color;
    text-decoration: underline;
  }
}
</style>