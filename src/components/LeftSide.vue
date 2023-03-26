<template>
  <div class="left-side">
    <div class="left-side__links">

      <RouterLink :to="{ name: 'home' }">
        <img src="@/assets/images/svg/logo.svg" alt="logo" />
      </RouterLink>

      <div class="left-side__links-list">

        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/images/svg/home.svg" alt="home" />
        </RouterLink>
        <RouterLink :to="{ name: 'discount' }">
          <img src="@/assets/images/svg/discount.svg" alt="discount" />
        </RouterLink>
        <RouterLink :to="{ name: 'dashboard' }">
          <img src="@/assets/images/svg/dashboard.svg" alt="dashboard" />
        </RouterLink>
        <RouterLink :to="{ name: 'message' }">
          <img src="@/assets/images/svg/message.svg" alt="message" />
        </RouterLink>
        <RouterLink :to="{ name: 'notification' }">
          <img src="@/assets/images/svg/notification.svg" alt="notification" />
        </RouterLink>
        <RouterLink :to="{ name: 'settings' }">
          <img src="@/assets/images/svg/settings.svg" alt="settings" />
        </RouterLink>

      </div>

      <RouterLink :to="{ name: 'exit' }">
        <img src="@/assets/images/svg/exit.svg" alt="exit" />
      </RouterLink>
      
    </div>
    <!-- <RouterView /> -->
  </div>
</template>
<!-- ? v-for qilishim kerak edi -->
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "LeftSide",
  data() {
    return {
      /* menuLists: [
        { image: "house.svg", link: "/" },
        { image: "discount.svg", link: "/discount" },
        { image: "dashboard.svg", link: "/dashboard" },
        { image: "message.svg", link: "/message" },
        { image: "notification.svg", link: "/notification" },
        { image: "settings.svg", link: "/settings" },
      ],  */
    };
  },
  methods: {},
};
</script>

<style scoped>
.left-side {
  max-width: 104px;
  padding: 24px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  min-height: 100vh;
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
  height: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
