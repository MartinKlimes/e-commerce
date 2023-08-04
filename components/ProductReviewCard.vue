<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';

const props = defineProps<{
    review: any  
}>();

const timeAgo = useTimeAgo(props.review.createdAt)

const deskree = useDeskree();
</script>


<template>
<div class="border-1 shadow rounded-md mb-2 p-3">
    <h3 class="font-bold">{{ review.title }}</h3>
    <div class="">{{'⭐'. repeat(review.rating)}}</div>
    <p>{{ review.text }}</p>
    <div class="text-sm opacity-80">{{ timeAgo }}</div>
    
</div>
</template>
