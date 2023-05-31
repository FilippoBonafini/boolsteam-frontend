<script>
export default {
  name: "AppGameMain",
};
</script>

<template>
  <div>
    <h2 class="m-0 py-3">GIOCHI</h2>

    <div class="container-game d-flex">

      <div class="img-price d-flex align-items-end justify-content-end">
        img
        <div class="discount">sconto</div>
      </div>

      <div class="card-film d-flex ">
        <div class="info">
          <h3>Titolo</h3>
          <div class="tag">tag</div>
          <div>
            <small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme-->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
@import "../assets/scss/_partial/_variables.scss";

h2 {
  color: white;
}



.img-price {
  height: 400px;
  background-color: bisque;
  width: 200px;
  margin: 20px;
}

.discount {
  color: $card-text-discount;
  background-color: $card-bg-bg-discount;
}

.card-film {
  color: $card-text;
}
</style>
