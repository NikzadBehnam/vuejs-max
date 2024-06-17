const app = Vue.createApp({
  data() {
    return {
      courseGoal1: "Finish the course and learn Vue!",
      // courseGoal2: "<h3>Master Vue and build amazing apps!</h3>",
      courseGoal2: "Master Vue and build amazing apps",
      vueLink: "https://vuejs.org/guide/introduction.html",
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal1;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount("#user-goal");
