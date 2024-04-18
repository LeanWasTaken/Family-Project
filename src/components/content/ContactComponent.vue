<template>
  <div class="container">
    <div class="contact">
      <v-row class="row title">
        <h1>{{ $t('contact.slogan') }}</h1>
      </v-row>
      <v-row class="row">
        <v-col cols="12">
          <v-textarea label="Jūsu jautājums" rows="1"></v-textarea>
        </v-col>
      </v-row>
      <v-row class="row">
        <v-col cols="12" md="5">
          <v-text-field
            v-model="name"
            type="name"
            placeholder="Jānis"
            :rules="nameRules"
            :label="nameLabel"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="email"
            type="email"
            placeholder="johndoe@gmail.com"
            :rules="emailRules"
            :label="emailLabel"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn class="button" :disabled="!valid" @click="submitForm">{{
            $t('contact.button')
          }}</v-btn></v-col
        >
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const name = ref('')
const email = ref('')

const nameLabel = t('contact.name')
const emailLabel = t('contact.email')

const nameRules = [
  (value) => {
    if (value) return true
    return 'Name is required.'
  },
  (value) => {
    if (value?.length > 6) return true
    return 'Name must be at least 6 characters long.'
  }
]

const emailRules = [
  (value) => {
    if (value) return true
    return 'Email is required.'
  },
  (value) => {
    if (value) return true
    return 'Email must be in the correct format.'
  }
]

const valid = computed(() => {
  return (
    nameRules.every((rule) => rule(name.value)) && emailRules.every((rule) => rule(email.value))
  )
})

function submitForm() {
  if (valid.value && name.value && email.value) {
    console.log('Form submitted:', name.value, email.value)
  } else {
    console.log('Form is invalid.')
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 16px;
}
.container {
  background-color: #f2f2f2;
  padding-bottom: 16px;
}
.contact {
  max-width: 1240px;
  margin: auto;
  padding: 24px;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  height: 56px;
  width: 100%;
}
</style>
