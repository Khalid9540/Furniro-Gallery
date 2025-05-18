<template>
  <subPanner title="Checkout" subtitle="checkout" />
  <div class="mainPage w-75 m-auto d-flex justify-content-between py-5">
    <div class="form d-flex flex-column">
      <h1>Billing Details</h1>
      <div class="nameField w-100 d-flex justify-content-between">
        <div class="fname">
          <h2>First Name</h2>
          <input type="text" />
        </div>
        <div class="lname">
          <h2>Last Name</h2>
          <input type="text" />
        </div>
      </div>
      <div class="cardTemplate">
        <h2>Company Name (Optional)</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>Country / Region</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>Street address</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>Town / City</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>Province</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>ZIP code</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>Phone</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <h2>Email address</h2>
        <input type="text" />
      </div>
      <div class="cardTemplate">
        <input type="text" placeholder="Additional information" class="only" />
      </div>
    </div>
    <div class="product d-flex flex-column">
      <div class="product-details d-flex justify-content-between">
        <div class="title d-flex flex-column">
          <h1>Product</h1>
          <p>Asgaard sofa <span class="">X 1</span></p>
          <h2>Subtotal</h2>
          <h2>Total</h2>
        </div>
        <div class="num d-flex flex-column">
          <h1>Subtotal</h1>
          <h2>Rs. 250,000.00</h2>
          <h2>Rs. 250,000.00</h2>
          <h2 class="bold">Rs. 250,000.00</h2>
        </div>
      </div>
      <hr />
      <div class="description d-flex flex-column">
        <ul class="align-text-top">
          <li>Direct Bank Transfer</li>
        </ul>
        <p>
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <ul class="circle">
          <li>Direct Bank Transfer</li>
          <li>Cash On Delivery</li>
        </ul>
        <h2>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span>privacy policy.</span>
        </h2>
        <a href="#" class="my-4">Place Order</a>
      </div>
    </div>
  </div>
  <thePanner />
</template>
<style scoped>
.only {
  font-size: 16px;
  font-weight: 500;
  margin: 5vh 0vw;
  padding: 2vh 3vw;
  width: 100%;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
}
.fname,
.lname {
  width: 45%;
}
.fname h2,
.lname h2 {
  font-size: 16px;
  font-weight: 500;
  margin: 3vh 0vw;
}
.fname input,
.lname input {
  padding: 2vh 3vw;
  width: 100%;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
}

.form,
.product {
  width: 37%;
}
.form h1 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 4vh;
}
.form .cardTemplate h2 {
  font-size: 16px;
  font-weight: 500;
  margin: 3vh 0vw;
}
.form .cardTemplate input {
  padding: 2vh 3vw;
  width: 100%;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
}
.product .product-details h1 {
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 2vh;
}
.product .product-details p {
  margin-bottom: 2vh;
  color: #9f9f9f;
}
.product .product-details span {
  font-size: 12px;
  font-weight: 500;
  color: #000000;
}
.product .product-details h2 {
  margin-bottom: 2vh;
  font-size: 16px;
  font-weight: 400;
}
.product .product-details .bold {
  color: #b88e2f;
  font-size: 24px;
  font-weight: 700;
}
.product .description ul li::marker {
  font-size: 30px;
}
.circle {
  list-style: circle;
}
.product .description p {
  color: #9f9f9f;
  font-weight: 300;
}
.product .description .circle li {
  font-weight: 500;
  color: #9f9f9f;
}
.product .description h2{
  font-size: 16px;
  font-weight: 300;
}
.product .description h2 span{
  font-size: 16px;
  font-weight: 600;
}
.product .description a{
  font-size: 20px;
  padding: 2vh 5vw;
  border-radius: 15px;
  border: 1px solid #000000;
  align-self: center;
}
</style>