<script setup>
import { ref } from "vue";

let isOpen = ref(false);
</script>

<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-100">
    <!-- button to open modal -->
    <button
      @click="isOpen = true"
      class="bg-blue-600 text-white font-medium rounded py-2 px-6 hover:bg-blue-700 transition"
    >
      Open Modal
    </button>

    <!-- modal (overlay + content) -->
    <transition name="fade">
      <div v-show="isOpen" class="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
        <!-- Modal Box -->
        <transition name="scale">
          <div
            v-show="isOpen"
            class="bg-white rounded-lg shadow-lg w-96 p-6 relative transition-transform transfrom scale-95"
          >
            <!-- close button -->
            <button @click="isOpen = false" class="absolute top-2 right-2">✖</button>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Modal Title</h2>
            <p class="text-gray-600">This is the simple modal built with vue js + tailwind css.</p>
            <div class="mt-6 flex justify-end gap-3">
              <button
                @click="isOpen = false"
                class="bg-red-400 px-4 py-2 text-white rounded cursor-pointer hover:bg-red-500 transition"
              >
                Cancel
              </button>
              <button
                @click="isOpen = false"
                class="bg-blue-600 px-4 py-2 text-white rounded cursor-pointer hover:bg-blue-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<style scoped>
/* Overlay fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Modal scale animation */
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
