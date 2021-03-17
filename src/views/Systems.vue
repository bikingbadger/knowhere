<template>
  <div class="systems">
    <h1>{{ getSystemName }}</h1>
    <pre>{{ getLocations }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    drawer: null
  },
  computed: {
    ...mapGetters("systems", ["getLocations", "getSystemName"]),
    drawerVal: {
      get() {
        return this.drawer;
      },
      set(value) {
        console.log(value);
        this.$emit("close", value);
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
