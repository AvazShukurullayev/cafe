<template>
  <div class="app">
    <LeftSide />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import LeftSide from "./components/LeftSide.vue";

export default {
  name: "App",
  components: { LeftSide },
};
</script>

<style></style>
