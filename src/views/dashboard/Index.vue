<template>
  <v-app>
    <AppBar />
    <Drawer />
    <AppView />
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    AppBar: () => import("../../template/AppBar"),
    Drawer: () => import("../../template/Drawer"),
    AppView: () => import("../../template/AppView"),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
