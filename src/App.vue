<script>
// IMPORTIAMO LO STORE DI DATI
import { store } from "./store";
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
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
          this.store.game_selected = response.data.results[1];
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
  <AppHeader />
  <router-view />
  <AppFooter />
</template>
