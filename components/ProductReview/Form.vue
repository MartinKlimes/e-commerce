<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
const form = reactive({
  title: "",
  text: "",
  rating: 5,
});

function updateRating(e) {
  form.rating = e
}
</script>
<template>
  <div>
    <FormKit
      type="form"
      :config="{ validationVisibility: 'submit' }"
      @submit="$emit('submitReview', form)"
      :actions="false"
      v-model="form"
    >
   
      <ProductReviewFormRating id="rating" @update-rating="updateRating"/>
    

      <FormKit type="text" label="Title" name="title" validation="required" />

      <FormKit
        type="textarea"
        name="text"
        label="Review"
        validation="required"
      />
      
      <AppButton class="btn-primary" :loading="loading"
        >Submit Review</AppButton
      >
    </FormKit>

  
  </div>
</template>