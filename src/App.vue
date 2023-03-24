<template>
  <div class="app">
    <LeftSide />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import LeftSide from "@/views/left-side/LeftSide.vue";

export default {
  name: "App",
  components: { LeftSide },
};
</script>

<style></style>
