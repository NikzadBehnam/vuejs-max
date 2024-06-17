Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEL = document.querySelector("button");
// const inputEL = document.querySelector("input");
// const listEl = document.querySelector("ul");

// const addGoal = () => {
//   const enteredValue = inputEL.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEL.value = "";
// };

// buttonEL.addEventListener("click", addGoal);
