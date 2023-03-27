const state = {
  total: 0,
  rate: 11000,
  dishesArray: [],
};

const getters = {
  getDishesArray: (state) => {
    return state.dishesArray;
  },
};

const mutations = {
  addDish(state, payload) {
    state.dishesArray.push(payload);
  },
  removeDish(state, id) {
    state.dishesArray = state.dishesArray.filter((item) => item.id !== id);
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
