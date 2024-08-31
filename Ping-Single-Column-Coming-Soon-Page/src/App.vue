<script setup>
import HeaderIcon from "./components/HeaderIcon.vue";
import HeaderTitleAndSubtitle from "./components/HeaderTitleAndSubtitle.vue";
import MainEmailAddress from "./components/MainEmailAddress.vue";
import FooterSocialBar from "./components/FooterSocialBar.vue";
</script>

<template>
  <div class="ping-single-column-coming-soon p-4 md:p-12">
    <div class="header text-center">
      <HeaderIcon image-url="/src/assets/img/logo.svg" />
      <HeaderTitleAndSubtitle
        subtitle="Subscribe and get notified"
      />
    </div>
    <div class="main">
      <MainEmailAddress />
      <img
        src="/src/assets/img/illustration-dashboard.png"
        alt="Illustration Dashboard"
        class="md:max-w-lg object-contain mx-auto"
      />
    </div>
    <div class="footer text-center mt-8">
      <FooterSocialBar/>
      <span class="text-[11px] text-custom-gray"> &copy; Copyright Ping. All rights reserved. </span>
    </div>
  </div>
</template>
