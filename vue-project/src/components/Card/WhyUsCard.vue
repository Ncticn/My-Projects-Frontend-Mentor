<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="why-us">
    <h3 class="why-us-title color-white">{{ title }}</h3>
    <p class="why-us-description color-light-gray">{{ description }}</p>
  </div>
</template>
