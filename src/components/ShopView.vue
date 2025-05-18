<script setup>
import ThePanner from "./thePanner.vue";
import { ref, onMounted } from "vue";
import api from "./api";

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await api.get("/products");
    products.value = response.data.data;
    console.log(products.value);
  } catch (error) {
    console.error("API Error:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <subPanner title="Shop" subtitle="shop" />
  <div class="filter d-flex justify-content-between">
    <div class="show d-flex justify-content-between align-items-center">
      <font-awesome-icon icon="fa-solid fa-filter" class="icon" />
      <h1>Filter</h1>
      <font-awesome-icon icon="fa-solid fa-grip" class="icon" />
      <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
      <h2 class="mb-0">Showing 1–16 of 32 results</h2>
    </div>
    <div class="sort d-flex justify-content-between align-items-center">
      <h1>Show</h1>
      <h1 class="color p-2">16</h1>
      <h1>Sort by</h1>
      <h1 class="color px-4 py-2">Default</h1>
    </div>
  </div>
  <div class="main-page d-flex m-auto justify-content-between py-5 flex-wrap">
    <div
      v-for="product in products"
      :key="product.id"
      class="card mt-4"
      style="width: 18rem"
    >
      <div class="overlay d-flex flex-column">
        <button class="add-to-cart mb-4">Add to cart</button>
        <div class="icons d-flex justify-content-between align-items-center">
          <font-awesome-icon icon="fa-solid fa-share-nodes" />
          <p>Share</p>
          <font-awesome-icon icon="fa-solid fa-repeat" />
          <p>Compare</p>
          <font-awesome-icon icon="fa-solid fa-heart" />
          <p>Like</p>
        </div>
      </div>
      <img :src="product.image_path" class="card-img-top" alt="..." />
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
    <div
      v-for="product in products.slice(0, 6)"
      :key="product.id"
      class="card mt-4"
      style="width: 18rem"
    >
      <div class="overlay d-flex flex-column">
        <button class="add-to-cart mb-4">Add to cart</button>
        <div class="icons d-flex justify-content-between align-items-center">
          <font-awesome-icon icon="fa-solid fa-share-nodes" />
          <p>Share</p>
          <font-awesome-icon icon="fa-solid fa-repeat" />
          <p>Compare</p>
          <font-awesome-icon icon="fa-solid fa-heart" />
          <p>Like</p>
        </div>
      </div>
      <img :src="product.image_path" class="card-img-top" alt="..." />
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
  <ThePanner />
</template>
<style scoped>
.filter {
  background-color: #f9f1e7;
  padding: 2vh 6vw;
}
.icon {
  font-size: 20px;
  margin: 0vh 1vw;
}
.filter h1 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0px;
}
.filter h2 {
  font-size: 16px;
  font-weight: 400;
  margin-left: 1vw;
  border-left: 2px solid #9f9f9f;
  padding-left: 1vw;
}
.filter .color {
  margin: 0vh 1vw;
  color: #9f9f9f;
  background-color: white;
}
.main-page {
  width: 85%;
}
.main-page .card {
  background-color: #f4f5f7;
  border: none !important;
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;
}
.main-page .card .card-body h5 {
  font-size: 24px;
  font-weight: 600;
  color: #3a3a3a;
}
.main-page .card .card-body p {
  color: #898989;
  font-weight: 500;
}
.main-page .card .card-body .discount h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0px;
  color: #3a3a3a;
}
.main-page .card .card-body .discount p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0px !important;
  text-decoration: line-through;
  color: #b0b0b0;
}
.main-page .card:hover {
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
  margin-bottom: 0px;
  margin-right: 2vh;
  margin-left: 1vh;
}
.main-page .card:hover .overlay {
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
</style>