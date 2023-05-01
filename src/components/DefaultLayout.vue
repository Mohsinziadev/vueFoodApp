<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<template>
  <div class="bg-gray-200 h-full">
    <Navbar />
    <main class="h-full">
      <router-view />
    </main>
  </div>
</template>
