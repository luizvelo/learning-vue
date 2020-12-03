<template>
  <v-container id="todo-form" class="grey lighten-5">
    <v-row>
      <v-col align="end">
        <v-btn
          v-if="!showForm"
          color="primary"
          @click="
            showForm = true;
            title = 'Adicionar todo';
          "
          >Adicionar</v-btn
        >
        <v-btn
          color="primary"
          @click="$router.push('/todo')"
          >Salvar</v-btn
        >
        <v-btn
          color="error"
          @click="$router.push('/todo')"
        >
          Cancelar
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="showForm">
      <v-col cols="3">
        <v-text-field
          label="Descrição"
          placeholder="Informe a descrição"
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-text-field
          label="Descrição"
          placeholder="Informe a descrição"
        ></v-text-field>
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
import { mapActions } from 'vuex';

export default {
  name: "TodoForm",
  data() {
    return {
      show: false,
      title: "Lista de tarefas",
      loader: null,
      loading: false,
    };
  },
  created() {},
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  methods: {
    ...mapActions('', []),
    showForm() {
      this.show = true;
      this.title = 'Adicionar todo';
    },
    salvar() {
      this.show = false;
      this.title = 'Lista de tarefas'
    }

  },
};
</script>

<style scoped>
</style>