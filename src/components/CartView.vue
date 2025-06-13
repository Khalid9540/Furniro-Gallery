<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { useCartStore } from "./cartStore";
import { computed } from "vue";
const cartStore = useCartStore();
function removeItem(index) {
  cartStore.removeFromCart(index)
}
onMounted(() => {
  cartStore.loadCartFromLocalStorage()
})
const total = computed(() =>
  cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
const subtotal = computed(() =>
  cartStore.cartItems.reduce((sum, item) => sum + item.price, 0)
)
</script>

<template>
  <subPanner title="Cart" subtitle="cart" />
  <div class="mainPage m-auto p-5 d-flex justify-content-between">
    <div class="product d-flex flex-column">
      <div class="navbar mb-5 d-flex justify-content-between">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      <div class="prod-card w-100 my-3 d-flex justify-content-between align-items-center"
        v-for="(product, index) in cartStore.cartItems" :key="product.id">
        <div class="img">
          <RouterLink :to="`/singleProduct/${product.id}`"><img :src="product.image_path" alt="" /></RouterLink>
        </div>
        <RouterLink :to="`/singleProduct/${product.id}`">
          <h2>{{ product.name }}</h2>
        </RouterLink>
        <h2>{{ product.price }}</h2>
        <h2 class="one py-1 px-2">{{ product.quantity }}</h2>
        <h2>{{ product.price * product.quantity }}</h2>
        <font-awesome-icon icon="fa-solid fa-trash" class="icon" @click="removeItem(product)" />
      </div>
    </div>
    <div class="total-card text-center align-items-center">
      <h1>Cart Totals</h1>
      <div class="sub d-flex justify-content-between align-items-center">
        <h1>Subtotal</h1>
        <p>Rs. {{ subtotal }}</p>
      </div>
      <div class="total d-flex justify-content-between align-items-center">
        <h1>Total</h1>
        <p>Rs. {{ total }}</p>
      </div>
      <RouterLink to="/checkout">Checkout</RouterLink>
    </div>
  </div>
  <thePanner />
</template>
<style scoped>
.mainPage {
  width: 80%;
}

.mainPage .product {
  width: 70%;
}

.mainPage .product .navbar {
  background-color: #f9f1e7;
  padding: 2vh 7vw;
}

.mainPage .product .navbar h1 {
  font-size: 16px;
  font-weight: 500;
}

.mainPage .product .prod-card .img {
  width: 13%;
  background-color: #f9f1e7;
  border-radius: 7px;
  cursor: pointer;
}

.mainPage .product .prod-card h2 {
  font-size: 16px;
  color: #9f9f9f;
}

.mainPage .product .prod-card .icon {
  color: #b88e2f;
}

.icon:hover {
  cursor: pointer;
}

.one {
  border: 1px solid #9f9f9f;
  border-radius: 5px;
}

.mainPage .product .prod-card .img img {
  width: 100%;
}

.total-card {
  width: 28%;
  height: fit-content;
  background-color: #f9f1e7;
  padding: 2vh 4vw 10vh;
}

.mainPage .total-card a {
  padding: 1vh 3vw;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
}

.total-card h1 {
  font-size: 32px;
  margin-bottom: 7vh;
  font-weight: 600;
}

.sub,
.total {
  margin-bottom: 4vh;
}

.sub h1,
.total h1 {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 0px;
}

.sub p {
  color: #9f9f9f;
  font-size: 16px;
  margin-bottom: 0px;
}

.total p {
  margin-bottom: 0px;
  color: #b88e2f;
  font-size: 20px;
}
</style>