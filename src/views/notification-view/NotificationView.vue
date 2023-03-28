<template>
  <div class="notification">
    <h2 class="notification__title">Notification View</h2>
  </div>
</template>

<script>
export default {
  name: "NotificationView",
};
</script>

<style>
.notification {
  padding-left: 110px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.notification__title {
  color: #f3f3f3;
  font-size: 60px;
}
</style>
