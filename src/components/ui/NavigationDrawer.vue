<template>
  <v-navigation-drawer v-model="drawerVal" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ getUser.username }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    drawer: null
  },
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("systems", ["getLocations", "getSystemName"]),
    drawerVal: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit("close", value);
      }
    }
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", to: "/home" },
        { title: "Profile", icon: "mdi-account", to: "/profile" },
        { title: "Systems", icon: "mdi-earth", to: "/systems" },
        { title: "Flight Plans", icon: "mdi-airplane-takeoff", to: "/flight" }
      ]
    };
  }
};
</script>

<style></style>
