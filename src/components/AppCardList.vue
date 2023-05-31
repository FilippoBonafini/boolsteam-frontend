<script>
export default {
  name: "AppCardList",
};
</script>

<template>
  <main>
    <div class="container container-main-bot">
      <h3 class="py-4">I GIOCHI:</h3>

      <div class="contaier container-card-list">
        <div class="card-film d-flex justify-content-between align-items-end">
          <!--il contaier img poi va tolto-->
          <div class="info-img d-flex">
            <div class="container-img">img</div>

            <div class="info">
              <h3>Titolo</h3>
              <div class="tag">tag</div>
              <div>
                <small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme-->
              </div>
            </div>
          </div>

          <div class="discount">sconto</div>
        </div>
      </div>

      <div class="contaier container-card-list">
        <div class="card-film d-flex justify-content-between align-items-end">
          <!--il contaier img poi va tolto-->
          <div class="info-img d-flex">
            <div class="container-img">img</div>

            <div class="info">
              <h3>Titolo</h3>
              <div class="tag">tag</div>
              <div>
                <small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme-->
              </div>
            </div>
          </div>

          <div class="discount">sconto</div>
        </div>
      </div>

      <div class="contaier container-card-list">
        <div class="card-film d-flex justify-content-between align-items-end">
          <!--il contaier img poi va tolto-->
          <div class="info-img d-flex">
            <div class="container-img">img</div>

            <div class="info">
              <h3>Titolo</h3>
              <div class="tag">tag</div>
              <div>
                <small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme-->
              </div>
            </div>
          </div>

          <div class="discount">sconto</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
@import "../assets/scss/_partial/_variables.scss";

main {
  background-color: $main-bg;
  color: $card-text;
}

.container-main-bot>h3 {
  color: white;
}

.container-card-list {
  background-color: $card-bg;
  padding-top: 5px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.3);
}

.container-card-list:last-child {
  padding-bottom: 30px;
}

.container-img {
  width: 200px;
  height: 100px;
  background-color: orchid;
  margin: 5px;
}

.tag {
  background-color: $card-tag-bg;
  text-align: center;
}

.discount {
  color: $card-text-discount;
  background-color: $card-bg-bg-discount;
  font-size: 25px;
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
