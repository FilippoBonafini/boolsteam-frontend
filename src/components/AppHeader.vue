<template>
  <header>
    <div class="container-header container d-flex justify-content-between align-items-center">
      <div class="logo-header">logo</div>

      <nav class="header-nav">
        <a href="">NEGOZIO</a>
        <a href="">COMUNITA'</a>
        <a href="">INFORMAZIONI</a>
        <a href="">ASSISTENZA</a>
      </nav>

      <div class="redirect">
        <ul class="d-flex">
          <li class="button-header"><a href="">Istalla Steam</a></li>
          <li class="login"><a href="">Accedi</a></li>
          <li class="lang"><a href="">Lingua</a> <!--Inserire icona--></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
@import '../assets/scss/_partial/_variables.scss';

header {
  color: $header-text;
  background-color: $header-background;
}

.container-header {
  height: 100px;
}

/*questa cosa è molto brutta ma non riesco a sistemarlo al volo*/
.header-nav {
  margin-left: -60px;
}

.logo-header {
  height: 50px;
  background-color: yellowgreen;
  width: 150px;
}

.header-nav>a {
  padding: 20px;
}

a {
  color: $header-text ;
}

.header-nav>a:hover {
  color: white;
}

/*questa cosa è molto brutta ma non riesco a sistemarlo al volo*/
.redirect {
  margin-top: -50px;
}

ul {
  list-style-type: none;
}

li {
  padding-left: 10px;
  padding-right: 10px;
}

.button-header {
  background-color: $header-button;
}
</style>
