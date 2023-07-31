
export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            cart: [] as any[]
        }
    },
    getters: {
        getTotalPrice: state => state.cart.reduce((acc, product) => acc + product.fields.price * product.count,0),
        getTotalCount: state => state.cart.reduce((acc, product) => acc + product.count,0),
    },
    actions: {
        addItem(product : any) {
            if (!this.cart.includes(product)){
                product.count = 1
                this.cart.push(product)
              e.log(product);
            } else {
                product.count++
            }
        },
        removeProducts(producsId) {
          this.cart = this.cart.filter(product => !producsId.includes(product.sys.id))
        },
        

         
        
    
    }

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
  }
  