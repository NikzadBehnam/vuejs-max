const app = Vue.createApp({
  data() {
    return {
      name: "John Deo",
      age: 31,
      imgURL: "https://v1.vuejs.org/images/mvvm.png",
    };
  },

  methods: {
    favoriteRandomNumber() {
      return Math.random();
    },

    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
