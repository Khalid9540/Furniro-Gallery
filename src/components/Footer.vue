<template>
  <div class="main-footer mt-4">
    <div class="logo">
      <h1>Funiro.</h1>
      <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
    </div>
    <div class="links">
      <h3>Links</h3>
      <RouterLink to="/"><h2>Home</h2></RouterLink>
      <RouterLink to="/shop"><h2>Shop</h2></RouterLink>
      <RouterLink to="/about"><h2>About</h2></RouterLink>
      <RouterLink to="/cont"><h2>Contact</h2></RouterLink>
    </div>
    <div class="help">
      <h3>Help</h3>
      <h2>Payment Options</h2>
      <h2>Returns</h2>
      <h2>Privacy Policies</h2>
    </div>
    <div class="news">
      <h3>NewsLetter</h3>
      <input type="text" placeholder="Enter Your Email Address" />
      <a href="#">subscribe</a>
    </div>
  </div>
  <div class="sub-footer">
    <p>2023 furino. All rights reverved</p>
  </div>
</template>
<style scoped>
.main-footer {
  border-top: 1px solid #9f9f9f;
  padding: 5vh 7vw;
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 20%;
}
.logo h1 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 5vh;
}
.logo p {
  color: #9f9f9f;
}
.links,
.help {
  display: flex;
  flex-direction: column;
  width: 13%;
}
h3 {
  font-weight: 500;
  color: #9f9f9f;
}
h2 {
  font-weight: 500;
  font-size: 16px;
  margin-top: 5vh;
}
.news {
  width: 23%;
}
.news input,
.news a {
  border: none;
  margin-right: 10px;
  margin-top: 5vh;
  padding: 1vh 0vw;
  border-bottom: 2px solid black;
}
input {
  width: 65%;
}
.sub-footer {
  width: 85%;
  margin: auto;
  border-top: 1px solid #9f9f9f;
  padding: 5vh 0vw;
}
</style>