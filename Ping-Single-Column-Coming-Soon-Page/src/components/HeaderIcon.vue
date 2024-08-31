<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="header-icon">
    <img :src="$props.imageUrl" alt="Logo" class="max-w-32 mx-auto mb-10" />
  </div>
</template>
