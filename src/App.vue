<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMainBot from "./components/AppMainBot.vue";
import AppCardList from "./components/AppCardList.vue";
import AppNav from "./components/AppNav.vue";
import AppGameForYou from "./components/AppGameForYou.vue";
import AppMainTop from "./components/AppMainTop.vue";


export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppMainBot,
    AppCardList,
    AppNav,
    AppGameForYou,
    AppMainTop
  },
};
</script>

<template>
  <AppMainTop />
  <AppMainBot />
</template>
