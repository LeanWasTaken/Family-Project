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
        <div class="image" alt="An image of a modern house"></div>
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
        <div class="image" alt="An image of a modern house"></div>
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
        <div class="image" alt="An image of a modern house"></div>
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
  background-image: url('/images/Deco-5.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 300px;
}

.content {
  max-width: 1240px;
  margin-bottom: 10px;
}

.text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Media query for smaller viewports */
@media (max-width: 960px) {
  .content {
    padding: 0px 25px;
  }

  .text-column {
    align-items: center;
    text-align: center;
  }
  .image {
    min-height: 400px;
  }
}
</style>
