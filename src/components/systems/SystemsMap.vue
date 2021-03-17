<template>
  <v-container class="system-map">
    <div class="space" v-for="i in 392" :key="i"></div>
    <div
      v-for="location in mappedLocations"
      :key="location.symbol"
      :class="[location.type]"
      :style="{ gridColumn: location.xPosition, gridRow: location.yPosition }"
    >
      {{ location.xPosition }},{{ location.yPosition }}
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["locations"],
  computed: {
    mappedLocations() {
      let returnArray = this.locations.map((location) => {
        console.log(location, Math.round(location.x / 10) + 10);
        return {
          xPosition: Math.round(location.x / 10) + 10,
          yPosition: Math.round(location.y / 10) + 10,
          ...location
        };
      });
      return returnArray;
    }
  }
};
</script>

<style scoped>
.system-map {
  display: grid;
  gap: 0.1rem;
  grid-template-columns: repeat(20, 1fr);
}

.space {
  padding: 1rem;
  background: red;
}

.space::before {
  content: "";
  padding-bottom: 100%;
  display: block;
}
</style>
