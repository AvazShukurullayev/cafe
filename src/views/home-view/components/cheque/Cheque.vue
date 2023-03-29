<template>
  <div class="d-flex justify-content-center">
    <div class="cheque">
      <h2 class="cheque__title">
        Welcome to our cafe Mr(Mrs).{{ getClientName }}
      </h2>
      <h3>Food</h3>
      <ul class="cheque__list">
        <li
          class="cheque__item d-flex justify-content-between my-2"
          v-for="item in getDishesArray"
        >
          <span>{{ item.title }}......</span>
          <b>......$ {{ item.sum }}</b>
        </li>
      </ul>

      <p class="d-flex justify-content-between my-2">
        <span>Table №......</span>
        <b>......{{ getClientTable }}</b>
      </p>
      <p class="d-flex justify-content-between my-2">
        <span>Order type:......</span>
        <b>......{{ getClientOrder }}</b>
      </p>
      <p class="d-flex justify-content-between my-2">
        <span>Payment method:......</span>
        <b>......{{ getClientPaymentMethod }}</b>
      </p>
      <p class="d-flex justify-content-between my-2">
        <span>Credit card:......</span>
        <b>......{{ getClientCard }}</b>
      </p>
      <p class="d-flex justify-content-between my-2">
        <span>Date:......</span>
        <b>......{{ getClientDate }}</b>
      </p>

      <h4 class="cheque__total my-2">
        Total: <b>$ {{ getTotal }}</b>
      </h4>
      <div class="cheque__footer d-flex justify-content-center my-3">
        <button
          class="cheque__cancel mx-2"
          @click.prevent="$emit('cancelChequeHandler')"
        >
          Cancel
        </button>
        <button class="cheque__thanks" @click.prevent="$emit('chequeHandler')">
          Thanks & Print
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Cheque",
  props: {
    getDishesArray: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getClientPaymentMethod: "getClientPaymentMethod",
      getClientName: "getClientName",
      getClientCard: "getClientCard",
      getClientDate: "getClientDate",
      getClientPassword: "getClientPassword",
      getClientOrder: "getClientOrder",
      getClientTable: "getClientTable",
      getTotal: "getTotal",
    }),
  },
};
</script>

<style>
.cheque {
  color: #fff;
  border: 2px solid #fafafa;
  padding: 1rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
}
.cheque__title {
  text-align: center;
  margin-bottom: 1rem;
}
.cheque__cancel,
.cheque__thanks {
  display: inline-block;
  max-width: 175px;
  width: 100%;
  border: 1px solid #ea7c69;
  border-radius: 8px;
  padding: 14px 0;
  text-align: center;
  font-family: "Barlow-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #ea7c69;
  background-color: transparent;
  transition: all 0.2s linear;
}
.cheque__thanks {
  background: #ea7c69;
  color: #fafafa;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
}
.cheque__cancel:hover {
  color: #ea7c69;
  background-color: transparent;
}
.cheque__thanks:hover {
  color: #fafafa;
  background-color: #ea7c69;
}
.cheque__total {
  text-align: right;
}
</style>
