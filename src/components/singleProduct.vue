<script setup>
import useProducts from './usingApi';
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
const route = useRoute();
const { products, loading } = useProducts();
const product = ref(null);
watchEffect(() => {
  if (products.value.length > 0) {
    const productId = route.params.id;
    product.value = products.value.find((p) => p.id === productId);
  }
});
</script>
<template>
  <div class="filter d-flex justify-content-between">
    <div class="show d-flex justify-content-between align-items-center">
      <RouterLink to="/" class="navRouter">Home</RouterLink>
      <h1>></h1>
      <RouterLink to="/shop" class="navRouter">Shop</RouterLink>
      <h1>></h1>
      <RouterLink to="/cart" class="product">Asgaard sofa</RouterLink>
    </div>
  </div>
  <div class="thehead m-auto d-flex justify-content-between py-5" v-if="product">
    <div class="imgs d-flex justify-content-between">
      <div class="icons d-flex flex-column">
        <img src="@/assets/imgs/e8e6980ec9e9224b3002d53824688ecee9c882c5.png" alt="" />
        <img src="@/assets/imgs/4d654cce148fae44b3bf6e9ac8ce6743c19e7de6.png" alt="" />
        <img src="@/assets/imgs/83ef229324c656816d67a755100ac5f664833551.png" alt="" />
        <img src="@/assets/imgs/75ae609a0c46ac4eb9c274966b1133cb71128f16.png" alt="" />
      </div>
      <div class="main-img">
        <img :src="product.image_path" alt="" />
      </div>
    </div>
    <div class="details d-flex flex-column">
      <h1>{{ product.name }}</h1>
      <p>{{product.price}}</p>
      <div class="rate d-flex justify-content-between">
        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
        <font-awesome-icon icon="fa-solid fa-star" class="icon" />
        <p>5 Customer Review</p>
      </div>
      <h2>
        {{product.description}}
      </h2>
      <h4>Size</h4>
      <div class="sizes d-flex justify-content-between">
        <h1 class="large">L</h1>
        <h1>XL</h1>
        <h1>XS</h1>
      </div>
      <h4>Color</h4>
      <div class="Colors d-flex justify-content-between">
        <div class="purple"></div>
        <div class="black"></div>
        <div class="brown"></div>
      </div>
      <div class="btns d-flex justify-content-between mb-5">
        <div class="plus d-flex text-center">
          <h2>-</h2>
          <h2>1</h2>
          <h2>+</h2>
        </div>
        <a href="#">Add To Cart</a>
        <a href="#">+ Compare</a>
      </div>
      <hr />
      <div class="data d-flex justify-content-between">
        <div class="text d-flex flex-column w-25">
          <h2>SKU</h2>
          <h2>Category</h2>
          <h2>Tags</h2>
          <h2>Share</h2>
        </div>
        <div class="info">
          <h2><span>:</span>SS001</h2>
          <h2><span>:</span>Sofas</h2>
          <h2><span>:</span>Sofa, Chair, Home, Shop</h2>
          <div class="icons d-flex justify-content-between w-75">
            <span>:</span>
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon" />
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="loading">
    <p>Loading product...</p>
  </div>
  <div v-else>
    <p>Product not found</p>
  </div>
  <hr />
  <div class="description d-flex flex-column m-auto py-5">
    <div class="titles d-flex justify-content-between w-50 m-auto">
      <h1>Description</h1>
      <h2>Additional Information</h2>
      <h2>Reviews [5]</h2>
    </div>
    <p class="mt-4 m-auto">
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
      active stereo speaker takes the unmistakable look and sound of Marshall,
      unplugs the chords, and takes the show on the road.
    </p>
    <p class="my-4 m-auto">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
      styled engineering. Setting the bar as one of the loudest speakers in its
      class, the Kilburn is a compact, stout-hearted hero with a well-balanced
      audio which boasts a clear midrange and extended highs for a sound that is
      both articulate and pronounced. The analogue knobs allow you to fine tune
      the controls to your personal preferences while the guitar-influenced
      leather strap enables easy and stylish travel.
    </p>
    <div class="imgsDisplay d-flex justify-content-between w-100">
      <img src="../assets/imgs/b7395be53f5927c3cf50e945c3e0f03b3206e810.png" alt="" class="mt-4" />
      <img src="../assets/imgs/1421901b217b5f7ea72cbcd9ce3062c4165744e5.png" alt="" class="mt-4" />
    </div>
  </div>
  <hr />
  <div class="related-products d-flex flex-column m-auto py-5 align-items-center">
    <h1>Related Products</h1>
    <div class="thecards d-flex justify-content-between">
      <div v-for="product in products.slice(0, 4)" :key="product.id" class="card" style="width: 24%;">
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
    <transition name="slide-fade">
      <RouterLink to="/shop" class="btn btn-outline-secondary mt-5">Show More</RouterLink>

    </transition>
  </div>
