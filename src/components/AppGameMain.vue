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
        <div class="box-price">
          <div class="discount">-{{ store.game_selected.price }}%</div>
          <div class="discount-price text-center">
            <div>{{ store.game_selected.price }}$</div>
            <div class="final-price">
              {{
                store.game_selected.price -
                (store.game_selected.price * store.game_selected.sconto) / 100
              }}
            </div>
          </div>
        </div>
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
          <p>{{ store.game_selected.description }}</p>
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
  width: 600px;
  display: flex;
  margin: 0 20px;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    width: 100%;
    object-fit: contain;
  }
}
.box-price {
  position: absolute;
  color: $card-text;
  display: flex;
  gap: 2px;
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

.card-film {
  color: $card-text;
  .info {
    background-color: rgba(0, 0, 0, 0.739);
    padding: 10px 20px;
  }
}
.tag {
  background-color: $card-tag-bg;
  text-align: center;
}
</style>
