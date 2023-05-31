<script>
import AppHeader from "./AppHeader.vue";
import AppNav from "./AppNav.vue";
import AppGameForYou from "./AppGameForYou.vue";

export default {
    name: "AppMainTop",
    components: {
        AppHeader,
        AppNav,
        AppGameForYou
    },
};
</script>

<template>
    <AppHeader />
    <AppNav />
    <AppGameForYou />
</template>