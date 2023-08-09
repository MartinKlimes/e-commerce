<script setup lang="ts">


const props = defineProps<{
    avarageRating: {
        default: 0,
        type: number
    },
    numOfReviews: {
        default: 0,
        type: number
    }

}>()



</script>


<template>
<div
    class="rounded-2xl p-4 border-2 flex flex-col justify-center items-center border-primary whitespace-nowrap shadow-xl"
>
    <div class="flex gap-1 items-end">
    <p class="text-2xl font-bold">{{ avarageRating }}</p>
    <p class="text-sm">out of</p>
    <p class="text-2xl font-bold">5</p>
    
    </div>
    <ProductReviewRatingStars :rating="avarageRating" />
    <p class="text-xs mt-1 text-gray-500 ">[{{ numOfReviews }} Reviews]</p>
</div>
</template>
