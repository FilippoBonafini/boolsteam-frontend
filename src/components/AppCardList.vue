<script>
import { store } from "../store";
export default {
  name: "AppCardList",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div class="container container-main-bot">
      <h3 class="py-4">I GIOCHI:</h3>

      <div class="contaier container-card-list">
        <div
          v-for="game in store.games"
          class="card-film d-flex justify-content-between align-items-end"
        >
          <!--il contaier img poi va tolto-->
          <div class="info-img d-flex">
            <div class="container-img">
              <img :src="store.img_prefix + game.image" alt="" />
            </div>

            <div class="info">
              <h3>{{ game.title }}</h3>
              <div class="d-flex gap-2">
                <div class="tag" v-for="tag in game.genres">
                  {{ tag.name }}
                </div>
              </div>

              <div>
                <small>{{ game.release_date }}</small
                ><!--aggiungere l'icona delle piattaforme-->
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center gap-1">
            <div class="discount">-{{ game.sconto }}%</div>
            <div class="discount-price text-center">
              <div>{{ game.price }}$</div>
              <div class="final-price">122</div>
            </div>
          </div>
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
  padding-bottom: 30px;
}

.container-main-bot > h3 {
  color: white;
}

.container-img {
  height: 100px;
  //   background-color: orchid;
  margin: 5px;

  img {
    max-height: 100%;
  }
}

.card-film {
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.3);
  background-color: $card-bg;
  margin-bottom: 15px;
}

.tag {
  background-color: $card-tag-bg;
  text-align: center;
}

.discount {
  color: $card-text-discount;
  background-color: $card-bg-bg-discount;
  font-size: 25px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
}
.discount-price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  background-color: $card-bg-discount-price;
}

.final-price {
  color: $card-text-discount;
  font-weight: bolder;
}
.final-price::after {
  content: "$";
}
</style>
