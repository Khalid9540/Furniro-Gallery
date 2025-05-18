<script setup>
// import axios from "axios";
// import { onBeforeMount, ref } from "vue";
// const user = ref({});
// const name = ref("");
// function Users() {
//   axios.get("https://furniture-api.fly.dev").then((response) => {
//     user.value = response.data;
//     console.log(user.value);

//   });
// }
// onBeforeMount(() => {
//   Users();
// });
// import api from "@/api";
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
  <div class="new-arrival">
    <div class="maincard">
      <h3>New Arrival</h3>
      <h1>Discover Our New Collection</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <a href="#">Buy Now</a>
    </div>
  </div>
  <div class="mainPage m-auto py-5">
    <div class="browse">
      <h1 class="m-auto">Browse The Range</h1>
      <p class="m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="gall d-flex justify-content-between pt-5">
        <div class="thecard d-flex flex-column">
          <div class="img">
            <img
              src="../assets/imgs/37408e444bdba3a6bef9d68df2d9a06e32e96c61.png"
              alt=""
            />
          </div>
          <h2 class="mt-3">Dining</h2>
        </div>
        <div class="thecard d-flex flex-column">
          <div class="img">
            <img
              src="../assets/imgs/b7e392a7f3961ca2b1edab00f7a7640b3c2ed666.png"
              alt=""
            />
          </div>
          <h2 class="mt-3">Living</h2>
        </div>
        <div class="thecard d-flex flex-column">
          <div class="img">
            <img
              src="../assets/imgs/77e4946eec6e291e21c9694ce22e6c5b50d777fe.png"
              alt=""
            />
          </div>
          <h2 class="mt-3">BedRoom</h2>
        </div>
      </div>
    </div>
    <div class="products pt-5 d-flex flex-column align-items-center">
      <h1>Our Products</h1>
      <div class="thecards d-flex flex-wrap my-4 justify-content-between">
        <div
          v-for="product in products.slice(0, 8)"
          :key="product.id"
          class="card mt-4"
          style="width: 18rem"
        >
          <div class="overlay d-flex flex-column">
            <button class="add-to-cart mb-4">Add to cart</button>
            <div
              class="icons d-flex justify-content-between align-items-center"
            >
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
      <RouterLink to="/shop" class="showmore">Show More</RouterLink>
    </div>
  </div>
  <div class="share text-center py-5">
    <h2 class="mb-4">Share your setup with</h2>
    <img src="../assets/imgs/thescreen.png" alt="" />
  </div>
</template>
<style scoped>
.new-arrival {
  background-image: url("../assets/imgs/98fb219fa11f805aade2224f1d6658764a2395.jpg");
  background-size: cover;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: end;
}
.new-arrival .maincard {
  margin-right: 80px;
  width: 32%;
  padding: 5vh 2vw;
  background-color: #fff3e3;
  color: black;
}
.new-arrival .maincard h3 {
  font-weight: 600;
  letter-spacing: 3px;
}
.new-arrival .maincard h1 {
  font-weight: 700;
  font-size: 52px;
  color: #b88e2f;
  line-height: 65px;
}
.new-arrival .maincard p {
  margin-top: 1vh;
  margin-bottom: 9vh;
  font-size: 18px;
  line-height: 24px;
}
.new-arrival .maincard a {
  font-weight: 700;
  line-height: 100%;
  padding: 20px 65px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #b88e2f;
}
.mainPage {
  width: 80%;
}
.mainPage h1,
.mainPage p {
  text-align: center;
  margin-bottom: 2vh !important;
}
.mainPage h1 {
  font-weight: 700;
  font-size: 32px;
}
.mainPage p {
  font-weight: 400;
  font-size: 20px;
}
.mainPage .gall .thecard {
  width: 32%;
  text-align: center;
}
.mainPage .gall .thecard .img {
  overflow: hidden;
  border-radius: 9px;
}
.mainPage .gall .thecard img {
  height: 400px;
  width: fit-content;
}
.mainPage .gall .thecard h2 {
  font-size: 24px;
  font-weight: 600;
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
</style>