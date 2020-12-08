<template>
  <v-container id="navbar">
    <v-tabs grow v-model="getActiveTab">
      <v-tab
        v-for="tab of getTabs"
        :disabled="tab.disabled"
        :key="tab.id"
        @click="changeNavbar(tab)"
        @change="changeActiveTab(tab)"
      >{{ tab.name }}</v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  created() {
    const i = this.getTabRoute;
    if (i === 1) {
      this.changeActiveTab({ id: i });
    } else {
      this.getActiveTab = this.getTabRoute;
    }
  },
  computed: {
    ...mapGetters("area", {
      getTabs: "getTabs",
      getActiveTab: "getActiveTab",
    }),
    area: {
      get() {
        return this.getActiveTab;
      },
      set() {},
    },
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
        // const paths = this.$route.fullPath.split("/");
        // const lastPath = paths[paths.length - 1];
        // if (this.getActiveTab === lastPath) { return; }
        route = `/area/comp/1`;
        this.changeDisableTabFoto();
      } else {
        route = `/area/comp/2`;
      }

      this.$router.push(route);
    },
    ...mapActions("area", {
      changeActiveTab: "changeActiveTab",
      changeDisableTabFoto: "changeDisableTabFoto",
    }),
  },
};
</script>

<style scoped>
</style>