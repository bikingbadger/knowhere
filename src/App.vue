<template>
  <v-app dark>
    <span class="system-bg"></span>
    <v-app-bar app dark>
      <v-app-bar-title>Knowhere</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text link to="/register">Register</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import "./assets/system-background.webp";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
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
