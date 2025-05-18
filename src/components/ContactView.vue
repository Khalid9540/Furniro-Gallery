<template>
  <subPanner title="Contact" subtitle="contact" />
  <div class="main m-auto py-5">
    <h1>Get In Touch With Us</h1>
    <p>
      For More Information About Our Product & Services. Please Feel Free To
      Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
      Hesitate!
    </p>
    <div class="contain mt-5 d-flex justify-content-between">
      <div class="info d-flex flex-column me-5 pe-5">
        <div class="address d-flex">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="icons" />
          <div class="text ms-3 d-flex flex-column">
            <h1>Address</h1>
            <h3>236 5th SE Avenue, New York NY10000, United States</h3>
          </div>
        </div>
        <div class="phone d-flex">
          <font-awesome-icon icon="fa-solid fa-phone" class="icons" />
          <div class="text ms-3 d-flex flex-column">
            <h1>Phone</h1>
            <h3>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</h3>
          </div>
        </div>
        <div class="time d-flex">
          <font-awesome-icon icon="fa-solid fa-clock" class="icons" />
          <div class="text ms-3 d-flex flex-column">
            <h1>Working Time</h1>
            <h3>
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </h3>
          </div>
        </div>
      </div>
      <div class="form d-flex flex-column ms-5 ps-5">
        <h2 class="mb-3">Your Name</h2>
        <input class="mb-3 p-3" type="text" placeholder="abc" />
        <h2 class="mb-3">Email address</h2>
        <input class="mb-3 p-3" type="email" placeholder="Enter email" />
        <h2 class="mb-3">Subject</h2>
        <input class="mb-3 p-3" type="text" placeholder="This is optional" />
        <h2 class="mb-3">Message</h2>
        <input
          class="mb-3 p-3 msg"
          type="text"
          placeholder="Hi! i’d like to ask about"
        />
        <a href="#" class="mt-3 py-2">Submit</a>
      </div>
    </div>
  </div>
  <thePanner />
</template>
<style scoped>
.icons{
  font-size: 25px;
}
i {
  color: black;
  font-weight: 700;
  font-size: 25px;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main h1 {
  font-weight: 600;
  font-size: 36px;
}
.main p {
  text-align: center;
  width: 43%;
  color: #9f9f9f;
}
.main .contain .info {
  width: 38%;
}
.main .contain .form {
  width: 70%;
}
.main .contain .form h2 {
  font-size: 16px;
  font-weight: 500;
}
.main .contain .form input {
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  height: 8vh;
  opacity: 0.7;
}
.main .contain .form .msg {
  height: 15vh;
}
.main .contain .info .text h1 {
  font-size: 24px;
  font-weight: 600;
}
.main .contain .info .text h3 {
  font-size: 16px;
}
.main .contain .form a {
  width: 35%;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #b88e2f;
}
.main .contain .form a:hover {
  color: white;
}
</style>