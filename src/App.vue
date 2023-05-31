<script>
import AppMainBot from "./components/AppMainBot.vue";
import AppMainTop from "./components/AppMainTop.vue";
import AppCardList from "./components/AppCardList.vue";

// IMPORTIAMO LO STORE DI DATI
import { store } from "./store";
import axios from "axios";

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
  methods: {
    axiosCall(api) {
      axios
        .get(api)
        .then((response) => {
          this.store.games = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.axiosCall(this.store.api_url);
  },
};
</script>

<template>
  <AppMainTop />
  <AppMainBot />
</template>
