<template>
  <v-app-bar scroll-behavior="elevate" color="rgba(0, 0, 0, 0.5)" class="navbar">
    <template v-slot:append>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="primary">{{ $t('language') }}</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-btn variant="text" @click="changeLocale(item.locale)">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <v-app-bar-title>Company name</v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const items = [
  { title: 'Latviski', locale: 'lv' },
  { title: 'Русский', locale: 'ru' },
  { title: 'English', locale: 'en' }
]

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<style scoped>
.navbar {
  color: white;
}
</style>
