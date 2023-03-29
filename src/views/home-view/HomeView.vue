<template>
  <div class="home">
    <!-- * Cheque started -->

    <div v-if="true" class="main-content__dark cheque">
      <h2 class="cheque__title">Welcome to our cafe Mr(Mrs).Smith</h2>
      <h3>Food</h3>
      <ul class="cheque__list">
        <li
          class="cheque__item d-flex align-items-center justify-content-between my-2"
        >
          <span>Birinchi taom......</span><span>..... $ 10</span>
        </li>
        <li
          class="cheque__item d-flex align-items-center justify-content-between my-2"
        >
          <span>Ikkinchi taom......</span><span>..... $ 13</span>
        </li>
        <li
          class="cheque__item d-flex align-items-center justify-content-between my-2"
        >
          <span>Uchinnchi taom......</span><span>...... $ 13</span>
        </li>
        <li
          class="cheque__item d-flex align-items-center justify-content-between my-2"
        >
          <span>To'rtinchi taom......</span><span>..... $ 13</span>
        </li>
        <li
          class="cheque__item d-flex align-items-center justify-content-between my-2"
        >
          <span>Beshinchi taom......</span><span>..... $ 13</span>
        </li>
      </ul>
      <p class="food__table-number my-2">Table № 140</p>
      <p class="food__order-type my-2">Order type: Dine in</p>
      <p class="food__payment-method my-2">Payment method: Cash</p>
      <p class="food__date my-2">Date: 3/29/2023, 12:07 PM</p>

      <h4 class="cheque__total my-2">Total: $ 46</h4>
      <div class="food__footer d-flex justify-content-center my-3">
        <button class="btn btn-primary" @click.prevent="chequeHandler">
          Thank You
        </button>
      </div>
    </div>
    <!-- * Cheque finished -->

    <!-- ? main-content started -->
    <div v-else class="main-content">
      <header class="main-content__header">
        <div>
          <h2 class="main-content__title">Jaegar Resto</h2>
          <p class="main-content__date">
            {{ days[new Date().getUTCDay()] }}, {{ new Date().getDate() }}
            {{ months[new Date().getMonth()] }}
            {{ new Date().getFullYear() }}y {{ currentTime }}
          </p>
        </div>
        <input
          type="text"
          class="main-content__input"
          placeholder="Search for food, coffee, etc.."
          v-model="inputWord"
        />
      </header>

      <ul class="main-content__tabs">
        <li
          v-for="(item, index) in tempMenuList"
          class="main-content__tab"
          :class="{ selected: item.selected }"
          @click="selectCategory(item.category, index)"
          :key="item.category"
        >
          {{ item.name }}
        </li>
      </ul>

      <div class="main-content__dishes">
        <h2 class="main-content__dishes-title">Choose Dishes</h2>
        <select @change="selectedOption" class="main-content__dishes-select">
          <option value="all">Select dish</option>
          <option :value="item.orderDish" v-for="item in getOptionalMenu">
            {{ item.name }}
          </option>
        </select>
      </div>

      <div v-if="tempFoodList" class="main-content__cards">
        <template v-for="(item, index) in tempFoodList">
          <div
            class="main-content__card"
            v-if="item.isShown"
            :key="item.id"
            @click="selectedCard(item, index)"
          >
            <div class="main-content__card-image">
              <img
                class="main-content__card-img"
                :src="item.img"
                :alt="item.title"
              />
            </div>

            <h3 class="main-content__card-title">
              {{ item.title }}
            </h3>
            <p class="main-content__card-price">$ {{ item.price }}</p>
            <p class="main-content__card-desc">
              {{ item.quantity }} {{ item.desc }}
            </p>
          </div>
        </template>
      </div>
      <div v-else class="main-content__loading">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <!-- ? main-content finished -->

    <RightSide v-if="movement" @moveToPayment="moveToPayment" />
    <Payment v-else @moveToRightSide="moveToRightSide" />
  </div>
</template>

<!-- ? selected card ni optimizatsiya qilish kerakmikan -->
<script>
import { mapGetters } from "vuex";
import RightSide from "@/views/home-view/components/right-side/RightSide.vue";
import Payment from "@/views/home-view/components/payment/Payment.vue";

