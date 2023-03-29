<template>
  <div class="home">
    <Cheque
      v-if="cheque"
      class="main-content__dark"
      @cancelChequeHandler="cancelChequeHandler"
      @chequeHandler="chequeHandler"
      :getDishesArray="getDishesArray"
    />

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

      <FoodCard
        v-if="tempFoodList"
        :tempFoodList="tempFoodList"
        @selectedCard="selectedCard"
      />
      <Loader v-else />
    </div>

    <RightSide
      v-if="movement"
      @moveToPayment="moveToPayment"
      :getDishesArray="getDishesArray"
      :getTotal="getTotal"
    />
    <Payment
      v-else
      @moveToRightSide="moveToRightSide"
      @confirmPayment="confirmPayment"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cheque from "./components/cheque/Cheque.vue";
import FoodCard from "./components/food-card/FoodCard.vue";
import Loader from "./components/loader/Loader.vue";
import RightSide from "@/views/home-view/components/right-side/RightSide.vue";
import Payment from "@/views/home-view/components/payment/Payment.vue";

export default {
  name: "HomeView",
  components: { Cheque, FoodCard, Loader, RightSide, Payment },
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
      this.$store.commit("setByDefaultRightSide");
      this.$store.commit("setByDefaultPayment");
      this.cheque = false;
    },
    cancelChequeHandler() {
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
    confirmPayment() {
      this.cheque = true;
    },
  },
  computed: {
    /*  ...mapGetters(["getMenuList", "getOptionalMenu", "getFoodList"]), */
    ...mapGetters({
      getMenuList: "getMenuList",
      getOptionalMenu: "getOptionalMenu",
      getFoodList: "getFoodList",
      getDishesArray: "getDishesArray",
      getTotal: "getTotal",
    }),
  },
};
</script>

<style>
.home {
  padding: 24px 433px 24px 110px;
}
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
</style>
