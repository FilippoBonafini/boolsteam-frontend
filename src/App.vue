<script>
import AppMainBot from "./components/AppMainBot.vue";
import AppMainTop from "./components/AppMainTop.vue";
import AppCardList from "./components/AppCardList.vue";

// IMPORTIAMO LO STORE DI DATI
import { store } from "./store";

export default {
  name: "App",
  components: {
    AppMainBot,
    AppMainTop,
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
  <AppMainTop />
  <AppMainBot />
</template>
