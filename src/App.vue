<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-[#3c3c3c] overflow-x-hidden">
    <Navbar />
    <main class="flex-1 w-full">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
