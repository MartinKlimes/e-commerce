import { defineStore } from "pinia";
import { watchDebounced } from "@vueuse/core";

export const useCartStore = defineStore("CartStore", () => {
    const cart = ref([] as any[]);
    const deskree = useDeskree()
    const isFirstLoad  = ref(false)



    const addItem = (product : any) => {
        if (!cart.value.includes(product)){
            product.count = 1
            cart.value.push(product)

        } else {
            product.count++
        }
    }
    const removeProducts = (productIds) => {
        productIds = Array.isArray(productIds) ? productIds : [productIds];
        cart.value = cart.value.filter(product => !productIds.includes(product.sys.id))
    }
    const getTotalPrice = computed(() => cart.value.reduce((acc, product) => acc + product.fields.price * product.count,0))
    const getTotalCount = computed(() => cart.value.reduce((acc, product) => acc + product.count,0))
    const getCartList = computed(() => cart.value.map(product => {
        return {
            id: product.sys.id,
            count: product.count
        }
    }))
    const reset = () => { cart.value = [] }

    

    watchDebounced(cart, () => {
        if (isFirstLoad.value) return;
            deskree.user.updateCart(cart.value)
    }, {
    deep: true,
    debounce: 500
    }
    )

    deskree.auth.onAuthStateChange(async (user: any) => {
        isFirstLoad .value = true
        if (!user) return;
        const res = await deskree.user.getCart();
        res.products.forEach((product: any) => {
          const n = Number(product.count);
          for (let i = 0; i < n; i++) {
            addItem(product);
          }            
        })
        setTimeout(() => {
            isFirstLoad .value = false
        }, 750);
    })
    return {
        cart,
        addItem,
        removeProducts,
        getTotalPrice,
        getTotalCount,
        getCartList,
        isFirstLoad,
        reset
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
  }