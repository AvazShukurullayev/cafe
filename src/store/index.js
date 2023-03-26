import { createStore } from "vuex";
import foods from "@/modules/foods";

// Create a new store instance.
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { foods },
});

export default store;
