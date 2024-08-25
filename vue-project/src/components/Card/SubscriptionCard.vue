<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  button_text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="subscription">
    <h3 class="subscription-title color-white">{{ title }}</h3>
    <div class="subscription-pay-method">
      <span class="subscription-price color-white">{{ price }}</span>
      <p class="subscription-date color-light-gray">{{ payment_method }}</p>
    </div>
    <p class="subscription-description color-light-gray">
      {{ description }}
    </p>
    <a href="/" class="btn-sign-up bg-color-bright-yellow color-white">{{
      button_text
    }}</a>
  </div>
</template>
