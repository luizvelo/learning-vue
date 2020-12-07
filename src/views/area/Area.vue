<template>
  <v-container id="area" fluid tag="section">
    <Navbar />
    <router-view />
  </v-container>
</template>

<script>
export default {
  components: {
    Navbar: () => import("./components/Navbar"),
  },
};
</script>

<style>
</style>