import { createStore } from "vuex";
import foods from "@/modules/foods";
import rightSide from "@/modules/rightSide"

// Create a new store instance.
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { foods, rightSide },
});

export default store;
