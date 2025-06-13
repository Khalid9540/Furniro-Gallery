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
</style>