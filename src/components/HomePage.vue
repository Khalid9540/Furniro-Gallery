<script setup>

import useProducts from './usingApi';
import { useCartStore } from "./cartStore";
const { products, loading } = useProducts();
const cartStore = useCartStore();
import dining from '@/assets/imgs/37408e444bdba3a6bef9d68df2d9a06e32e96c61.png';
import living from "@/assets/imgs/b7e392a7f3961ca2b1edab00f7a7640b3c2ed666.png";
import bedroom from "@/assets/imgs/77e4946eec6e291e21c9694ce22e6c5b50d777fe.png";
const categories = [
  { name: "Dining", img: dining },
  { name: "Living", img: living },
  { name: "BedRoom", img: bedroom },
];

</script>
<template>
  <newArrival />

  <div class="mainPage m-auto py-5">
    <browse />

    <div class="products pt-5 d-flex flex-column align-items-center">
      <h1>Our Products</h1>
      <div class="thecards d-flex flex-wrap my-4 justify-content-between">
        <div v-for="product in products.slice(0, 8)" :key="product.id" class="card mt-4" style="width: 18rem">
          <div class="overlay d-flex flex-column">
            <button class="add-to-cart mb-4" @click="cartStore.addToCart(product)">Add to cart</button>
            <div class="icons d-flex justify-content-between align-items-center">
              <font-awesome-icon icon="fa-solid fa-share-nodes" />
              <p>Share</p>
              <font-awesome-icon icon="fa-solid fa-repeat" />
              <p>Compare</p>
              <button class="favbtn" @click="cartStore.addToFav(product)"><font-awesome-icon icon="fa-solid fa-heart"
                  :style="{ color: cartStore.isFavorite(product.id) ? 'red' : 'white' }" />
                <p>Like</p>
              </button>
            </div>
          </div>
          <img :src="product.image_path" class="card-img-top" alt="..." loading="lazy" />
          <div class="card-body text-start align-items-start">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text mt-4 text-start">
              {{ product.description.split(" ").slice(0, 4).join(" ") }}
            </p>
            <div class="discount d-flex justify-content-between mt-4">
              <h2>Rp {{ parseFloat(product.discount_price).toFixed(3) }}</h2>
              <p>{{ parseFloat(product.price).toFixed(3) }}</p>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/shop" class="showmore">Show More</RouterLink>
    </div>
  </div>
  <div class="share text-center py-5">
    <h2 class="mb-4">Share your setup with</h2>
    <img src="../assets/imgs/thescreen.png" alt="" />
  </div>
</template>
<style scoped>
.mainPage {
  width: 80%;
}

.share {
  overflow: hidden;
}

.share h2 {
  font-size: 20px;
  font-weight: 600;
  color: #616161;
}

.share img {
  height: 118vh;
  width: fit-content;
}

.mainPage .products h1 {
  font-size: 40px;
}

.mainPage .products .thecards .card {
  background-color: #f4f5f7;
  border: none !important;
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;
}

.mainPage .products .thecards .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay p {
  font-weight: 600;
  margin-bottom: 0px !important;
  margin-right: 2vh;
  margin-left: 1vh;
}

.mainPage .products .thecards .card:hover .overlay {
  opacity: 1;
}

.add-to-cart {
  padding: 1.5vh 3vw;
  background-color: #fff;
  color: #b88e2f;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.mainPage .products .thecards .card .card-body h5 {
  font-size: 24px;
  font-weight: 600;
  color: #3a3a3a;
}

.mainPage .products .thecards .card .card-body p {
  color: #898989;
  font-weight: 500;
}

.mainPage .products .thecards .card .card-body .discount h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0px;
  color: #3a3a3a;
}

.mainPage .products .thecards .card .card-body .discount p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0px !important;
  text-decoration: line-through;
  color: #b0b0b0;
}

.showmore {
  border: 1px solid #b88e2f;
  color: #b88e2f;
  font-weight: 500;
  padding: 1vh 5vw;
  width: fit-content;
}

.favbtn {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>