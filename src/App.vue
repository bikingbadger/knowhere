<template>
  <v-app dark>
    <span class="system-bg"></span>
    <v-app-bar app dark>
      <v-app-bar-title>Knowhere</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" text link to="/login">Login</v-btn>
      <v-btn v-if="!isLoggedIn" text link to="/register">Register</v-btn>
      <v-btn v-if="isLoggedIn" text link @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import "./assets/system-background.webp";

export default {
  name: "App",
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("auth", ["isLoggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logout", "setUser"])
  },
  mounted() {
    this.setUser();
  }
};
</script>

<style scoped>
.system-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("./assets/system-background.webp") no-repeat center center;
  background-size: cover;
  background-color: red;
  /* transform: scale(1.1); */
}
</style>
