<template>
  <v-container id="todo-list">
    <v-row align="end">
      <v-col align="end">
        
        <v-btn
          color="success"
          @click="$router.push('/todo/add')"
          >Adicionar</v-btn
        >
      </v-col>
    </v-row>
    <v-data-table
          :headers="headers"
          :items="todoList"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="warning" small class="mr-2" @click="$router.push(`todo/${item.id}/edit`)"> mdi-pencil </v-icon>
            <v-icon color="error" small @click="excluir(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Descrição", value: "description" },
        { text: "Criado em", value: "createdAt" },
        { text: "Prioridade", value: "priority" },
        { text: "Completo", value: "completed" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  created() {
    this.getAll();
  },
  computed: {
    ...mapGetters("todo", {
      todoList: "todos",
    }),
  },
  methods: {
    ...mapActions("todo", {
      getAll: 'getAll',
      add: 'add',
      excluir: 'delete',
    }),
    getTodos() {
      // this.$http.get('todo.json').then((response) => console.log(response.data));
    },
  },
};
</script>

<style scoped>
</style>