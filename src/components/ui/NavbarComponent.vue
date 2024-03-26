<template>
  <v-app-bar color="rgba(0, 0, 0, 0.5)" class="navbar">
    <v-app-bar-title>Company name</v-app-bar-title>

    <!-- Navigation buttons -->
    <div class="navigation-buttons">
      <v-btn
        v-for="route in routes"
        :key="route.path"
        variant="text"
        :to="route.path"
        :class="{ active: isActive(route.path) }"
      >
        {{ $t(`pages.${route.key.toLowerCase()}`) }}
      </v-btn>
    </div>

    <!-- Language dropdown -->
    <template v-slot:append>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn append-icon="mdi-arrow-down" v-bind="props" color="primary">{{
            $t('language')
          }}</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-btn variant="text" @click="changeLocale(item.locale)">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locale } = useI18n()
const items = [
  { title: 'Latviski', locale: 'lv' },
  { title: 'Русский', locale: 'ru' },
  { title: 'English', locale: 'en' }
]

const routes = [
  { path: '/', name: 'About Us', key: 'about' },
  { path: '/services', name: 'Services', key: 'services' },
  { path: '/contact', name: 'Contact', key: 'contact' }
]

const changeLocale = (newLocale) => {
  locale.value = newLocale
}

const isActive = (path) => {
  return router.currentRoute.value.path === path
}

</script>

<style scoped>
.navbar {
  color: white;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
}

.navigation-buttons .v-btn {
  margin: 0 10px; /* Adjust spacing between buttons */
}

.active {
  font-weight: bold; /* Example: Make the active button bold */
}
</style>
