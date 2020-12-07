<template>
  <v-container id="todo">
    <router-view/>
    <TodoList />
  </v-container>
</template>

<script>
export default {
  components: {
    TodoList: () => import("./components/TodoList")
  },
};
</script>