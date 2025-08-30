<script setup>
import { ref } from "vue";

let activeTab = ref("profile");

const tabs = [
  { id: "profile", label: "Profile", content: "This is the profile tab content." },
  { id: "settings", label: "Settings", content: "This is the settings tab content." },
  { id: "messages", label: "Messages", content: "Here you can read your messages." },
];
</script>

<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-100 p-6">
    <div class="bg-white w-full max-w-md rounded-lg shadow-md">
      <!-- tabs header -->
      <div class="flex border-b">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'flex-1 px-4 py-2 text-center font-medium transition',
            activeTab === tab.id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gay-600 hover:text-gray-800',
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Content Area -->
      <div class="p-6">
        <transition name="fade" mode="out-in">
          <div :key="activeTab">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              {{ tabs.find((tab) => tab.id === activeTab).label }}
            </h2>
            <p class="text-gray-600">{{ tabs.find((tab) => tab.id === activeTab).content }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style>
/* Smooth fade animation for tab content */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
