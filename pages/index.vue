<script setup>
const productStore = useProductStore();
useAsyncData("products", async () => productStore.fetchProducts());
</script>
<template>
  <div>
    <HomeHero />

    <div class="flex justify-end mt-10 px-10">
      <ProductFilters />
    </div>

    <div
      v-if="productStore.products"
      class="gap-7 p-10 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-wrap justify-items-stretch items-stretch"
    >
    <transition-group name="list" >

      <ProductCard
        v-for="product in productStore.products"
        :product="product"
        :key="product.sys.id"
        class="mb-5"
      />


    </transition-group>

    </div>
  </div>
</template>
<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

</style>