<template>
  <div class="component2">
    <div class="card">
      <v-row class="pl-3" align="start">
        <v-col cols="2">
          <v-avatar size="150">
            <v-img
              v-bind:src="img || 'https://simpleicon.com/wp-content/uploads/user1.png'"
              width="12em"
              height="12em"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col>
          <div v-if="data.name" class="text pl-3">
            <h2>{{ data.name }}</h2>
          </div>

          <h4 class="grey-fg pt-3">{{data.desc}}</h4>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {},
  computed: {
    ...mapGetters("area", {
      img: "getImagem",
      data: "getData",
    }),
  },
};
</script>

<style scoped>
.card {
  width: 100% auto;
  height: 250px;
  background-color: green;
  border-color: azure;
}

.text {
  width: 0 auto;
  background-color: greenyellow;
  border-radius: 1.2em;
  border: groove;
}
</style>