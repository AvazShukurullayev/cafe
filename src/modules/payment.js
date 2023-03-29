const state = {
  clientInfo: {
    clientPaymentMethod: "",
    clientName: "",
    clientCard: "",
    clientDate: "",
    clientPassword: "",
    clientOrder: "",
    clientTable: "",
  },
};

const getters = {
  getClientPaymentMethod: (state) => {
    return state.clientInfo.clientPaymentMethod;
  },
  getClientName: (state) => {
    return state.clientInfo.clientName;
  },
  getClientCard: (state) => {
    return state.clientInfo.clientCard;
  },
  getClientDate: (state) => {
    return state.clientInfo.clientDate;
  },
  getClientPassword: (state) => {
    return state.clientInfo.clientPassword;
  },
  getClientOrder: (state) => {
    return state.clientInfo.clientOrder;
  },
  getClientTable: (state) => {
    return state.clientInfo.clientTable;
  },
};

const mutations = {
  setClientInfo(state, payload) {
    state.clientInfo = payload;
  },
  setByDefaultPayment(state) {
    state.clientInfo = {
      clientPaymentMethod: "",
      clientName: "",
      clientCard: "",
      clientDate: "",
      clientPassword: "",
      clientOrder: "",
      clientTable: "",
    };
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
