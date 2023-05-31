<script>
import AppCardList from "./components/AppCardList.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
    name: "App",
    components: {
        AppCardList,
        AppFooter,
    },
};
</script>

<template>
    <AppCardList />

    <AppFooter />
</template>