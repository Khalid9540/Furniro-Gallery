<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { useCartStore } from "./cartStore";
const cartStore = useCartStore();
function removeItem(product) {
  cartStore.rmFav(product);
}
onMounted(() => {
  cartStore.loadFavorites()
})
</script>
<template>
    <subPanner title="Favorites" subtitle="favorites" />
    <div class="mainPage m-auto w-50 py-5">
        <div class="prod-card w-75 my-3 d-flex justify-content-between align-items-center"
        v-for="(product, index) in cartStore.favoriteItems" :key="product.id">
        <div class="img">
          <RouterLink to="/singleProduct"><img :src="product.image_path" alt="" /></RouterLink>
        </div>
        <RouterLink to="/singleProduct">
          <h2>{{ product.name }}</h2>
        </RouterLink>
        <h2>{{ product.price }}</h2>
        <font-awesome-icon icon="fa-solid fa-trash" class="icon" @click="removeItem(product)" />
      </div>
    </div>
    <thePanner/>
</template>
<style scoped>
    .mainPage .prod-card .img {
  width: 13%;
  background-color: #f9f1e7;
  border-radius: 7px;
  cursor: pointer;
}

.mainPage .prod-card h2 {
  font-size: 16px;
  color: #9f9f9f;
}

.mainPage .prod-card .icon {
  color: #b88e2f;
}

.icon:hover {
  cursor: pointer;
}

.mainPage .prod-card .img img {
  width: 100%;
}
</style>