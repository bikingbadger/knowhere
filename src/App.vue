<template>
  <v-app dark>
    <span class="system-bg"></span>
    <v-app-bar app dark>
      <v-icon @click="drawer = !drawer">mdi-apps</v-icon>
      <v-img src="@/assets/logo.png" max-height="20" max-width="20" contain></v-img>
      <v-app-bar-title>Knowhere</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" text link to="/login">Login</v-btn>
      <v-btn v-if="!isLoggedIn" text link to="/register">Register</v-btn>
      <v-btn v-if="isLoggedIn" text link @click="logout">Logout</v-btn>
    </v-app-bar>

    <navigation-drawer
      :drawer="drawer"
      @close="drawer = $event"
    ></navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

  <!-- <a href='https://www.freepik.com/vectors/cartoon'>Cartoon vector created by rosapuchalt - www.freepik.com</a> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import "./assets/system-background.webp";
import firebase from "@/utilities/firebase";
import NavigationDrawer from "./components/ui/NavigationDrawer.vue";

export default {
  components: { NavigationDrawer },
  name: "App",
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapGetters("auth", ["isLoggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logout", "setUser"]),
    ...mapActions("systems", ["setLocations"])
  },
  async mounted() {
    await this.setUser();

    if (firebase.auth().currentUser) {
      await this.setLocations();
    }
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
