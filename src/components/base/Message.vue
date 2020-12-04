<template>
  <v-container id="message">
    <v-alert
      v-for="(item, i) in messages"
      :key="`item-${i}`"
      dismissible
      rounded="true"
      elevation="1"
      dense
      text
      v-bind:type="item.type"
    >
      {{ item.text }}
    </v-alert>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Message",
  computed: {
    ...mapState(["messages"]),
  },
};
</script>

<style scoped>
</style>