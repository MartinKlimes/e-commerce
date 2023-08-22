<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';

const props = defineProps<{
    review: any  
}>();

const timeAgo = useTimeAgo(props.review.createdAt)

const deskree = useDeskree();
function deleteReview() {
    deskree.reviews.delete(props.review.uid);
}

</script>


<template>
<div class="border-1 shadow rounded-md mb-2 p-3">
    <h3 class="font-bold">{{ review.title }}</h3>
    <div class="">{{'⭐'. repeat(review.rating)}}</div>
    <p>{{ review.text }}</p>
    <div class="text-sm opacity-80">{{ timeAgo }}</div>
    <!-- <pre>{{ review }}</pre> -->
    <!-- <button @click="deleteReview" class="btn btn-outline btn-error btn-xs">X</button> -->
    
</div>
</template>
