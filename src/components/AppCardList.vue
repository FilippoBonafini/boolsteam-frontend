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
      <h3>I GIOCHI:</h3>

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

          <div class="discount px-2">{{ game.sconto }}%</div>
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

.container-main-bot > h3 {
  color: white;
}

.container-card-list {
  background-color: $card-bg;
  padding-top: 5px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.3);
}

.container-img {
  height: 100px;
  //   background-color: orchid;
  margin: 5px;

  img {
    max-height: 100%;
  }
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
