<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMainBot from "./components/AppMainBot.vue";
import AppCardList from "./components/AppCardList.vue";


export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppMainBot,
    AppCardList
  },
};
</script>

<template>
  <AppHeader />
  <router-view />

  <AppMainBot />
</template>
