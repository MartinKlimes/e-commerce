<script setup lang="ts">


defineProps<{
    avarageRating: Number,
    numOfReviews: Number,

}>()



</script>


<template>
<div
    class="rounded-2xl p-4 border-2 flex flex-col justify-center border-red-500 whitespace-nowrap shadow-xl"
>
    <div class="flex gap-1 items-end">
    <p class="text-2xl font-bold">{{ avarageRating }}</p>
    <p class="text-sm">out of</p>
    <p class="text-2xl font-bold">5</p>
    </div>
    <p class="text-xs mt-1">[{{ numOfReviews }} Reviews]</p>
</div>
</template>
