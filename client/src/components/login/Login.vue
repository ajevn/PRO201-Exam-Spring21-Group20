<template>
  <!-- main page to login -->
  <div id="login-container">
    <div v-if="messageExists" class="login-error-container">
      {{ formMessage }}
    </div>
    <!-- from to post -->
    <form
      @submit.prevent="emitLogin({ username: username, password: password })"
    >
      <div>
        <!-- username input -->
        <label for="username">Username</label>
        <input
          class="login-input"
          v-model="username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          tabindex="1"
          ref="firstFocus"
        />
      </div>
      <div>
        <!-- password input -->
        <label for="password">Password</label>
        <input
          class="login-input"
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          tabindex="2"
        />
      </div>
      <div>
        <!-- submit button -->
        <input id="login-submit" type="submit" value="Log in" tabindex="3" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  emits: ["submitLogin"],
  methods: {
    emitLogin(loginValues) {
      this.$emit("submitLogin", loginValues);
    },
    removePassword() {
      this.password = "";
    },
    removeValues() {
      this.password = "";
      this.username = "";
    }
  },
  props: {
    formMessage: {
      type: String,
      defualt: ""
    }
  },
  computed: {
    messageExists() {
      return this.formMessage !== "";
    }
  }
};
</script>

<style lang="scss" scoped>
#login-container {
  background: #2c2a29;
  position: relative;
  top: 200px;
  width: 100%;
  max-width: 20rem;
  margin: auto;
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #899599;

  form {
    label {
      font-weight: bold;
      color: #a8d598;
      display: block;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1.5rem;
      color: #2c2a29;
      font-weight: bold;
      //outline: none;
    }

    .login-input {
      box-shadow: inset -2px -2px #899599;
      background: #cdcdcd;

      &::placeholder {
        color: #6d6d6d;
      }
    }
  }

  #login-submit {
    background-color: #ececec;
    color: #2c2a29;
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: -1px -2px #899599;
    transition: 150ms;

    &:hover {
      background-color: #4d5050;
      color: #ececec;
    }

    &:active {
      transform: scale(0.98);
      transition-duration: 10ms;
      box-shadow: inset 2px 2px 2px #899599;
      background-color: #6d6d6d;
    }
  }

  .login-error-container {
    color: rgb(165, 1, 1);
    margin-bottom: 15px;
    margin-top: 0px;
    font-weight: 700;
    text-align: center;
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #login-container {
    top: 50px;
  }
}
</style>
