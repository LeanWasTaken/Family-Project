<template>
  <v-container class="container">
    <v-carousel hide-delimiters :height="screenWidth > 768 ? 500 : 'auto'" show-arrows="hover" cycle>
      <template v-for="(image, index) in images" :key="index">
        <v-carousel-item v-if="screenWidth > 768" :src="image" cover></v-carousel-item>
        <v-carousel-item v-else :src="image" contain></v-carousel-item>
      </template>
    </v-carousel>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Array of image sources
const images = ref([
  "./images/Moderna-1.webp",
  "./images/Moderna-3.webp",
  "./images/Orta-3.webp",
  "./images/Moderna-2.webp",
  "./images/Orta-2.webp",
  "./images/Deco-1.webp",
  "./images/Deco-2.webp",
  "./images/Orta-1.webp",
  "./images/Deco-3.webp"
]);

const screenWidth = ref(window.innerWidth)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>

<style scoped>
.container {
  margin-bottom: 16px;
  max-width: 1240px;
  max-height: 700px;
}
</style>
