<template>
  <v-main>
    <router-view />
    <!-- <Footer /> -->
  </v-main>
</template>

<script>
  export default {
    name: 'AppView',

    components: {
      // Footer: () => import('./Footer'),
    },
  }
</script>
