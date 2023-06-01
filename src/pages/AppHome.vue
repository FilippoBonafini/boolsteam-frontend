<template>
  <AppJumbo />
  <AppCardList />
</template>

<script>
import AppCardList from "../components/AppCardList.vue";
import AppJumbo from "../components/AppJumbo.vue";

export default {
  name: "AppHome",
  components: { AppJumbo, AppCardList },
};
</script>
