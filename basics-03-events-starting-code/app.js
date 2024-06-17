const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counterInput: 0,
    };
  },

  methods: {
    add(num) {
      console.log(num);
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
