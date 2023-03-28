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
      <div class="meal" v-for="(item, index) in getDishesArray">
        <div class="meal__left">
          <div class="meal__left-top d-flex">
            <div class="d-flex">
              <img class="meal__left-img" :src="item.img" :alt="item.title" />
              <div>
                <p class="meal__left-text">{{ item.title }}</p>
                <p class="meal__left-price">$ {{ item.price }}</p>
              </div>
            </div>
            <input
              type="number"
              class="meal__left-counter"
              min="1"
              :max="item.maxLimit"
              v-model="item.counter"
            />
            <!--? type="number" boganda e (eyler soni) ni togirlab qoyish kerak  -->
          </div>
          <div class="meal__left-bottom">
            <input
              class="meal__left-comment"
              v-model="item.comment"
              placeholder="Please, write comments"
            />
          </div>
        </div>
        <div class="meal__right">
          <p class="meal__right-sum">
            $ {{ (item.sum = Number((item.price * item.counter).toFixed(2))) }}
          </p>

          <button class="basket" @click="removeDish(item.id)">
            <img src="@/assets/images/basket/basket.svg" alt="basket" />
          </button>
        </div>
      </div>
    </div>
    <div class="right-side__footer">
      <div>
        <!-- ? v-for qilish kere -->
        <div class="right-side__footer-card d-flex">
          <p class="right-side__footer-discount">Discount</p>
          <p class="right-side__footer-price">$ {{ discount }}</p>
        </div>
        <div class="right-side__footer-card d-flex">
          <p class="right-side__footer-discount">Sub total</p>
          <p class="right-side__footer-price">$ {{ total }}</p>
        </div>
      </div>
      <div class="mt-2">
        <button @click="$emit('moveToPayment')" class="payment__btn">
          Continue to Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RightSide",
  props: {},
  components: {},
  data() {
    return {
      dishSum: 0,
      discount: 0,
      serviceValue: "",
      serviceList: [
        { title: "Dine In", service: 10, icon: "" },
        { title: "To Go", service: 15, icon: "" },
        { title: "Delivery", service: 20, icon: "" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getDishesArray: "getDishesArray",
    }),
    total() {
      let summa = 0;
      this.getDishesArray.forEach((item) => (summa += item.sum));
      return Number(summa.toFixed(2));
    },
  },
  methods: {
    removeDish(id) {
      this.$store.commit("removeDish", id);
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

.right-side__meals {
  scroll-behavior: auto;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgb(232, 14, 14);
}

.meal {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  /* align-content: space-evenly; */
  gap: 10px;
}
.meal__left {
  max-width: 297px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.meal__left-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.meal__left-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 6px;
}
.meal__left-text {
  font-family: "Barlow-Medium";
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  margin-bottom: 4px;
}
.meal__left-price {
  font-family: "Barlow-Medium";
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
}
.meal__left-counter {
  max-width: 52px;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-family: "Barlow-Medium";
  line-height: 140%;
  color: #fff;
  outline: none;
}
.meal__left-comment {
  width: 100%;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  line-height: 140%;
  color: #e0e6e9;
  outline: none;
}
.meal__right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.meal__right-sum {
  font-family: "Barlow-Medium";
  line-height: 140%;
  color: #fff;
  padding-top: 14px;
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

.basket {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ea7c69;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
}

.payment__btn {
  width: 100%;
  background: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.3);
  border-radius: 8px;
  padding: 14px;
  border: none;
  outline: none;
  font-family: "Barlow-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #fafafa;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.payment__btn:hover {
  background: #f37059;
}
</style>
