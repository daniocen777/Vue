<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <h3>Enviando una propiedad</h3> -->
  <!-- Atajo: v-bind: por : -->

  <!-- <Counter v-bind:start="15" /> -->
  <!-- <h3>Por defecto</h3> -->
  <Indecision />
</template>

<script>
import Indecision from "./components/Indecision.vue";

export default {
  name: "App",
  components: {
    Indecision,
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
