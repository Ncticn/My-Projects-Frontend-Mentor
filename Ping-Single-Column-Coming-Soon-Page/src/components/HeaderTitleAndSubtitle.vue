<script setup>
const props = defineProps({

  subtitle: {
    type: String,
    required : true,
  }
});
</script>

<template>
  <div class="header-title-and-subtitle">
    <h1 class="header-title text-xl md:text-4xl text-custom-gray font-light mt-4">
      We are launching <b class="text-black font-bold">soon!</b>
    </h1>
    <h3 class="header-subtitle text-xs md:text-lg text-gray-600 font-normal mt-4">
      {{ subtitle }}
    </h3>
  </div>
</template>
