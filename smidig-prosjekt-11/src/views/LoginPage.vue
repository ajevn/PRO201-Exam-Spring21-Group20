<template>
  <base-site isDark="true">
    <login
      @submitLogin="postLogin($event)"
      :formMessage="formMessage"
      ref="login"
    />
  </base-site>
</template>

<script>
import BaseSite from "@/components/nav/BaseSite.vue";
import Login from "@/components/login/Login.vue";

export default {
  name: "LoginPage",
  data() {
    return {
      formMessage: ""
    };
  },
  components: {
    BaseSite,
    Login
  },
  methods: {
    postLogin(loginValues) {
      this.formMessage = "";
      this.$store
        .dispatch("authenticate", loginValues)
        .then(() => {
          this.$router.replace("/");
        })
        .catch(error => {
          this.$refs.login.removePassword();
          switch (error.response.status) {
            case 401:
              this.formMessage = "Invalid username/password";
              break;
            case 501:
              this.formMessage = "Internal server error";
          }
        });
    }
  }
};
</script>

<style scoped></style>
