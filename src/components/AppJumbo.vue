<script>
import AppGameMain from "./AppGameMain.vue";
import AppNav from "./AppNav.vue";

export default {
  name: "AppJumbo",
  components: { AppNav, AppGameMain },
};
</script>

<template>
  <main class="pt-4">
    <div class="container">
      <AppNav />
      <AppGameMain />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
@import "../assets/scss/_partial/_variables.scss";
main {
  background-color: black;
}
</style>
