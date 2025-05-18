<script setup>
import { RouterLink, RouterView } from 'vue-router';
import navbar from './components/NavBar.vue';
import homepage from './components/HomePage.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <navbar/>
  <RouterView />
  <Footer />
</template>