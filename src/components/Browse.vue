<template>
    <div class="browse">
        <h1 class="m-auto">Browse The Range</h1>
        <p class="m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div class="gall d-flex justify-content-between pt-5">
            <div class="thecard d-flex flex-column" v-for="(cat, idx) in categories" :key="idx">
                <div class="img">
                    <img :src="cat.img" alt="" />
                </div>
                <h2 class="mt-3">{{ cat.name }}</h2>
            </div>
        </div>
    </div>
</template>
<script setup>
import dining from '@/assets/imgs/37408e444bdba3a6bef9d68df2d9a06e32e96c61.png';
import living from "@/assets/imgs/b7e392a7f3961ca2b1edab00f7a7640b3c2ed666.png";
import bedroom from "@/assets/imgs/77e4946eec6e291e21c9694ce22e6c5b50d777fe.png";
const categories = [
    { name: "Dining", img: dining },
    { name: "Living", img: living },
    { name: "BedRoom", img: bedroom },
];
</script>
<style scoped>
 h1,
 p {
  text-align: center;
  margin-bottom: 2vh !important;
}

 h1 {
  font-weight: 700;
  font-size: 32px;
}

 p {
  font-weight: 400;
  font-size: 20px;
}
.gall .thecard {
    width: 32%;
    text-align: center;
}

.gall .thecard .img {
    overflow: hidden;
    border-radius: 9px;
}

.gall .thecard img {
    height: 400px;
    width: fit-content;
}

.gall .thecard h2 {
    font-size: 24px;
    font-weight: 600;
}
</style>