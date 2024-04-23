<script setup>
import Banner from '@/components/content/BannerImage.vue'
import Cards from '@/components/content/HouseCards.vue'
import Contact from '@/components/content/ContactComponent.vue'
</script>

<template>
  <Banner />
  <Cards class="cards" />
  <Contact />
</template>

<style scoped>
.cards {
  max-width: 1240px;
}
</style>
