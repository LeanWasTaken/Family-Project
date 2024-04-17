<script setup>
import Banner from '@/components/content/BannerImage.vue'
import AboutProject from '@/components/content/AboutProject.vue'
import Window from '@/components/content/WindowComponent.vue'
import Contact from '@/components/content/ContactComponent.vue'
</script>

<template>
  <Banner class="banner" />
  <AboutProject class="about" />
  <Window class="window" />
  <Contact />

</template>

<style scoped>
.about {
  margin-top: 20px;
}
</style>
