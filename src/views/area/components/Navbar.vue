<template>
  <v-container id="navbar">
    <v-tabs grow v-model="getActiveTab">
      <v-tab v-for="tab of getTabs" :key="tab.id" @click="changeNavbar(tab)">{{ tab.name }}</v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      // active_tab: 0,
      // tabs: [
      //   { id: 1, name: "Dados" },
      //   { id: 2, name: "Foto" },
      // ],
    };
  },
  mounted() {
    this.getActiveTab = this.getTabRoute;
  },
  computed: {
    ...mapGetters("area", {
      getTabs: "getTabs",
      getActiveTab: "getActiveTab",
    }),
    getTabRoute() {
      const paths = this.$route.fullPath.split("/");
      const lastPath = paths[paths.length - 1];
      return lastPath - 1;
    },
  },
  methods: {
    changeNavbar(tab) {
      let route;
      if (tab.name === "Dados") {
        route = `/area/comp/1`;
      } else {
        route = `/area/comp/2`;
      }

      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
</style>