export default {
  name: "HomeView",
  components: { RightSide, Payment },
  data() {
    return {
      cheque: false,
      inputWord: "",
      currentTime: "",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      tempMenuList: null,
      tempOptionalMenu: null,
      tempFoodList: null,
      movement: true,
    };
  },
  mounted() {
    this.tempFoodList = this.getFoodList.filter((item) => item.isShown);
    this.tempMenuList = this.getMenuList.map((item) => item);
  },
  created() {
    setInterval(this.getCurrentTime, 1000);
  },
  watch: {
    inputWord(newItem) {
      this.tempFoodList = this.getFoodList.filter((item) =>
        item.title.toLowerCase().includes(newItem.toLowerCase())
      );
    },
  },
  methods: {
    getCurrentTime() {
      const today = new Date();
      return (this.currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    },
    selectCategory(category, index) {
      if (category == "all-dishes") {
        this.tempMenuList = this.getMenuList.map((item) => {
          item.selected = false;
          return item;
        });
        // console.log("getMenuList=>", this.getMenuList);
        this.tempMenuList[index].selected = true;
        this.tempFoodList = this.getFoodList.map((item) => {
          item.isShown = true;
          return item;
        });
      } else {
        this.tempMenuList = this.getMenuList.map((item) => {
          item.selected = false;
          return item;
        });
        this.tempMenuList[index].selected = true;
        this.tempFoodList = this.getFoodList.map((item) => {
          if (item.category == category) {
            item.isShown = true;
          } else {
            item.isShown = false;
          }
          return item;
        });
      }
    },
    selectedOption(e) {
      const optValue = e.target.value;
      console.log("selectedOption => ", optValue);
      if (optValue == "all") {
        this.tempFoodList = this.getFoodList.map((item) => {
          item.isShown = true;
          return item;
        });
      } else {
        this.tempFoodList = this.getFoodList.filter(
          (item) => item.orderDish[optValue]
        );
      }
    },
    selectedCard(item) {
      let isThere = null;
      this.getDishesArray.forEach((element) => {
        if (element.id === item.id) isThere = true;
      });

      if (isThere) {
        this.$store.commit("incrementCount", item.id);
      } else {
        this.$store.commit("addDish", item);
      }
    },
    chequeHandler() {
      this.cheque = false;
    },
    moveToPayment() {
      if (this.movement) this.movement = false;
      else this.movement = true;
    },
    moveToRightSide() {
      if (this.movement) this.movement = false;
      else this.movement = true;
    },
  },
  computed: {
    /*  ...mapGetters(["getMenuList", "getOptionalMenu", "getFoodList"]), */
    ...mapGetters({
      getMenuList: "getMenuList",
      getOptionalMenu: "getOptionalMenu",
      getFoodList: "getFoodList",
      getDishesArray: "getDishesArray",
    }),
  },
};
</script>

<style>
.home {
  padding: 24px 433px 24px 110px;
}
/* cheque uchun */
.cheque {
  color: #fff;
  border: 2px solid #fafafa;
  padding: 1rem;
  border-radius: 8px;
}
.cheque__title {
  text-align: center;
  margin-bottom: 1rem;
}

.cheque__total {
  text-align: right;
}
/* main-content uchun */
.main-content {
  min-height: 100vh;
}
.main-content__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.main-content__title {
  font-family: "Barlow-SemiBold";
  font-size: 28px;
  line-height: 140%;
  color: #fff;
  margin-bottom: 4px;
}
.main-content__date {
  font-size: 16px;
  line-height: 140%;
  color: #e0e6e9;
}
.main-content__input {
  display: inline-block;
  width: 220px;
  padding: 14px;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
}
.main-content__tabs {
  display: flex;
  align-items: center;
  column-gap: 32px;
  row-gap: 58px;
  border-bottom: 1px solid #393c49;
  overflow-y: auto;
}
.main-content__tab {
  font-family: "Barlow-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #fff;
  cursor: pointer;
  padding-bottom: 14px;
}
.main-content__tab.selected {
  color: #ea7c69;
  border-radius: 2px;
  border-bottom: 3px solid #ea7c69;
}
.main-content__dishes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
}
.main-content__dishes-title {
  font-family: "Barlow-SemiBold";
  font-size: 20px;
  line-height: 140%;
  color: #fff;
}
.main-content__dishes-select {
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-family: "Barlow-Medium";
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  padding: 15px 14px;
}

.main-content__cards {
  margin-top: 58px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
}
.main-content__card {
  max-width: 192px;
  /* max-width: calc(100% / 3 - 28px); */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #1f1d2b;
  border-radius: 16px;
  text-align: center;
  padding: 24px;
  /* margin-top: 2.5rem; */
  cursor: pointer;
}
.main-content__card-image {
  margin: -36px auto 0;
  max-width: 150px;
  min-width: 75px;
}
.main-content__card-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 50%;
}
.main-content__card-title {
  margin-top: 14px;
  font-family: "Barlow-Medium";
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #fff;
}
.main-content__card-price {
  margin-top: 8px;
  font-size: 14px;
  line-height: 140%;
  color: #fff;
}
.main-content__card-desc {
  margin-top: 4px;
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
  /* opacity: 0.2; */
}

.main-content__loading {
  color: #fff;
  text-align: center;
}
</style>

<!-- 
  if (this.getDishesArray.length == 0) {
        this.$store.commit("addDish", item);
      } else if (isThere) {
        this.getDishesArray[index].counter++;
      } else {
        this.$store.commit("addDish", item);
      }
 -->
