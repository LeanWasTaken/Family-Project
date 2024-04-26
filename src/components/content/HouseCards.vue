<template>
  <v-container>
    <h1 class="house-header">{{ $t('houses.houses-title') }}</h1>
    <v-row>
      <v-col v-for="(house, index) in houses" :key="index" cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" :src="house.image" />
          <v-card-item>
            <v-card-title class="house-title">{{ house.name }}</v-card-title>
            <v-card-text class="house-description"
              >{{ $t('houses.houses-area') }}: {{ house.area }}</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-contour') }}: {{ house.contour }}</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-terrace') }}: {{ house.terrace }}</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-seiling') }}: {{ house.ceiling }}</v-card-text
            >
            
          </v-card-item>
          <v-card-actions class="actions"><v-spacer /><v-btn class="button" @click="openDialog(house)">{{ $t('houses.houses-btn') }}</v-btn></v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- i honestly hate grid, idk why -->
    <v-dialog v-model="dialogVisible" class="preview-dialog">
      <v-card>
        <v-container class="wrapper">
          <v-row>
            <v-col cols="12" lg="8" md="8">
              <v-carousel v-if="selectedHouse" v-model="currentImageIndex" hide-delimiters>
                <v-carousel-item v-for="(image, index) in selectedHouse.images" :key="index">
                  <v-img class="dialog-image" cover :src="image" />
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" lg="4" md="4">
              <v-card-title>{{ selectedHouse.name }}</v-card-title>
              <v-card-text>
                <p>{{ $t('houses.houses-area') }}: {{ selectedHouse.area }}</p>
                <p>{{ $t('houses.houses-contour') }}: {{ selectedHouse.contour }}</p>
                <p>{{ $t('houses.houses-terrace') }}: {{ selectedHouse.terrace }}</p>
                <p>{{ $t('houses.houses-seiling') }}: {{ selectedHouse.ceiling }}</p>
                <br>
                <p>{{ $t('houses.houses-bedroom') }}: {{ selectedHouse.bedroom }}</p>
                <p>{{ $t('houses.houses-workroom') }}: {{ selectedHouse.workroom }}</p>
                <p>{{ $t('houses.houses-kitchen-livingroom') }}: {{ selectedHouse.kitchenlivingroom }}</p>
                <p>{{ $t('houses.houses-bathroom') }}: {{ selectedHouse.bathroom }}</p>
                <p>{{ $t('houses.houses-techroom') }}: {{ selectedHouse.techroom }}</p>
                <p>{{ $t('houses.houses-terraces') }}: {{ selectedHouse.terraces }}</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn class="button" @click="dialogVisible = false">{{ $t('common.close') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const selectedHouse = ref(null)
const currentImageIndex = ref(0)

const houses = ref([
  {
    name: 'Deco',
    image: './images/Deco-1.webp',
    area: '108 m²',
    contour: '82,88 m²',
    terrace: '19,96 m²',
    ceiling: '2,8 m',
    bedroom: '2',
    kitchenlivingroom: '1',
    bathroom: '1',
    techroom: '1',
    terraces: '1',
    images: [
      './images/Deco-1.webp',
      './images/Deco-2.webp',
      './images/Deco-3.webp',
      './images/Deco-4.webp',
      './images/Deco-5.webp',
      './images/Deco-6.webp',
      './images/Deco-7.webp',
      './images/Deco-8.webp'
    ]
  },
  {
    name: 'Orta',
    image: './images/Orta-1.webp',
    area: '130,83 m²',
    contour: '108,61 m²',
    terrace: '12,36 m²',
    ceiling: '2,8 m',
    bedroom: '3-4',
    kitchenlivingroom: '1',
    bathroom: '2',
    techroom: '1-2',
    terraces: '1',
    images: [
      './images/Orta-1.webp',
      './images/Orta-2.webp',
      './images/Orta-3.webp',
      './images/Orta-4.webp',
      './images/Orta-5.webp',
      './images/Orta-6.webp',
      './images/Orta-7.webp',
      './images/Orta-8.webp',
      './images/Orta-9.png'
    ]
  },
  {
    name: 'Moderna',
    image: './images/Moderna-1.webp',
    area: '187,07 m²',
    contour: '129,77 m²',
    terrace: '44,26 m²',
    ceiling: '2,8 m',
    bedroom: '3-4',
    workroom: '1',
    kitchenlivingroom: '1',
    bathroom: '2',
    techroom: '2',
    terraces: '1',
    images: [
      './images/Moderna-1.webp',
      './images/Moderna-2.webp',
      './images/Moderna-3.webp',
      './images/Moderna-4.webp',
      './images/Moderna-5.webp',
      './images/Moderna-6.webp'
    ]
  },
  {
    name: 'Villa Dante',
    image: './images/Dante-4.webp',
    area: '311,5 m²',
    contour: '129,77 m²',
    terrace: '58,3 m²',
    ceiling: '2,8 m',
    bedroom: ' ',
    workroom: ' ',
    kitchenlivingroom: ' ',
    bathroom: ' ',
    techroom: ' ',
    terraces: ' ',
    images: [
      './images/Dante-7.webp',
      './images/Dante-5.webp',
      './images/Dante-6.webp',
      './images/Dante-3.webp',
      './images/Dante-1.webp',
      './images/Dante-2.webp'
    ]
  }
])

const currentImage = ref(houses.value[selectedHouse.value]?.images[currentImageIndex.value])

function openDialog(house) {
  selectedHouse.value = house
  currentImageIndex.value = 0
  currentImage.value = houses.value[selectedHouse.value]?.images[currentImageIndex.value]
  dialogVisible.value = true
}
</script>

<style scoped>
.actions {
  margin-top: 0px;
  padding-top: 0px
}
.house-header {
  font-size: 40px;
}

.house-img {
  margin-top: 10px;
  aspect-ratio: 16/9;
}

.wrapper {
  width: 100%;
}

.dialog-image {
  width: 100%;
  background-size: cover;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin-top: 20px;
  display: block;
  width: auto;
}

.house-description {
  margin: 0px;
  padding: 2px;
}

.image-preview {
  margin-top: 20px;
  justify-content: center;
}
.preview-dialog {
  max-width: 1240px;
}
</style>
