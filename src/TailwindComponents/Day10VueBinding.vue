<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <button
      @click="isActive = !isActive"
      :class="[
        'px-6 py-3 rounded font-semibold transition duration-300',
        isActive ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      ]"
    >
      {{ isActive ? "Liked ❤️" : "Like" }}
    </button>
  </div>
</template>
