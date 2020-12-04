<template>
<<<<<<< HEAD
  <v-container id="todo" fluid tag="section">
=======
  <v-container id="todo">
>>>>>>> 85d9d6d0d6556baadc16c371ae9092ecd2c7a5c1
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