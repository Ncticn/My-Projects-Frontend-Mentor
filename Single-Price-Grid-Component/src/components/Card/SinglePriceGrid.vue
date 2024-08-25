<script setup>
import JoinOurCommunity from "@/components/Card/JoinOurCommunity.vue";
import SubscriptionCard from "@/components/Card/SubscriptionCard.vue";
import WhyUsCard from "@/components/Card/WhyUsCard.vue";
</script>

<template>
  <div class="single-price-card">
    <div class="single-price-card-container">
      <div class="single-price-card-wrapper">
        <JoinOurCommunity
          :title="'Join our community'"
          :subtitle="'30-day, hassle-free money back guarantee'"
          :description="'Gain access to our full library of tutorıais aiong wıth expert code revıews. Perfect for any developers who are serious about hanine their skills. '"
        />
        <SubscriptionCard
          :title="'Monthly Subscription'"
          :price="'$29'"
          :payment_method="'per month'"
          :description="'Full access for less than $1 a day'"
          :button_text="'Sing Up'"
        />
        <WhyUsCard
          :title="'Why Us'"
          :description="'Tutorials by industry experts Peer & expert code review Coding exerci ses Access to our GitHub repos Community forum Flashcard decks New videos every week'"
        />
      </div>
    </div>
  </div>
</template>
