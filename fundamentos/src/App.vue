<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h3>Enviando una propiedad</h3>
  <!-- Atajo: v-bind: por : -->
  <Counter v-bind:start="15" />
  <h3>Por defecto</h3>
  <Counter />
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
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
