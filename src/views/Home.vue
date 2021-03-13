<template>
  <div class="home">
    <h1>Welcome</h1>
    {{ getUser }}
    <systems-map></systems-map>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SystemsMap from "@/components/SystemsMap";

export default {
  name: "Home",
  components: { SystemsMap },
  computed: {
    ...mapGetters("auth", ["getUser"])
  }
};
</script>
