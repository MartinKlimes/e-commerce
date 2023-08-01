<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'

// zadefinuj props
const props = defineProps<{
  productId: {
    type: String,
    reqired: true
  },
}>()
const deskree = useDeskree()
const {state, isLoading, execute} = useAsyncState(() =>
  deskree.reviews.get(props.productId),
  null,
  {immediate: false}
)

const starList = computed(() => {
  if (state.value) {
    return state.value.data.map(i => i.attributes.rating)
  } 
})

const avarageRating = computed(() => {
  if (state.value) {
    const count = state.value.data.length
    const ratingSum = starList.value.reduce((a, b) => a + b, 0)
    return ratingSum / count

  } else {
    return 0
  }
})

onMounted(() => {
  execute()
  // setTimeout(() => {
  //   deskree.reviews.submit({
  //     product_id: props.productId,
  //     rating: 3,
  //     text: "This is a second test review",
  //     title: "Test review number 2"
  //   })

  // }, 2000);
})

function submitReview(review: any) {
  deskree.reviews.submit({
    product_id: props.productId,
    rating: review.rating,
    text: review.text,
    title: review.title
  })
  execute()
}


</script>

<template>
  <!-- <pre> {{ state }}</pre> -->

  <div class="mb-40">
    <hr class="my-10" />
    <h3 class="font-bold">Customer Reviews and Ratings</h3>

    <p v-if="isLoading || !state" class="text-2xl italic">Loading...</p>
    <template v-else>
      <div class="flex gap-4 my-4 ">
        <div
          class="rounded-2xl p-4 border-2 flex flex-col justify-center border-red-500 whitespace-nowrap shadow-xl"
        >
          <div class="flex gap-1 items-end">
            <p class="text-2xl font-bold">{{ avarageRating }}</p>
            <p class="text-sm">out of</p>
            <p class="text-2xl font-bold">5</p>
          </div>
          <p class="text-xs mt-1">[{{ state.data.length }} Reviews]</p>
        </div>
          <ProductRating :starList="starList"/>
      </div>
        <ProductReviewCard v-for="review in state.data" :review="review" :key="review.uid" />
      </template>

      <h4>Create Review</h4>
      <ProductReviewForm :loading="isLoading" :productId="props.productId" @submitReview="submitReview" />
  </div>
</template>
