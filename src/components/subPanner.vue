<script>
export default {
    name: 'subPanner',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <div class="panner">
    <div class="logo"></div>
    <div class="text">
      <img
        src="../assets/imgs/2727769ba74736d502746301ed573ed8940fc322.png"
        alt=""
      />
      <h1>{{title}}</h1>
      <p><span><RouterLink to="/" class="router">Home</RouterLink> > </span> {{subtitle}}</p>
    </div>
  </div>
</template>
<style scoped>
.panner {
  position: relative;
  height: 316px;
  overflow: hidden;
}
.panner .logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgs/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: 0;
}
.panner .text {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
}
.panner .text img {
  width: 5vw;
  height: 9vh;
}
.panner .text h1 {
  font-size: 48px;
  font-weight: 500;
}
.panner .text p span .router {
  font-size: 16px;
  font-weight: 700;
}
</style>