import { defineStore } from "pinia";
import { ref } from "vue";

interface Product {
  id: number
  name: string
  price: number
  image_path: string
  quantity?: number
}
export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<Product[]>([])
  const favoriteItems = ref<Product[]>([])
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }
  function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('cart')
    if (saved) {
      cartItems.value = JSON.parse(saved)
    }
  }
  function addToCart(product: Product) {
    const existingProduct = cartItems.value.find(item => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity! += 1
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
    saveCartToLocalStorage()
  }



  function addToFav(product: Product) {
    const Liked = favoriteItems.value.findIndex(item => item.id === product.id)
    if (Liked > -1) {
      favoriteItems.value.splice(Liked, 1)
    } else {
      favoriteItems.value.push({ ...product })
    }
    saveFavorite()
  }


  function saveFavorite() {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems.value))
  }

  function loadFavorites() {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      favoriteItems.value = JSON.parse(saved)
    }
  }


  function removeFromCart(product: Product) {
    const index = cartItems.value.findIndex(item => item.id === product.id)
    if (index !== -1) {
      if (cartItems.value[index].quantity && cartItems.value[index].quantity === 1) {
        cartItems.value.splice(index, 1)
      } else {
        cartItems.value[index].quantity!--
      }
      saveCartToLocalStorage()
    }
  }

  function isFavorite(productId: number): boolean {
    return favoriteItems.value.some(item => item.id === productId);
  }

  function rmFav(product: Product) {
    const index = favoriteItems.value.findIndex(item => item.id === product.id);
    if (index > -1) {
      favoriteItems.value.splice(index, 1);
      saveFavorite();
    }
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    loadCartFromLocalStorage,
    favoriteItems,
    addToFav,
    loadFavorites,
    rmFav,
    isFavorite
  }
})

