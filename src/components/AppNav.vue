<script>
export default {
  name: "AppNav",
};
</script>

<template>
  <nav>
    <div
      class="container-nav d-flex justify-content-between align-items-center"
    >
      <ul class="d-flex mt-2">
        <li>
          <strong><a href="">Il tuo negozio</a></strong>
        </li>
        <li>
          <strong> <a href="">Novità e tendenze</a> </strong>
        </li>
        <li>
          <strong> <a href="">Categorie</a> </strong>
        </li>
        <li>
          <strong> <a href="">Negozio dei punti</a> </strong>
        </li>
        <li>
          <strong> <a href="">Notizie</a> </strong>
        </li>
        <li>
          <strong> <a href="">Laboratori</a> </strong>
        </li>
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

strong > a {
  color: white;
}

form > button {
  margin-right: 10px;
}
</style>
