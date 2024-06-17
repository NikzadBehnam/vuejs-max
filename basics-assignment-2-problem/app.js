const app = Vue.createApp({
  data() {
    return {
      text: "",
      textOnEnter: "",
    };
  },

  methods: {
    showAlert(text) {
      alert(text);
    },

    setText() {
      this.text = event.target.value;
    },

    setTextOnEnter() {
      this.textOnEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
