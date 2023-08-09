<script setup>
const productStore = useProductStore();
const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
function getData() {
    console.log(data.value)
}

</script>


<template>
<pre class="test">{{data}}</pre>
<button @click="refresh" class="btn w-max">Fetch</button>
</template>


<style scoped>
.test {
    font-size: 0.6rem;
}

</style>