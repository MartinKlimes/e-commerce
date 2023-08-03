<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'

// zadefinuj props
const props = defineProps<{
  productId: {
    type: String,
    reqired: true
  },
}>()

const showReviews = ref(true)
const showReviewForm = ref(false)

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
    return (ratingSum / count).toFixed(1)

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
      <div class="flex gap-4 my-5 ">
        <ProductReviewsRating :avarage-rating="avarageRating" :num-of-reviews="state.data.length"/>
        <ProductRating :starList="starList"/>
      </div>
      <div class="flex gap-2 mb-5">
        <button @click="showReviewForm =! showReviewForm" class="btn btn-xs">Write a Review</button>
        <button @click="showReviews =! showReviews" class="btn btn-xs">{{ showReviews?'Hide':'Show' }} All Reviews</button>


      </div>
        <TransitionGroup name="reviews">
          <ProductReviewCard v-if="showReviews" v-for="review in state.data" :review="review" :key="review.uid" />
        </TransitionGroup>
      
    </template>
    <div v-if="showReviewForm">
      <h4 class="font-bold ">Create Review</h4>
      <ProductReviewForm :loading="isLoading" :productId="props.productId" @submitReview="submitReview" />
    </div>
  </div>
</template>


<style scoped>
.reviews-enter-active,
.reviews-leave-active {
  transition: all 0.5s ease;
}
.reviews-enter-from,
.reviews-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>