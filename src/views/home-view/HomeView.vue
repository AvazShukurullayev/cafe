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
          class="main-content__input form-control"
          placeholder="Search for food, coffee, etc.."
          v-model="inputWord"
        />
      </header>
    </div>

    <div class="right-content">right content</div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      currentTime: "",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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
  methods: {},
};
</script>

<style>
.home {
  padding-left: 110px;
}

</style>
