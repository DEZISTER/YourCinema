<template>
  <section class="sign">
    <main-container class="sign__container">
      <form @submit="false" class="sign__form">
        <h3>Sign-In</h3>
        <main-input
          type="text"
          placeholder="Your name..."
          :modelValue="signData.name"
          @input="checkName"
          :class="
            validData.name || signData.name == ''
              ? 'sign__form-element'
              : 'sign__form-element sign__form-element--incorrect'
          "
        />

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
        <main-input
          type="password"
          placeholder="Password confirm..."
          :modelValue="signData.confirmPassword"
          @input="checkConfirnPassword"
          :class="
            validData.confirmPassword || signData.confirmPassword == ''
              ? 'sign__form-element'
              : 'sign__form-element sign__form-element--incorrect'
          "
        />
        <p class="sign__redirect">
          Don't have an account yet?&nbsp;<router-link
            to="/signIn"
            class="sign__link"
            >signIn!</router-link
          >
        </p>
        <main-button type="button" @click="signUp">Sign Up</main-button>
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validData: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
      regName: /^[A-Za-z]{3,20}$/,
      regEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      regPassword: /^\w{8,15}$/,
    };
  },

  methods: {
    async signUp() {
      if (
        this.signData.password == this.signData.confirmPassword &&
        this.validData.name &&
        this.validData.email &&
        this.validData.password
      ) {
        delete this.signData.confirmPassword;
        await api.saveUser(this.signData);
        this.signData.name = "";
        this.signData.email = "";
        this.signData.password = "";
        this.signData.confirmPassword = "";
        console.log("SUCCESS");
        this.$router.push("/signIn");
      } else {
        alert("Fill in all data correctly ");
      }
    },

    checkName(name) {
      this.signData.name = name;
      this.validData.name = this.regName.test(this.signData.name);
    },

    checkEmail(email) {
      this.signData.email = email;
      this.validData.email = this.regEmail.test(this.signData.email);
    },

    checkPassword(password) {
      this.signData.password = password;
      this.validData.password = this.regPassword.test(this.signData.password);
    },

    checkConfirnPassword(password) {
      this.signData.confirmPassword = password;
      this.validData.confirmPassword = this.regPassword.test(
        this.signData.confirmPassword
      );
    },
  },
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