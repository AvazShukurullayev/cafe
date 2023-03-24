<template>
  <div class="left-side">
    <RouterLink :to="{name: 'home'}">logo</RouterLink>
    <div class="left-side__middle">
        <Routerlink :to="{name: 'home'}">home</Routerlink>
        <RouterLink :to="{name: 'discount'}">discount</RouterLink>
        <RouterLink :to="{name:'dashboard'}">dashboard</RouterLink>
        <RouterLink :to="{name: 'message'}">Message</RouterLink>
        <RouterLink :to="{name: 'notification'}">notification</RouterLink>
        <RouterLink :to="{name: 'settings'}">settings</RouterLink>
    </div>
    <RouterLink :to="{name: 'exit'}">exit</RouterLink>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
export default {
  name: "LeftSide",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.left-side {
  max-width: 104px;
  padding: 24px;
}
</style>
