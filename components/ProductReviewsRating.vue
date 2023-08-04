<script setup lang="ts">


const props = defineProps<{
    avarageRating: number,
    numOfReviews: number,

}>()


onMounted(( ) => {
    
    const rating = document.querySelector('.rating')
    const ratingList = rating?.querySelectorAll('input[type="radio"]')
    ratingList?.forEach((item, index) => {
        if (props.avarageRating *2 <= index + 1 && props.avarageRating*2 > index ) {
            item.checked  = true
        }
    })
})
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
    <div class="rating rating-sm rating-half">
  <!-- <input type="radio" name="rating-10" class="rating-hidden" /> -->
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-1" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-2" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-1"  />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-2" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-1" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-2" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-1" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-2" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-1" />
        <input type="radio" disabled name="rating-10" class="cursor-default bg-yellow-400 mask mask-star-2 mask-half-2" />
    </div>
    <p class="text-xs mt-1 text-gray-500 ">[{{ numOfReviews }} Reviews]</p>
</div>
</template>
