<template>
  <v-container id="todo" fluid tag="section">
    <TodoForm />
    <TodoList />
  </v-container>
</template>

<script>
export default {
  components: {
    TodoList: () => import("./components/TodoList"),
    TodoForm: () => import("./components/TodoForm"),
  },
};
</script>