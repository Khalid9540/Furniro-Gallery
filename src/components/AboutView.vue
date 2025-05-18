<script setup lang="ts">
import BlogList from './BlogList.vue';

</script>

<template>
  <subPanner title="Blog" subtitle="Blog" />
  <div class="mainPage m-auto py-5 d-flex justify-content-between">
    <div class="blog"><BlogList /></div>
    <div class="categories d-flex flex-column">
      <div
        class="search d-flex justify-content-between align-items-center mb-4"
      >
        <input type="text" />
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="titles d-flex flex-column mb-5">
        <h1>Categories</h1>
        <div class="thetitle d-flex justify-content-between my-3">
          <h2>Crafts</h2>
          <h2>2</h2>
        </div>
        <div class="thetitle d-flex justify-content-between my-3">
          <h2>Design</h2>
          <h2>8</h2>
        </div>
        <div class="thetitle d-flex justify-content-between my-3">
          <h2>Handmade</h2>
          <h2>1</h2>
        </div>
        <div class="thetitle d-flex justify-content-between my-3">
          <h2>Interior</h2>
          <h2>7</h2>
        </div>
        <div class="thetitle d-flex justify-content-between my-3">
          <h2>Wood</h2>
          <h2>6</h2>
        </div>
      </div>
      <div class="recent-blogs">
        <h1>Recent Posts</h1>
        <div class="cardTemplate my-3 d-flex justify-content-between">
          <img
            src="../assets/imgs/2e2c01ab8b94b8e3a17bbb18c564006d557e73b1.jpg"
            alt=""
          />
          <div class="text">
            <h2>Going all-in with millennial design</h2>
            <p>03 Aug 2022</p>
          </div>
        </div>
        <div class="cardTemplate my-3 d-flex justify-content-between">
          <img
            src="../assets/imgs/37528005309ac985861a262b8622e7528e08049f.jpg"
            alt=""
          />
          <div class="text">
            <h2>Exploring new ways of decorating</h2>
            <p>03 Aug 2022</p>
          </div>
        </div>
        <div class="cardTemplate my-3 d-flex justify-content-between">
          <img
            src="../assets/imgs/0b5e85006615f4968338e0a7004a86529ecf85c9.jpg"
            alt=""
          />
          <div class="text">
            <h2>Handmade pieces that took time to make</h2>
            <p>03 Aug 2022</p>
          </div>
        </div>
        <div class="cardTemplate my-3 d-flex justify-content-between">
          <img
            src="../assets/imgs/90564e0fcfbc72a9932875eeb20db551bb01abb3.jpg"
            alt=""
          />
          <div class="text">
            <h2>Modern home in Milan</h2>
            <p>03 Aug 2022</p>
          </div>
        </div>
        <div class="cardTemplate my-3 d-flex justify-content-between">
          <img
            src="../assets/imgs/455ff3a57de5c930d1538360f43cbfa1d7f00337.jpg"
            alt=""
          />
          <div class="text">
            <h2>Colorful office redesign</h2>
            <p>03 Aug 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <thePanner />
</template>
<style scoped>
.mainPage {
  width: 85%;
}
.mainPage .blog {
  width: 70%;
}
.mainPage .categories {
  width: 20%;
}
.mainPage .categories .search {
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  padding: 1.5vh 1vw;
  width: 100%;
}
.mainPage .categories .search input {
  border: none;
}
.mainPage .categories .titles h1 {
  font-size: 24px;
  font-weight: 500;
}
.mainPage .categories .titles .thetitle h2 {
  font-size: 16px;
  font-weight: 400;
  color: #9f9f9f;
}
.mainPage .categories .recent-blogs h1 {
  font-size: 24px;
  font-weight: 500;
}
.mainPage .categories .recent-blogs .cardTemplate img {
  width: 30%;
  height: 10vh;
  border-radius: 10px;
}
.mainPage .categories .recent-blogs .cardTemplate .text {
  width: 64%;
}
.mainPage .categories .recent-blogs .cardTemplate .text h2 {
  font-size: 14px;
  width: 80%;
}
.mainPage .categories .recent-blogs .cardTemplate .text p {
  font-size: 12px;
}
</style>