<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';

const props = defineProps<{
    review: any  
}>();

const timeAgo = useTimeAgo(props.review.attributes.createdAt)
</script>


<template>
<div class="border-1 shadow rounded-md mb-2">
    <h3 class="font-bold">{{ review.attributes.title }}</h3>
    <div class="">{{'⭐'. repeat(review.attributes.rating)}}</div>
    <h4 class="">{{ review.attributes.author }}</h4>
    <p>{{ review.attributes.text }}</p>
    <div class="text-sm opacity-80">{{ timeAgo }}</div>
    
</div>
</template>
