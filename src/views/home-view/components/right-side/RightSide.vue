<template>
  <div class="right-side">
    <div class="right-side__header">
      <h2 class="right-side__title">Orders #41023</h2>
      <div class="right-side__services">
        <!--? radio type value beradi  -->
        <template v-for="(item, index) in serviceList">
          <input
            type="radio"
            :id="'check' + index"
            class="right-side__input"
            name="service"
            v-model="serviceValue"
            :value="item.service"
          />
          <label :for="'check' + index" class="right-side__label">
            {{ item.title }}
          </label>
        </template>
      </div>
      <div class="right-side__info">
        <p class="right-side__info-text">Item</p>
        <div>
          <p class="right-side__info-text">Qty</p>
          <p class="right-side__info-text">Price</p>
        </div>
      </div>
    </div>
    <div class="right-side__meals">
      <Meal
        v-for="(item, index) in mealArray"
        :item="item"
        :index="index"
        :mealArray="mealArray"
        @removeMeal="$emit('removeItem', $event)"
      />
    </div>
    <div class="right-side__footer">
      <div>
        <!-- ? v-for qilish kere -->
        <div class="right-side__footer-card d-flex">
          <p class="right-side__footer-discount">Discount</p>
          <p class="right-side__footer-price">$ {{ discount }}</p>
        </div>
        <div class="right-side__footer-card d-flex">
          <p class="right-side__footer-discount">Service</p>
          <p class="right-side__footer-price">% {{ service }}</p>
        </div>
        <div class="right-side__footer-card d-flex">
          <p class="right-side__footer-discount">Sub total</p>
          <p class="right-side__footer-price">$ {{ total() }}</p>
        </div>
      </div>
      <div class="mt-2">
        <button @click="$emit('moveToPayment')" class="btn btn-primary w-100 payment_btn">
          Continue to Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import Meal from "./meal/Meal.vue";

import { mapGetters } from "vuex";
export default {
  name: "RightSide",
  // props: ["mealArray"],
  // components: { Meal },
  data() {
    return {
      // orderNumber: 34562,
      mealSum: 100,
      service: 0,
      discount: 0,
      serviceValue: null,
      serviceList: [
        { title: "Dine In", service: 10, icon: "" },
        { title: "To Go", service: 15, icon: "" },
        { title: "Delivery", service: 20, icon: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getMealArray"]),
  },
  methods: {
    total(par) {
      console.log("rightside => ", par);
    },
  },
};
</script>

<style>
.right-side {
  width: 409px;
  padding: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1f1d2b;
  border-radius: 8px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
}
.right-side__header {
  border-bottom: 1px solid #393c49;
}
.right-side__title {
  font-family: "Barlow-SemiBold";
  font-size: 20px;
  line-height: 140%;
  color: #fff;
  margin-bottom: 24px;
}
.right-side__services {
  margin-bottom: 24px;
}
.right-side__input {
  position: absolute;
  opacity: 0;
  /* display: none; */
}
.right-side__label {
  padding: 7px 12px;
  /* background: transparent; */
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-family: "Barlow-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #fff;
  margin-right: 8px;
  cursor: pointer;
}
.right-side__input[type="radio"]:checked + label {
  background: #ea7c69;
}
.right-side__filter {
  display: flex;
  column-gap: 8px;
  margin-bottom: 24px;
}
.right-side__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
}

.right-side__info > div {
  display: flex;
  column-gap: 43px;
}
.right-side__info-text {
  font-family: "Barlow-SemiBold";
  font-size: 16px;
  line-height: 140%;
  color: #fff;
  margin: 0;
}

.rightSide__meals {
  scroll-behavior: auto;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgb(232, 14, 14);
}
.right-side__footer {
  border-top: 1px solid #393c49;
  padding-top: 24px;
}
.right-side__footer-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-side__footer-discount {
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
}
.right-side__footer-price {
  font-family: "Barlow-Medium";
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
}
</style>
