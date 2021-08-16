<template>
  <div class="wrapper">
    Vue3.0 + TypeScript
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';
export default defineComponent({
  name: 'App',
  components: {
    TodoList,
    TodoInput
  },
  setup() {
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
