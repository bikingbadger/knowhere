<template>
  <div class="systems">
    <h1>{{ getSystemName }}</h1>
    <systems-map :locations="getLocations"></systems-map>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SystemsMap from "@/components/systems/SystemsMap.vue";

export default {
  components: { SystemsMap },
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
