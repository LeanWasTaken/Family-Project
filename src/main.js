import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import en from '@/locales/en.json'
import lv from '@/locales/lv.json'
import ru from '@/locales/ru.json'

const i18n = createI18n({
  legacy: false,
  locale: 'lv',
  fallbackLocale: 'en',
  messages: {
    en,
    lv,
    ru
  }
})

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  ssr: true,
  components,
  directives
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(i18n)

app.mount('#app')
