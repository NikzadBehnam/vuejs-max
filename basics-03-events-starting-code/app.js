const app = Vue.createApp({
  data() {
    return {
      counter: 5,
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

    submitForm() {
      alert("Form submited ..!");
    },
  },
});

app.mount("#events");
