<template>
  <div class="component2">
    <v-img v-bind:src="img"></v-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {},
  computed: {
    ...mapGetters("area", {
      img: "getImagem",
    }),
  },
};
</script>