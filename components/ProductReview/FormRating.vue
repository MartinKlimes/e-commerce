<script setup lang="ts">

const emit = defineEmits(['update-rating'])


function updateRating(e) {
    emit('update-rating', e)
}
</script>


<template>
<div class="flex flex-col font-bold text-sm my-3 gap-2">
    <label for="rating">Rating</label>
    <div class="rating">
        <input @click="updateRating(1)" type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
        <input @click="updateRating(2)"  type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" checked />
        <input @click="updateRating(3)" type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
        <input @click="updateRating(4)" type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
        <input @click="updateRating(5)" type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400"/>
    </div>
</div>
</template>
