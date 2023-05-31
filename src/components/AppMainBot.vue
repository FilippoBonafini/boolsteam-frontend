<script>
import AppCardList from "./AppCardList.vue";
import AppFooter from "./AppFooter.vue";

export default {
    name: "AppMainBot",
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