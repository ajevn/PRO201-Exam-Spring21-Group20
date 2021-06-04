<template>
  <div class="container">
    <h1>Add new User</h1>
    <form
      @submit="
        () => {
          onSubmit();
          showToast();
        }
      "
    >
      <div class="wrapper">
        <div class="input">
          <label>Username: </label>
          <input
            v-model="username"
            type="text"
            placeholder="Enter Username"
            required
          />
          <span>{{ usernameError }}<br /></span>
        </div>
        <div class="input">
          <label>Password: </label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            required
          />
          <span>{{ passwordError }} <br /></span>
        </div>
        <div class="input">
          <label>Confirm Password: </label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Enter Password"
            required
          />
          <span>{{ CPError }}<br /></span>
        </div>
        <div class="input">
          <label>User Camp: </label>
          <select v-model="campName" required>
            <option v-for="camp in camps" :key="camp.name">{{
              camp.name
            }}</option>
          </select>
        </div>
        <div class="admin-check">
          <label>Admin: </label>
          <input v-model="admin" type="checkbox" />
        </div>
        <div>
          <button id="submit-btn" type="submit" :disabled="isSubmitting">
            Submit
          </button>
        </div>
        <!-- <div class="form-message" v-if="formMessageExists">{{ formMessage }}</div> -->
      </div>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { useStore } from "vuex";

export default {
  name: "UserAdministrationPage",
  data() {
    return {
      camps: []
      // formMessage: ""
    };
  },
  methods: {
    showToast: function() {
      this.$toast.success(`User created`, {
        position: "bottom"
      });
    }
  },
  // computed: {
  //   formMessageExists() {
  //     return this.formMessage !== "";
  //   }
  // },
  async created() {
    const response = await fetch("http://localhost:3000/api/camp");
    this.camps = await response.json();
  },
  setup() {
    const store = useStore();

    const schema = {
      username(value) {
        return value && value.length >= 6
          ? true
          : "Username needs to be 6 or longer";
      },
      password(value) {
        return value && value.length >= 6
          ? true
          : "Password needs to be 6 or longer";
      },
      confirmPassword(value) {
        return value === password.value
          ? true
          : "Password needs to match password";
      }
    };

    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: schema
    });

    const onSubmit = handleSubmit((values, { resetForm }) => {
      delete values.confirmPassword;

      store
        .dispatch("createUser", values)
        .then(() => {
          // reset the form and the field values to their initial values
          resetForm();
          //this.formMessage = "New user created";

          // Success message display
        })
        .catch(error => {
          console.error("errorcatch", error);
          resetForm();
          switch (error.response.status) {
            case 400:
              //this.formMessage = 'Invalid username/password';
              break;
            case 409:
              //this.formMessage = 'Username already exists';
              break;
            case 500:
            //this.formMessage = 'Internal server error';
          }
        });
    });

    const { errorMessage: usernameError, value: username } = useField(
      "username"
    );
    const { errorMessage: passwordError, value: password } = useField(
      "password"
    );
    const { errorMessage: CPError, value: confirmPassword } = useField(
      "confirmPassword"
    );
    const { value: campName } = useField("campName");

    const { value: admin } = useField("admin");

    return {
      username,
      usernameError,
      password,
      passwordError,
      confirmPassword,
      CPError,
      onSubmit,
      isSubmitting,
      campName,
      admin
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  height: 100%;

  .form-message {
    color: white;
    text-align: center;
    margin-top: 10px;
  }

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  h1 {
    margin-top: 7vh;
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: "Open Sans", sans-serif;
    color: #828b96;
  }
  .wrapper {
    background: #2c2a29;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
    border-radius: 5px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #899599;

    .input {
      margin-bottom: 1vh;
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;

      label {
        color: #a8d598;
        font-weight: bold;
        width: 200px;
      }

      input {
        width: 200px;
        padding: 0.4em;
        box-shadow: inset -2px -2px #899599;
        outline: none;
        color: #2c2a29;
        font-weight: bold;
        background: #cdcdcd;

        &::placeholder {
          color: #6d6d6d;
        }
      }

      span {
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #cdcdcd;
        margin: 5px 0;
      }
    }

    .admin-check {
      margin-top: 10px;

      label {
        color: #a8d598;
        font-weight: bold;
        width: 200px;
      }

      input {
        margin-left: 10px;
      }
    }

    #submit-btn {
      margin-top: 50px;
      background-color: #ececec;
      color: #2c2a29;
      width: 100%;
      padding: 0.5rem;
      border-radius: 5px;
      box-shadow: -1px -2px #899599;
      outline: none;
      transition: 150ms;
      font-weight: bold;

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
  }
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
h1 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
  color: #828b96;
}

button {
  background: #2c2a29;
}
</style>
