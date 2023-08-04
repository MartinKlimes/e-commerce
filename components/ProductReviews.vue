<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";

const props = defineProps<{
  productId: {
    type: String;
    reqired: true;
  };
}>();

const showReviews = ref(true);
const showReviewForm = ref(false);

const deskree = useDeskree();
const loggedIn = computed(() => !!deskree.loggedInUser.value);

const { state, isLoading, execute } = useAsyncState(
  () => deskree.reviews.get(props.productId),
  null,
  { immediate: false }
);

const reviews = computed(() =>
  state.value.data.map((review) => ({
    uid: review.uid,
    ...review.attributes,
  }))
);

const amountOfStars = computed(() => {
  return reviews.value
    .map((i) => i.rating)
    .reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] + 1;
        return acc;
      },
      {5: 0, 4: 0, 3: 0, 2: 0, 1: 0}
    )
});

const avarageRating = computed(() => {
  if (reviews) {
    const ratingSum = reviews.value
    .map(i => i.rating).reduce((a, b) => a + b, 0);
    return (ratingSum / reviews.value.length).toFixed(1);
  } else {
    return 0;
  }
});

onMounted(() => {
  execute();
});

async function submitReview(review: any) {
  if (!loggedIn) return;
  await deskree.reviews.submit({
    product_id: props.productId,
    ...review,
  });
  showReviewForm.value = false;
  execute();
}
</script>

<template>
  <div class="mb-40">
    <hr class="my-10" />
    <h3 class="font-bold">Customer Reviews and Ratings</h3>
    <p v-if="isLoading || !state" class="text-2xl italic">Loading...</p>
    <template v-else>
      <pre></pre>

      <div class="flex gap-4 my-5">
        <ProductReviewsRating
          :avarage-rating="avarageRating"
          :num-of-reviews="reviews.length"
        />
        <ProductRating :reviews-length="reviews.length" :amountOfStars="amountOfStars" />
      </div>
      <div class="flex gap-2 mb-5">
        <NuxtLink
          v-if="!loggedIn"
          to="/login"
        ><button class="underline">Log in To Write a Review</button></NuxtLink>
        
        <button v-else @click="showReviewForm = !showReviewForm" class="btn btn-xs">
          Write a Review
        </button>
        <button @click="showReviews = !showReviews" class="btn btn-xs">
          {{ showReviews ? "Hide" : "Show" }} All Reviews
        </button>
      </div>
     
   
    <div v-if="showReviewForm">
      <h4 class="font-bold">Create Review</h4>
      <ProductReviewForm
        :loading="isLoading"
        :productId="props.productId"
        @submitReview="submitReview"
      />
    </div>
    <TransitionGroup name="reviews">
        <ProductReviewCard
          v-if="showReviews"
          v-for="review in reviews"
          :review="review"
          :key="review.uid"
        />
      </TransitionGroup>
    </template>
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
