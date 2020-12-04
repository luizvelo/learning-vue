<template>
  <v-container id="navbar">
    <v-tabs fixed-tabs centered v-model="tab">
      <v-tabs-slider></v-tabs-slider>
      <v-tab @click="changeNavbar(1)">Componente 1</v-tab>
      <v-tab @click="changeNavbar(2)">Componente 2</v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tab: null,
      text: "NAVBAR",
    };
  },
  methods: {
    changeNavbar(index) {
      this.$router.push(`/area/comp${index}`);
      console.log(`/comp${index}`);
    },
  },
};
</script>

<style scoped>
</style>