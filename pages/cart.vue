<script setup>
import { useCartStore } from '~~/stores/CartStore';
const cartStore = useCartStore()

const selected = ref([]);
const checkAll = ref();

async function handleCheckout() {
const res =  await $fetch("/api/cart", {
  method: "POST",
  body: cartStore.getCartList,
})
window.location = res.url;

}
</script>
<template>
  <div class="m-10">
    <h1 class="text-3xl mb-5 font-bold">Your Cart</h1>
    <div class="md:flex w-full">
      <div class="md:w-3/4">
        <!-- Use this markup to display an empty cart -->
        <div v-if="!cartStore.cart.length"  class="italic text-center pt-10">
          Cart is empty
        </div>
        <div v-else class="overflow-x-auto">
          <div class="table w-full">
            <table class="w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" ref="checkAll" />
                    </label>
                  </th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Number of Items</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in cartStore.cart" :key="product.sys.id">
                  <th>
                    <label>
                      <input
                        v-model="selected"
                        type="checkbox"
                        class="checkbox"
                        @change="checkAll.checked = false"
                        :value="product.sys.id"
                      />
                    </label>
                  </th>
                  <td > 
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            :src="product.fields.image[0].fields.file.url"
                            alt="Heartbeat Hot Sauce- Pineapple Habanero"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="font-bold">
                      {{ product.fields.name }}
                    </div>
                    <ProductHeat :heat-level="product.fields.heatLevel" />
                  </td>
                  <td>
                    <ProductPrice :price="product.fields.price" />
                  </td>

                  <td>
                    <input
                      class="input input-bordered w-20"
                      type="number"
                      v-model="product.count"
                      min="0"
                    />
                  </td>
                  <th>
                    <NuxtLink
                      :to="{
                        name: 'products-id',
                        params: { id: product.sys.id },
                      }"
                    >
                      <button class="btn btn-ghost btn-xs">details</button>
                    </NuxtLink>
                  </th>
                </tr>
              </tbody>
            </table>
            <button @click="cartStore.removeProducts(selected)" v-if="selected.length" class="text-sm text-red-500">
              Remove Selected
            </button>
          </div>
        </div>
      </div>

      <div class="md:w-1/4 pl-5">
        <div class="card bg-slate-50">
          <div class="card-body">
            <ul>
              <li><strong class="mr-2">Subtotal</strong><ProductPrice :price="cartStore.getTotalPrice" /></li>
              <li><strong class="mr-2">Estimated Taxes </strong><ProductPrice :price="cartStore.getTotalPrice*0.1" /></li>
              <li><strong class="mr-2">Total</strong><ProductPrice :price="cartStore.getTotalPrice*0.1 + cartStore.getTotalPrice" /></li>
            </ul>
            <div class="card-actions justify-end w-full">
              <button class="btn btn-primary w-full" @click="handleCheckout">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
