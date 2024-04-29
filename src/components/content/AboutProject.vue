<template>
  <v-container class="content">
    <v-row class="row">
      <v-col cols="12" md="6" class="text-column">
        <h2>{{ $t('about.image-1-title') }}</h2>
        <p>
          {{ $t('about.image-1-description') }}
        </p>
      </v-col>
      <v-col cols="12" md="6" class="image-column">
        <v-img class="image" src="/images/Moderna-3.webp" alt="An image of a modern house"></v-img>
      </v-col>
    </v-row>
    <v-row class="row">
      <v-col cols="12" md="6" class="text-column" :order="screenWidth > 960 ? 2 : 1">
        <h2>{{ $t('about.image-2-title') }}</h2>
        <p>
          {{ $t('about.image-2-description') }}
        </p>
      </v-col>
      <v-col cols="12" md="6" class="image-column" :order="screenWidth > 960 ? 1 : 2">
        <v-img class="image" src="/images/Deco-3.webp" alt="An image of a modern house"></v-img>
      </v-col>
    </v-row>
    <v-row class="row">
      <v-col cols="12" md="6" class="text-column">
        <h2>{{ $t('about.image-3-title') }}</h2>
        <p>
          {{ $t('about.image-3-description') }}
        </p>
      </v-col>
      <v-col cols="12" md="6" class="image-column">
        <v-img class="image" src="/images/Orta-4.webp" alt="An image of a modern house"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.content {
  max-width: 1240px;
}

.text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 960px) {
  .text-column {
    align-items: center;
    text-align: center;
  }
}
</style>
