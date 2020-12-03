<template>
  <div id="todo-list">
    <v-data-table
      :headers="headers"
      :items="todoList"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top></template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small    class="mr-2" @click="edit(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
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
    // this.getTodos();
  },
  computed: {
    ...mapGetters("todo", {
      todoList: "todos",
    }),
  },
  methods: {
    ...mapActions("todo", ["getAll", "delete"]),
    edit(data) {
      this.$router.push(`todo/${data.id}/edit`);
    },
    getTodos() {
      // this.$http.get('todo.json').then((response) => console.log(response.data));
    },
  },
};
</script>

<style scoped>
</style>