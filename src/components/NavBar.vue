    <script setup>
    import { RouterLink } from "vue-router";
    const navRouters = [
      { name: "Home", path: "/" },
      { name: "Shop", path: "/shop" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/cont" }
    ]
</script>
<template>
  <nav>
    <div class="logo">
      <img src="@/assets/imgs/2727769ba74736d502746301ed573ed8940fc322.png" alt="" />
      <h1>Furniro</h1>
    </div>
    <div class="links">
      <RouterLink v-for="router in navRouters" :key="router.path" :to="router.path" class="router-link"> {{ router.name }}
      </RouterLink>
    </div>
    <div class="icons">
      <i class="fa-solid fa-user"></i>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <RouterLink to="/favorites"><i class="fa-regular fa-heart"></i></RouterLink>
      <RouterLink to="/cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></RouterLink>
    </div>
  </nav>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: white;
  padding: 2vh 3vw;
}

nav .logo {
  display: flex;
  align-items: center;
  width: 17%;
}

nav .logo img {
  width: 5vw;
  height: 8vh;
}

nav .logo h1 {
  font-size: 28px;
  font-weight: 700;
  color: #000000;
}

nav .links {
  width: 29%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

nav .links .router-link {
  color: #000000;
  font-weight: 500;
  font-size: 15px;

}

nav .links .router-link:hover {
  cursor: pointer;
  background-color: white;
  position: relative;
}

nav .icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
}

nav .icons i {
  color: #000000;
  font-weight: 800;
}

nav .icons i:hover {
  cursor: pointer;
}
</style>