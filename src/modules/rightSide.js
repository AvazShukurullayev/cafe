const state = {
  total: 0,
  //   rate: 11000,
  dishesArray: [],
};

const getters = {
  getDishesArray: (state) => {
    return state.dishesArray;
  },
  getTotal: (state) => {
    return state.total;
  },
};

const mutations = {
  addDish(state, payload) {
    state.dishesArray.push(payload);
  },
  removeDish(state, id) {
    let index = state.dishesArray.findIndex((ind) => ind.id == id);
    state.dishesArray[index].counter = 1;
    state.dishesArray = state.dishesArray.filter((item) => item.id !== id);
  },
  incrementCount(state, id) {
    let index = state.dishesArray.findIndex((ind) => ind.id == id);
    state.dishesArray[index].counter++;
  },
  changeTotal(state, payload) {
    state.total = payload;
  },
  setByDefaultRightSide(state) {
    state.total = 0;
    state.dishesArray = [];
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
