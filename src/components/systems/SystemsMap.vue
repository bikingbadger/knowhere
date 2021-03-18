<template>
  <v-container class="system-map">
    <div class="space" v-for="i in 392" :key="i"></div>
    <div
      v-for="location in mappedLocations"
      :key="location.symbol"
      :class="[location.type]"
      :style="{ gridColumn: location.xPosition, gridRow: location.yPosition }"
    >
      <v-img
        :src="require(`@/assets/${location.image_source}`)"
        contain
        width="40"
        height="40"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["locations"],
  computed: {
    mappedLocations() {
      let returnArray = this.locations.map((location) => {
        console.log(location.symbol, location.type);
        return {
          xPosition: Math.round(location.x / 10) + 10,
          yPosition: Math.round(location.y / 10) + 10,
          image_source: `${location.symbol}.png`,
          ...location

          // OE-PM PLANET
          // OE-CR PLANET
          // OE-KO PLANET
          // OE-BO GAS_GIANT
          // OE-NY ASTEROID
          // OE-UC PLANET
          // OE-PM-TR MOON
          // OE-UC-OB MOON
          // OE-UC-AD MOON
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
  /* background: red; */
}

.space::before {
  content: "";
  padding-bottom: 100%;
  display: block;
}
</style>
