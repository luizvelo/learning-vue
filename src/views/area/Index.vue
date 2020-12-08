<template>
  <v-app>
    <AppBar />
    <Drawer />
    <AppView />
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "AreaIndex",

  components: {
    AppBar: () => import("../../template/AppBar"),
    Drawer: () => import("../../template/Drawer"),
    AppView: () => import("../../template/AppView"),
    Footer: () => import("../../template/Footer"),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>

<style>
</style>