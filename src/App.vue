<script setup>
import Navbar from '@/components/ui/NavbarComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </v-main>
  </v-app>
</template>

<style scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
