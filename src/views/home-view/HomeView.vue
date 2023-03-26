<template>
  <div class="home">
    <div class="main-content">
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

      <!-- ? hozircha index berilvotti balkim change bo'lar -->
      <ul class="main-content__tabs">
        <li
          v-for="(item, index) in getMenuList"
          class="main-content__tab"
          :class="{ selected: item.selected }"
          @click="selectedCategory(index)"
          :key="item.category"
        >
          {{ item.name }}
        </li>
      </ul>

      <!-- ?  -->
      <div class="main-content__dishes">
        <h2 class="main-content__dishes-title">Choose Dishes</h2>
        <select @change="selectedOption" class="main-content__dishes-select">
          <option value="all">Select dish</option>
          <option :value="item.orderDish" v-for="item in getOptionalMenu">
            {{ item.name }}
          </option>
        </select>
      </div>
      <!-- ? -->

      <div class="main-content__cards">
        <template v-for="(item, index) in getFoodList">
          <div
            class="main-content__card"
            v-if="item.isShown"
            :key="item.id"
            @click="selectedCard(item.id, index)"
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
    </div>

    <div class="right-content">right content</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
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
    };
  },
  created() {
    setInterval(this.getCurrentTime, 1000);
  },
  methods: {
    getCurrentTime() {
      const today = new Date();
      return (this.currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    },
    /* getImg(path) {
      return require(`@/assets/images/dishes/${path}`);
    }, */
  },
  computed: {
    /*  ...mapGetters(["getMenuList", "getOptionalMenu", "getFoodList"]), */
    ...mapGetters({
      getMenuList: "getMenuList",
      getOptionalMenu: "getOptionalMenu",
      getFoodList: "getFoodList",
    }),
  },
};
</script>

<style>
.home {
  padding: 24px 433px 24px 110px;
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
  /* font-family: "Barlow"; */
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
