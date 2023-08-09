<script setup lang="ts">
const props = defineProps<{
    avarageRating: number

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
</template>
