<script setup>
import Navbar from '@/components/ui/NavbarComponent.vue'
import Footer from '@/components/ui/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-main>
      <Navbar />
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.route-enter-active {
  transition: all 0.4s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.route-leave-active {
  transition: all 0.4s ease-in;
}
</style>
