<template>
  <div class="areaList">
    <v-row>
      <v-col>
        <v-data-table dark :headers="headers" :items="areaList" :items-per-page="5" class="elevation-1">
          <template v-slot:[`item.dsAlien`]="{ item }">
            <strong><b>{{ item.name }}</b></strong>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="green" small class="mr-2" @click="verFoto(item);navigate();">mdi-eye</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "AreaList",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Nome", value: "name" },
        { text: "Detalhe", value: "actions", sortable: false },
      ]
    };
  },
  computed: {
    ...mapGetters("area", {
      areaList: "todos",
      data: "getData"
    }),
  },
  methods: {
    ...mapActions("area", {
      verFoto: "verFoto"
    }),
    navigate() {
      let route = `/area/comp/2`;
      this.$router.push(route);
    }
  },
};
</script>

<style>
</style>