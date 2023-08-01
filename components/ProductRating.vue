<script setup lang="ts">

const props = defineProps<{
    starList: Array<number>
}>();

let numberOfStar = ref({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

props.starList.forEach(cislo => {
    if (cislo >= 1 && cislo <= 5) {
        numberOfStar.value[cislo]++;
    }
  });
</script>


<template>
  
<div class="flex flex-col space-y-3">
    {{ pocetCisel  }}
    <div class="flex items-center gap-1">
    <p class="text-sm">5 stars</p>
    <progress class="progress w-56" :value="(100 / starList.length) * numberOfStar[5]" max="100"></progress>
    <p class="text-sm">{{ numberOfStar[5] }}</p>
    </div>
    
    <div class="flex items-center gap-1">
    <p class="text-sm">4 stars</p>
    <progress class="progress w-56" :value="(100 / starList.length) * numberOfStar[4]" max="100"></progress>
    <p class="text-sm">{{ numberOfStar[4] }}</p>
    </div>
    <div class="flex items-center gap-1">
    <p class="text-sm">3 stars</p>
    <progress class="progress w-56" :value="(100 / starList.length) * numberOfStar[3]" max="100"></progress>
    <p class="text-sm">{{ numberOfStar[3] }}</p>
    </div>
    <div class="flex items-center gap-1">
    <p class="text-sm">2 stars</p>
    <progress class="progress w-56" :value="(100 / starList.length) * numberOfStar[2]" max="100"></progress>
    <p class="text-sm">{{ numberOfStar[2] }}</p>
    </div>
    <div class="flex items-center gap-1">
    <p class="text-sm">1 stars</p>
    <progress class="progress w-56" :value="(100 / starList.length) * numberOfStar[1]" max="100"></progress>
    <p class="text-sm">{{ numberOfStar[1] }}</p>
    </div>
</div>
</template>
