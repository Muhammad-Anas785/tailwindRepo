<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="bg-blue-600 text-white font-semibold rounded px-6 py-2 flex items-center gap-2 hover:bg-blue-700 transition"
      >
        Options
        <span :class="isOpen ? 'rotate-180' : 'rotate-0'" class="transition-transform">▼</span>
      </button>

      <transition name="fade">
        <div v-show="isOpen" class="absolute mt-2 w-48 bg-white border rounded shadow-lg overflow-hidden z-50 divide-y">
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Profile</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >Settings</a
          >
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Logout</a>
        </div>
      </transition>
    </div>
  </section>
</template>

<style>
/* Smooth fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
