<script setup lang="ts">
import Sidebar from './sidebar.vue'
import TopBar from './topbar.vue'
import MainContent from './main-content.vue'
</script>

<template>
  <div class="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
    <Sidebar />
    <div class="flex flex-col flex-1 min-w-0">
      <TopBar />
      <MainContent />
    </div>
  </div>
</template>
