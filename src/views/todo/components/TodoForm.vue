<template>
  <v-container id="todo-form" class="grey lighten-5">
    <v-row>
      <v-col>
        <h2>{{ title }}</h2>
      </v-col>

      <v-col align="end">
        <v-btn color="primary"> Adicionar </v-btn>
      </v-col>
    </v-row>

    <!-- <v-row align="center">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="loader = 'loading'"
      >
        Novo
      </v-btn>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      title: 'Lista de tarefas',
      loader: null,
      loading: false,
    };
  },
  created() {
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};
</script>

<style scoped>
</style>