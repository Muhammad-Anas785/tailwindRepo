<script setup lang="ts">
import Day5CardLayout from "./Day5CardLayout.vue";
</script>

<template>
  <section class="bg-gray-50">
    <div class="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8">
      <!-- Left Content -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Build Your Dream Website</h1>
        <p class="text-gray-600 mb-6">Fast, Responsive, Beautiful Designs With Tailwind CSS.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </button>
          <button
            class="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Right Image -->
      <div class="flex-1">
        <img
          src="https://picsum.photos/600/400"
          alt="Hero Image"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
  <Day5CardLayout />
</template>
