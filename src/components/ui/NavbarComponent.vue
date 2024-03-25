<template>
  <v-app-bar transition-mode="fade">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <template v-slot:append>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="primary">Language</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-btn variant="text" @click="changeLocale(item.locale)">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <v-app-bar-title>{{ $t('greeting') }}</v-app-bar-title>
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
