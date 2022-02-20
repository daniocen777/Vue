const app = Vue.createApp({
  template: `<h1>Holas mundos</h1>
  <p>Desde app.js</p>
  `,
});

const block1 = Vue.createApp({
  data() {
    return {
      quote: "Mundos perdidos",
      author: "Danicode",
    };
  },
  /* Métodos */
  methods: {
    changeAuthor() {
      this.author = "Bruce Wayne";
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

/* Bloque 2 */
const quotes = [
  {
    quote:
      "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote:
      "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote:
      "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];
const block2 = Vue.createApp({
  data() {
    return {
      quotes: quotes,
      newQuote: "Holas",
    };
  },
  methods: {
    // Cafa función recibe "event"
    addQuote() {
      // Agregar al inicio del arreglo
      this.quotes.unshift({
        quote: this.newQuote
      });
    },
  },
});

// Montar en el div con id 'myApp'
// app.mount("#myApp");
block1.mount("#block1");
block2.mount("#block2");
