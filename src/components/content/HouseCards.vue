<template>
  <v-container>
    <h1 class="house-header">{{ $t('houses.houses-title') }}</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" src="./images/Moderna-1.png" />
          <v-card-item>
            <v-card-title class="house-title">Moderna</v-card-title>
            <v-card-text
              >Laborum voluptates at ab, ullam aperiam repellat. Eligendi repellendus quidem,
              delectus libero, consequatur necessitatibus enim animi cupiditate qui id vero
              asperiores culpa!</v-card-text
            >
            <v-btn class="button">{{ $t('houses.houses-btn') }}</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" src="./images/Orta-1.png" />
          <v-card-item>
            <v-card-title class="house-title">Orta</v-card-title>
            <v-card-text
              >Laborum voluptates at ab, ullam aperiam repellat. Eligendi repellendus quidem,
              delectus libero, consequatur necessitatibus enim animi cupiditate qui id vero
              asperiores culpa!</v-card-text
            >
            <v-btn class="button">{{ $t('houses.houses-btn') }}</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img cover class="house-img" src="./images/Deco-1.png" />
          <v-card-item>
            <v-card-title class="house-title">Deco</v-card-title>
            <v-card-text
              >Laborum voluptates at ab, ullam aperiam repellat. Eligendi repellendus quidem,
              delectus libero, consequatur necessitatibus enim animi cupiditate qui id vero
              asperiores culpa!</v-card-text
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
  width: 15%;
}
</style>
