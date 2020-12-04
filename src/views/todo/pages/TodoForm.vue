<template>
  <v-container id="todo-form">
    <v-card elevation="1" class="p-24">
      <v-row>
        <v-col><h3>Informações da tarefa</h3></v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-text-field
            v-model="todo.description"
            label="Descrição"
            placeholder="Informe a descrição"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-select
            :items="priorities"
            :item-text="'label'"
            v-model="todo.priority"
            label="Prioridade"
            placeholder="Informe a prioridade"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-textarea
            v-model="todo.content"
            rows="2T"
            label="Informações referente a tarefa"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="start">
          <v-btn
            color="info"
            @click="
              save();
              $router.push('/todo');
            "
            >Salvar</v-btn
          >
          <v-btn
            color="error"
            @click="
              clearState();
              $router.push('/todo');
            "
          >
            Cancelar
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id"],
  name: "TodoForm",
  data() {
    return {
      msg: "",
      title: "Lista de tarefas",
      loader: null,
      loading: false,
    };
  },
  computed: {
    ...mapGetters("todo", ["priorities"]),
    todo: {
      get() {
        return this.$store.state.todo.data;
      },
      set(todo) {
        this.$store.commit("setTodo", todo);
      },
    },
  },
  created() {
    this.getById(this.id);
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  methods: {
    ...mapActions("todo", ["save", "getById", "clearState"]),
  },
};
</script>

<style scoped>
.p-24 {
  padding: 24px;
}
</style>