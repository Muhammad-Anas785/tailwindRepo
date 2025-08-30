<script setup>
import { ref } from "vue";

let isOpen = ref(false);
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div
      class="container mx-auto flex flex-row-reverse justify-between items-center p-4 md:flex-row"
    >
      <div class="text-lg font-bold text-blue-600 md:text-2xl">Anas Portfolio</div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6 text-gray-600 font-medium">
        <RouterLink to="/">
          <a href="" class="hover:text-blue-600 transition">Home</a>
        </RouterLink>
        <RouterLink to="/about">
          <a href="" class="hover:text-blue-600 transition">About</a>
        </RouterLink>
        <RouterLink to="/projects">
          <a href="" class="hover:text-blue-600 transition">Projects</a>
        </RouterLink>
        <RouterLink to="/contact">
          <a href="" class="hover:text-blue-600 transition">Contact</a>
        </RouterLink>
      </nav>

      <!-- Mobile Button -->
      <button
        class="md:hidden text-gray-700 font-bold hover:text-gray-800 transition"
        @click="isOpen = !isOpen"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isOpen"
      class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="isOpen ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'"
    >
      <nav class="flex flex-col gap-4 p-4 text-gray-700 bg-white font-medium">
        <RouterLink to="/">
          <a href="" class="hover:text-blue-600 transition">Home</a>
        </RouterLink>
        <RouterLink to="/about">
          <a href="" class="hover:text-blue-600 transition">About</a>
        </RouterLink>
        <RouterLink to="/projects">
          <a href="" class="hover:text-blue-600 transition">Projects</a>
        </RouterLink>
        <RouterLink to="/contact">
          <a href="" class="hover:text-blue-600 transition">Contact</a>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
