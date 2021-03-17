<template>
  <div class="home">
    <h1>Welcome to {{ getSystemName }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters("systems", ["getSystemName"])
  }
};
</script>
