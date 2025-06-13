import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomePage.vue';
import AboutView from '../components/AboutView.vue';
import ContactView from '../components/ContactView.vue';
import ShopView from '../components/ShopView.vue';
import CartView from '../components/CartView.vue';
import Checkout from '@/components/Checkout.vue';
import singleProduct from '@/components/singleProduct.vue';
import favorites from '@/components/FavView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/cont',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/singleProduct/:id',
      name: 'singleProduct',
      component: singleProduct,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: favorites,
    },
  ],
})

export default router
