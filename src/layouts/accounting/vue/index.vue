<script setup lang="ts">
import Sidebar from './sidebar.vue'
import MainContent from './main-content.vue'
</script>

<template>
  <div class="h-screen bg-[#f3f3f4] dark:bg-[#070707] text-black dark:text-white">
    <main class="h-full flex rounded-lg overflow-hidden">
      <Sidebar />
      <MainContent />
    </main>
  </div>
</template>
