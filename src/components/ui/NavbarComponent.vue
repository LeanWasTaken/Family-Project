<template>
  <v-app-bar class="navbar">
    <v-app-bar-title class="py-auto">
      <RouterLink to="/">
        <v-img height="36px" position="left" href="/" src="/SATISHOUSE2-noBG.png" alt="logo" />
      </RouterLink>
    </v-app-bar-title>

    <!-- Navigation buttons -->
    <div v-if="screenWidth > 700" class="navigation-buttons">
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
    <div v-else class="navigation-buttons">
      <v-menu open-on-hover v-model="dropdown">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="primary"><v-icon size="large">mdi-menu</v-icon>Menu</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="route in routes" :key="route.path">
            <v-btn
              variant="text"
              :to="route.path"
              :class="{ active: isActive(route.path) }"
              >{{ $t(`pages.${route.key.toLowerCase()}`) }}</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locale } = useI18n()

const screenWidth = ref(window.innerWidth)
let dropdown = ref(false)

const items = [
  { title: 'Latviski', locale: 'lv' },
  { title: 'Русский', locale: 'ru' },
  { title: 'English', locale: 'en' }
]

const routes = [
  { path: '/housing', name: 'Housing', key: 'housing' },
  { path: '/technologies', name: 'Technologies', key: 'technologies' }
]

const changeLocale = (newLocale) => {
  locale.value = newLocale
  dropdown.value = false
}

const isActive = (path) => {
  return router.currentRoute.value.path === path
}

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
.logo {
  height: 28px;
  float: right;
}
.navbar {
  color: white;
}

.navigation-buttons {
  display: flex;
  color: black;
  justify-content: center;
}

.navigation-buttons .v-btn {
  margin: 0 10px;
}
</style>
