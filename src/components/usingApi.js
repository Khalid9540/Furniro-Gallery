import { ref, onMounted } from "vue";
import api from "./api";

export default function useProducts() {
    const products = ref([])
    const loading = ref(true)

    onMounted(async () => {
        try {
            const response = await api.get('/products')
            products.value = response.data.data
        } catch (error) {
            console.error('API Error:', error)
        } finally {
            loading.value = false
        }
    })

    return { products, loading }
}