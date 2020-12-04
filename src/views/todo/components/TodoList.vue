<template>
  <v-container id="todo-list">
    <v-row align="end">
      <v-col align="end">
        <v-btn color="success" @click="$router.push('/todo/add')"
          >Adicionar</v-btn
        >
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="todoList"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.description`]="{ item }">
        <span v-bind:class="{ 'text-decoration-line-through': item.completed }"
          >{{ item.description }}
        </span>
      </template>

      <template v-slot:[`item.createdAt`]="{ item }">
        <span>{{ item.createdAt | dateFormat }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="$router.push(`todo/${item.id}/edit`)"
        >
          mdi-pencil
        </v-icon>
        <v-icon color="error" small @click="excluir(item)"> mdi-delete </v-icon>
      </template>

      <template v-slot:[`item.priority`]="{ item }">
        <v-chip :color="getColor(item)" dark>
          {{ item.priority }}
        </v-chip>
      </template>

      <template v-slot:[`item.checkbox`]="{ item }">
        <v-simple-checkbox
          @click="
            edit(item);
            save();
          "
          color="primary"
          v-model="item.completed"
        ></v-simple-checkbox>
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
        { text: "", value: "checkbox", sortable: false },
        { text: "Prioridade", value: "priority" },
        { text: "Descrição", value: "description" },
        { text: "Criado em", value: "createdAt" },
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
      edit: "edit",
      getAll: "getAll",
      add: "add",
      save: "save",
      excluir: "delete",
    }),
    getColor(todo) {
      if (todo.priority === "Alta") {
        return "red";
      } else if (todo.priority == "Média") {
        return "orange";
      } else if (todo.priority === "Normal") {
        return "info ";
      } else if (todo.priority === "Baixa") {
        return "green ";
      }
    },
  },
};
</script>

<style scoped>
</style>