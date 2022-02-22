<template>
  <!-- No tener mucos cálculos -->
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <!-- Atajo => v-on por @ -->
    <button v-on:click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
/* Es reactivo por defecto */
export default {
  name: "Counter",
  /* Propieadades */
  props: {
    title: String,
    start: {
      type: Number,
      //required: true,
      default: 10,
    },
  },
  /* Estados */
  data() {
    return {
      counter: this.start,
    };
  },
  /* Métodos */
  // Calcular el cuadrado
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      return this.counter++;
    },
    decrease() {
      return this.counter--;
    },
  },
  /* Proiedades computadas (guaradas en chaché)
  Sólo cambia cuando uno de los datos cambia */
  computed: {
    squareCounter() {
      console.log("squareCounter");
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Contador";
    },
  },
};
</script>

<style>
button {
  background-color: #129087;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
}

button:hover {
  background-color: #127087;
  transition: 0.3s ease-in-out;
}
</style>