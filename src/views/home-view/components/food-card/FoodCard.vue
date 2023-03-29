<template>
  <div class="main-content__cards">
    <template v-for="item in tempFoodList">
      <div
        class="main-content__card"
        v-if="item.isShown"
        :key="item.id"
        @click="$emit('selectedCard', item)"
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
</template>

<script>
export default {
  name: "FoodCard",
  props: {
    tempFoodList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
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
</style>
