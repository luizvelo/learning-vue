<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="1">
        <v-icon large color="dark darken-2">
          mdi-format-list-bulleted-square
        </v-icon>
      </v-col>
      <v-col align="start">
        <h1>Todo Statistics</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="3" shaped color="primary">
          <v-row>
            <v-col align="center">
              <h1 class="white--text todo-count">{{ countLowPriority }}</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <h4 class="white--text">Low Priority</h4>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="3" shaped color="orange">
          <v-row>
            <v-col align="center">
              <h1 class="white--text todo-count">{{ countHighPriority }}</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <h4 class="white--text">Medium Priority</h4>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="3" shaped color="info">
          <v-row>
            <v-col align="center">
              <h1 class="white--text todo-count">{{ countNormalPriority }}</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <h4 class="white--text">Normal Priority</h4>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="3" shaped color="error">
          <v-row>
            <v-col align="center">
              <h1 class="white--text todo-count">{{ countHighPriority }}</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <h4 class="white--text">High Priority</h4>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("todo", [
      "countLowPriority",
      "countNormalPriority",
      "countHighPriority",
    ]),
  },
};
</script>

<style scoped>
.todo-count {
  font-size: 32px;
}
</style>