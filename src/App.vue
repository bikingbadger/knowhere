<template>
  <v-app dark>
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
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
