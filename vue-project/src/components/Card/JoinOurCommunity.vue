<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
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
  <div class="join-our-community-card-main">
    <h2 class="join-our-community-title color-cyan">{{ title }}</h2>
    <span class="join-our-community-notification color-bright-yellow">{{
      subtitle
    }}</span>
    <p class="join-our-community-description color-grayish-blue">
      {{ description }}
    </p>
  </div>
</template>
