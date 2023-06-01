<script>
import { store } from "../store";
import PhWindowsLogoFill from "./PhWindowsLogoFill.vue";
export default {
  name: "AppGameMain",
  data() {
    return {
      store,
    };
  },
  components: { PhWindowsLogoFill },
};
</script>

<template>
  <div>
    <h2 class="m-0 py-3">GIOCHI</h2>

    <div class="container-game d-flex justify-content-center">
      <div class="img-price d-flex align-items-end justify-content-end">
        <img :src="store.img_prefix + store.game_selected.image" alt="" />
        <div class="discount">-{{ store.game_selected.price }}%</div>
      </div>

      <div class="card-film">
        <div class="info">
          <h3>{{ store.game_selected.title }}</h3>
          <div class="d-flex gap-2">
            <div class="tag" v-for="tag in store.game_selected.genres">
              {{ tag.name }}
            </div>
          </div>

          <div>
            <small>{{ store.game_selected.release_date }}</small
            ><!--aggiungere l'icona delle piattaforme-->
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
  width: 300px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: contain;
  }
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
  position: absolute;
}

.card-film {
  color: $card-text;
}
.tag {
  background-color: $card-tag-bg;
  text-align: center;
}
</style>
