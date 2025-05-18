<template>
  <div class="main d-flex flex-row justify-content-between">
    <div class="quality d-flex w-25">
      <font-awesome-icon class="icon" icon="fa-solid fa-trophy" />
      <div class="text d-flex flex-column">
        <h1 class="ms-3">High Quality</h1>
        <p>crafted from top materials</p>
      </div>
    </div>
    <div class="quality d-flex w-25">
      <font-awesome-icon class="icon" icon="fa-solid fa-certificate" />
      <div class="text d-flex flex-column">
        <h1 class="ms-3">Warranty Protection</h1>
        <p>Over 2 years</p>
      </div>
    </div>
    <div class="quality d-flex w-25">
      <font-awesome-icon class="icon" icon="fa-solid fa-handshake" />
      <div class="text d-flex flex-column">
        <h1 class="ms-3">Free Shipping</h1>
        <p>Order over 150 $</p>
      </div>
    </div>
    <div class="quality d-flex w-25">
      <font-awesome-icon class="icon" icon="fa-solid fa-headset" />
      <div class="text d-flex flex-column">
        <h1 class="ms-3">24 / 7 Support</h1>
        <p>Dedicated support</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  background-color: #faf3ea;
}
.main {
  padding: 10vh 5vw;
}
h1{
    font-size: 25px;
    font-weight: 500;
}
p{
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
    color: #898989;
}
.icon{
  font-size: 40px;
  margin: 0;
}
</style>