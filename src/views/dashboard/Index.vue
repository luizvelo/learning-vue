<template>
  <v-app>
    <AppBar />
    <Drawer />
    <AppView />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "DashboardIndex",
  created() {
    this.getAll();
  },
  components: {
    AppBar: () => import("../../template/AppBar"),
    Drawer: () => import("../../template/Drawer"),
    AppView: () => import("../../template/AppView"),
  },
  data: () => ({
    expandOnHover: false,
  }),
  methods: {
    ...mapActions('todo', ['getAll'])
  }
};
</script>
