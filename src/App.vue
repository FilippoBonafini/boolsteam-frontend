<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMainBot from "./components/AppMainBot.vue";
import AppCardList from "./components/AppCardList.vue";

// IMPORTIAMO LO STORE DI DATI
import { store } from "./store";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppMainBot,
    AppCardList,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <AppHeader />
  <router-view />

  <AppMainBot />
</template>
