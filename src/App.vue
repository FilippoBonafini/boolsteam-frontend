<script>
import AppMainBot from "./components/AppMainBot.vue";
import AppMainTop from "./components/AppMainTop.vue";

export default {
  name: "App",
  components: {
    AppMainBot,
    AppMainTop,
  },
};
</script>

<template>
  <AppMainTop />
  <AppMainBot />
</template>
