<template>
    <v-container>
    <h1 class="house-header">Houses and layouts</h1>
    <v-row>
        <v-col>
            <v-card>
                <v-img cover class="house-img" src="./images/Moderna-1.png" />
                <v-card-item>
                    <v-card-title class="house-title">Moderna</v-card-title>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col>
            <v-card>
                <v-img cover class="house-img" src="./images/Orta-1.png" />
                <v-card-item>
                    <v-card-title class="house-title">Orta</v-card-title>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col>
            <v-card>
                <v-img cover class="house-img" src="./images/Deco-1.png" />
                <v-card-item>
                    <v-card-title class="house-title">Deco</v-card-title>
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


</style>