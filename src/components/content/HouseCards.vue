<template>
  <v-container>
    <h1 class="house-header">{{ $t('houses.houses-title') }}</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" src="./images/Deco-1.webp" />
          <v-card-item>
            <v-card-title class="house-title">Deco</v-card-title>
            <v-card-text class="house-description"
              >{{ $t('houses.houses-area') }}: 108 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-contour') }}: 82,88 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-terrace') }}: 19,96 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-seiling') }}: 2,8 m</v-card-text
            >
            <v-btn class="button">{{ $t('houses.houses-btn') }}</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" src="./images/Orta-1.webp" />
          <v-card-item>
            <v-card-title class="house-title">Orta</v-card-title>
            <v-card-text class="house-description"
              >{{ $t('houses.houses-area') }}: 130,83 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-contour') }}: 108,61 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-terrace') }}: 12,36 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-seiling') }}: 2,8 m</v-card-text
            >
            <v-btn class="button">{{ $t('houses.houses-btn') }}</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" src="./images/Moderna-1.webp" />
          <v-card-item>
            <v-card-title class="house-title">Moderna</v-card-title>
            <v-card-text class="house-description"
              >{{ $t('houses.houses-area') }}: 187,07 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-contour') }}: 129,77 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-terrace') }}: 44,26 m²</v-card-text
            >
            <v-card-text class="house-description"
              >{{ $t('houses.houses-seiling') }}: 2,8 m</v-card-text
            >
            <v-btn class="button">{{ $t('houses.houses-btn') }}</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.house-header {
  font-size: 40px;
}

.house-img {
  margin-top: 10px;
  aspect-ratio: 16/9;
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
</style>