</template>
<style scoped>
.filter {
  background-color: #f9f1e7;
  padding: 2vh 6vw;
}

.filter h1 {
  font-size: 15px;
  font-weight: 700;
  margin: 0vh 1.5vw;
}

.navRouter {
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 400;
}

.filter .show .product {
  font-size: 16px;
  font-weight: 500;
  border-left: 2px solid #9f9f9f;
  padding: 1vh 1.5vw;
}

.filter .show .product {
  font-weight: 500;
}

.thehead {
  width: 85%;
}

.thehead .imgs {
  width: 45%;
}

.thehead .details {
  width: 48%;
}

.icons {
  width: 14%;
  align-items: center;
}

.main-img {
  width: 80%;
}

.main-img img {
  width: 100%;
}

.icons img,
.main-img img {
  background-color: #f9f1e7;
  border-radius: 10px;
}

.icons img {
  height: 9vh;
  width: 5vw;
  margin-bottom: 4vh;
}

.thehead .details h1 {
  font-weight: 400;
  font-size: 42px;
}

.thehead .details p {
  font-weight: 500;
  font-size: 24px;
  color: #9f9f9f;
}

.thehead .details .rate .icon {
  color: #ffc700;
}

.rate {
  width: 42%;
}

.thehead .details .rate p {
  color: #9f9f9f;
  margin-left: 1vw;
  padding: 0px 1vw;
  font-size: 13px;
  border-left: 1px solid #9f9f9f;
}

.thehead .details h2 {
  width: 60%;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 3vh;
}

.thehead .details h4 {
  font-size: 14px;
  color: #9f9f9f;
  margin-bottom: 2vh;
}

.sizes .large {
  color: #ffffff;
  background-color: #b88e2f;
}

.sizes h1 {
  border-radius: 5px;
  font-size: 13px !important;
  padding: 1vh 1.5vh;
  background-color: #f9f1e7;
}

.sizes,
.Colors {
  width: 20%;
  margin-bottom: 2vh;
}

.purple,
.black,
.brown {
  background-color: #816dfa;
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.black {
  background-color: black;
}

.brown {
  background-color: #b88e2f;
}

.thehead .details .btns {
  width: 77%;
}

.thehead .details .btns .plus {
  width: 26%;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  padding: 2vh 0.6vh;
}

.thehead .details .btns .plus h2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
}

.thehead .details .btns a {
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 1.5vh 2vw;
}

.thehead .details .data {
  width: 43%;
}

.thehead .details .data h2 {
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
}

.thehead .details .data h2 span,
.data .info .icons span {
  padding-right: 2vh;
  color: #9f9f9f;
}

.thehead .details .data .icons .icon {
  color: white;
  background-color: black;
  padding: 0.8vh 1vh;
  border-radius: 50%;
}

.description {
  width: 85%;
}

.related-products {
  width: 85%;
}

.description .titles h1 {
  font-size: 24px;
  font-weight: 500;
}

.description .titles h2 {
  font-size: 24px;
  font-weight: 400;
  color: #9f9f9f;
}

.description p {
  color: #9f9f9f;
  width: 71%;
}

.description .imgsDisplay img {
  width: 49%;
  background-color: #f9f1e7;
  border-radius: 10px;
}

.related-products h1 {
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 5vh;
}

.related-products .btn {
  margin-top: 5vh;
  color: #b88e2f;
  font-weight: 600;
  border: 1px solid #b88e2f;
  border-radius: 0;
}

.thecards .card {
  background-color: #f4f5f7;
  border: none !important;
}

.thecards .card .card-body h5 {
  font-size: 24px;
  font-weight: 600;
  color: #3a3a3a;
}

.thecards .card .card-body p {
  color: #898989;
  font-weight: 500;
}

.thecards .card .card-body .discount h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0px;
  color: #3a3a3a;
}

.thecards .card .card-body .discount p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0px !important;
  text-decoration: line-through;
  color: #b0b0b0;
}
</style>