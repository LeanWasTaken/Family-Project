<template>
  <div class="container">
    <div class="contact">
      <v-row class="row">
        <h1>Nevarat izvēlēties ? Mēs palīdzēsim</h1>
      </v-row>
      <v-row class="row">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Phone number"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="row">
        <v-btn :disabled="!valid" @click="submitForm">Send Inquiry</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const phone = ref('')
const email = ref('')

const phoneRules = [
  (value) => {
    if (value) return true
    return 'Phone number is required.'
  },
  (value) => {
    if (/^\+?([0-9]{7,12})$/.test(value)) return true
    return 'Phone number must be valid.'
  }
]

const emailRules = [
  (value) => {
    if (value) return true
    return 'Email is required.'
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true
    return 'Email must be valid.'
  }
]

const valid = computed(() => {
  return (
    phoneRules.every((rule) => rule(phone.value)) && emailRules.every((rule) => rule(email.value))
  )
})

function submitForm() {
  if (valid.value) {
    // Handle form submission here
    console.log('Form submitted:', phone.value, email.value)
  } else {
    console.log('Form is invalid.')
  }
}
</script>

<style scoped>
.container {
  min-height: 300px;
  background-color: bisque;
}
.contact {
  max-width: 90%;
  margin: auto;
  padding: 24px;
}
</style>