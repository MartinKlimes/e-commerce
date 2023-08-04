<script setup lang="ts">

const props = defineProps<{
  amountOfStars: Array<number>,
  reviewsLength: number, 
}>();

</script>

<template>
  
<div class="flex flex-col space-y-3">
    
    <div v-for="(star, index) in amountOfStars" :key="`numOfStar-${index}`" class="text-gray-500 flex items-center gap-1">

    <div class="badge badge-outline ">{{ index }} stars</div>

    <progress class="progress progress-primary w-56 h-3 " :value="(100 / reviewsLength) * star" max="100"></progress>
 
    <div class="badge badge-outline">{{ star }}</div>
    </div>

</div>
</template>
