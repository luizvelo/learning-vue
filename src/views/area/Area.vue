<template>
  <v-container id="area" fluid tag="section">
    <router-view />
    <Navbar />
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