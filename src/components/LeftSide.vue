<template>
  <div class="left-side">
    <div class="left-side__links">
      <RouterLink :to="{ name: 'home' }" class="left-side__link">
        <img src="@/assets/images/svg/logo.svg" alt="logo" />
      </RouterLink>

      <div class="left-side__links-list">
        <RouterLink
          v-for="item in menuLists"
          :to="{ name: item.name }"
          class="left-side__link"
          :key="item.name"
        >
          <img :src="item.image" :alt="item.name" />
        </RouterLink>
      </div>

      <RouterLink :to="{ name: 'exit' }" class="left-side__link">
        <img src="@/assets/images/svg/exit.svg" alt="exit" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "LeftSide",
  data() {
    return {
      menuLists: [
        {
          image: new URL("@/assets/images/svg/home.svg", import.meta.url),
          name: "home",
        },
        {
          image: new URL("@/assets/images/svg/discount.svg", import.meta.url),
          name: "discount",
        },
        {
          image: new URL("@/assets/images/svg/dashboard.svg", import.meta.url),
          name: "dashboard",
        },
        {
          image: new URL("@/assets/images/svg/message.svg", import.meta.url),
          name: "message",
        },
        {
          image: new URL(
            "@/assets/images/svg/notification.svg",
            import.meta.url
          ),
          name: "notification",
        },
        {
          image: new URL("@/assets/images/svg/settings.svg", import.meta.url),
          name: "settings",
        },
      ],
    };
  },
};
</script>

<style scoped>
.left-side {
  max-width: 104px;
  padding: 24px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  /* min-height: 100vh; */
  /* height: 100%; */
  overflow-y: auto;
  background-color: #1f1d2b;
}
.left-side__links {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.left-side__links-list {
  /* height: 100%; */
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* row-gap: 2rem; */
}
.left-side__link {
  margin: 1rem 0;
}
</style>
