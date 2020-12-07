<template>
  <v-container id="navbar">
    <v-tabs grow v-model="active_tab">
      <v-tab v-for="tab of tabs" :key="tab.id" @click="changeNavbar(tab.id)">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active_tab: 0,
      tabs: [
        { id: 1, name: "Component 1" },
        { id: 2, name: "Component 2" },
      ],
    };
  },
  mounted() {
    this.active_tab = this.getTabRoute;
  },
  computed: {
    getTabRoute() {
      const paths = this.$route.fullPath.split("/");
      const lastPath = paths[paths.length - 1];
      return lastPath - 1;
    },
  },
  methods: {
    changeNavbar(id) {
        let route = `/area/comp/${id}`;
        this.$router.push(route);
    },
  },
};
</script>

<style scoped>
</style>