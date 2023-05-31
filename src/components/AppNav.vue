<script>
export default {
    name: "AppNav",
};
</script>

<template>
    <nav>
        <div class="container-nav d-flex justify-content-between align-items-center">
            <ul class="d-flex mt-2">
                <li><strong>Il tuo negozio</strong></li>
                <li><strong>Novità e tendenze</strong></li>
                <li><strong>Categorie</strong></li>
                <li><strong>Negozio dei punti</strong></li>
                <li><strong>Notizie</strong></li>
                <li><strong>laboratori</strong></li>
            </ul>

            <form>
                <input type="text" name="query" placeholder="Cerca..." />
                <button type="submit">Cerca</button>
            </form>

        </div>
    </nav>
</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
@import "../assets/scss/_partial/_variables.scss";

nav {
    background-color: $navbar-bg;
    opacity: 90%;
    color: white;
}

ul {
    list-style-type: none;
}

li {
    padding-left: 20px;
}

form>button {
    margin-right: 10px;
}
</style>
