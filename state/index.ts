import { defineStore } from "pinia";

export const storage = defineStore({
  id: "Main",
  state: () => ({
    count: 1,

    them: {
      dark: false,
    },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    incriment() {
      this.count++;
    },
    changeThem() {
      this.them.dark = !this.them.dark;
    },
  },
});
