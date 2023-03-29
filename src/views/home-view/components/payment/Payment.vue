<template>
  <div class="payment">
    <header class="payment__header">
      <h2 class="payment__title">Payment</h2>
      <p class="payment__subtitle">3 payment methods available</p>
    </header>

    <div class="payment__method">
      <h3 class="payment__method-title">
        Payment Method: {{ clientInfo.paymentMethod }}
      </h3>
      <div class="payment__cards">
        <template v-for="(item, index) in paymentList">
          <input
            type="radio"
            class="payment__input"
            name="payment"
            v-model="clientInfo.paymentMethod"
            :id="'check' + index"
            :value="item.value"
            required
          />
          <label :for="'check' + index" class="payment__label">
            <img :src="item.icon" :alt="item.label" />
            <p>{{ item.label }}</p>
          </label>
        </template>
      </div>

      <div class="payment__part">
        <label class="payment__name" for="clientName">Cardholder Name</label>
        <input
          type="text"
          id="clientName"
          class="payment__part-input"
          placeholder="Levi Ackerman"
          v-model="clientInfo.clientName"
        />
      </div>
      <div class="payment__part">
        <label class="payment__name" for="clientCard">Card Number</label>
        <input
          type="password"
          id="clientCard"
          class="payment__part-input"
          placeholder="2564 1421 0897 1244"
          v-model="clientInfo.clientCard"
        />
      </div>

      <div class="d-flex d-flex justify-content-between mb-4">
        <div class="payment__part">
          <label class="payment__name" for="clientDate">Expiration Date</label>
          <input
            type="date"
            class="payment__part-input"
            id="clientDate"
            placeholder="02/2022"
            v-model="clientInfo.clientDate"
          />
        </div>
        <div class="payment__part">
          <label class="payment__name" for="clientPassword">CVV</label>
          <input
            type="password"
            class="payment__part-input"
            id="clientPassword"
            placeholder="*********"
            v-model="clientInfo.clientPassword"
          />
        </div>
      </div>

      <div class="payment__order d-flex justify-content-between">
        <div class="payment__part">
          <label class="payment__name" for="clientOrder">Order type</label>
          <select
            class="payment__part-select"
            name="clientOrder"
            id="clientOrder"
            placeholder="Order type"
            v-model="clientInfo.clientOrder"
          >
            <option disabled value="">Please select one</option>
            <option value="dinein">Dine in</option>
            <option value="togo">To go</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <div class="payment__part">
          <label class="payment__name" for="clientTable">Table №</label>
          <input
            type="number"
            class="payment__part-input"
            id="clientTable"
            placeholder="140"
            v-model="clientInfo.clientTable"
          />
        </div>
      </div>
    </div>

    <div class="payment__btns">
      <button class="payment__cancel" @click="$emit('moveToRightSide')">
        Cancel
      </button>
      <button class="payment__confirm" @click.prevent="confirmPayment">
        Confirm payment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  props: {},
  components: {},
  data() {
    return {
      cheque: false,
      clientInfo: {
        paymentMethod: "",
        clientName: "",
        clientCard: "",
        clientDate: "",
        clientPassword: "",
        clientOrder: "",
        clientTable: "",
      },
      paymentList: [
        {
          label: "Credit card",
          value: "creditcard",
          icon: new URL("@/assets/images/svg/credit-card.svg", import.meta.url),
        },
        {
          label: "Paypal",
          value: "paypalcard",
          icon: new URL("@/assets/images/svg/paypal-card.svg", import.meta.url),
        },
        {
          label: "Cash",
          value: "cash",
          icon: new URL("@/assets/images/svg/cash.svg", import.meta.url),
        },
      ],
    };
  },
  methods: {
    confirmPayment() {
      if (this.cheque) this.cheque = false;
      else this.cheque = true;
    },
    closeCheque() {
      if (this.cheque) this.cheque = false;
      else this.cheque = true;
    },
  },
};
</script>

<style>
.payment {
  width: 405px;
  padding: 20px 23px 24px 24px;
  min-height: 100vh;
  background: #1f1d2b;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
}
.payment__header {
  border-bottom: 1px solid #393c49;
  margin-bottom: 24px;
}
.payment__title {
  font-family: "Barlow-SemiBold";
  font-size: 28px;
  line-height: 140%;
  color: #fff;
  margin-bottom: 8px;
}
.payment__subtitle {
  font-family: "Barlow-Medium";
  font-size: 16px;
  line-height: 140%;
  color: #abbbc2;
  margin-bottom: 24px;
}
.payment__method-title {
  font-family: "Barlow-SemiBold";
  font-size: 20px;
  line-height: 140%;
  color: #fff;
  margin-bottom: 16px;
}
.payment__cards {
  display: flex;
  gap: 8px;
}
.payment__label {
  max-width: 101px;
  width: 100%;
  text-align: center;
  padding: 15px 0 10px;
  background: #252836;
  border: 1px solid #abbbc2;
  border-radius: 8px;
  position: relative;
}
.payment__label p {
  font-family: "Barlow-Medium";
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  margin-top: 2px;
}
.payment__input {
  position: absolute;
  top: 6px;
  right: 6px;
  opacity: 0;
}
.payment__input[type="radio"]:checked + .payment__label {
  background: #ea7c69;
  border-color: #fff;
}
.payment__btns {
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
.payment__part {
  margin-top: 16px;
}
.payment__name {
  font-family: "Barlow-Medium";
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  margin-bottom: 8px;
  cursor: pointer;
}
.payment__part-input {
  display: block;
  width: 100%;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-size: 14px;
  line-height: 140%;
  color: #e0e6e9;
  padding: 14px;
}
.payment__order {
  margin-top: 16px;
  border-top: 1px solid #393c49;
}
.payment__part-select {
  display: block;
  padding: 14px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-size: 14px;
  line-height: 140%;
  color: #e0e6e9;
}
.payment__cancel,
.payment__confirm {
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
.payment__confirm {
  background: #ea7c69;
  color: #fafafa;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
}
.payment__cancel:hover {
  color: #ea7c69;
  background-color: transparent;
}
.payment__confirm:hover {
  color: #fafafa;
  background-color: #ea7c69;
}
</style>
