const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
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

    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
