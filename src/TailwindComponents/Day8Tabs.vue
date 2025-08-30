<script setup>
import { ref } from "vue";

let activeTab = ref("profile");
</script>
<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-100 p-6">
    <div class="bg-white w-full max-w-md rounded-lg shadow-md">
      <!-- Tabs Header -->
      <div class="flex border-b">
        <button
          @click="activeTab = 'profile'"
          :class="[
            'flex-1 px-4 py-2 text-center font-medium transition',
            activeTab == 'profile'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'border-gray-500 hover:border-gray-600',
          ]"
        >
          Profile
        </button>
        <button
          @click="activeTab = 'settings'"
          :class="[
            'flex-1 px-4 py-2 text-center font-medium transition',
            activeTab == 'settings'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'border-gray-500 hover:border-gray-600',
          ]"
        >
          Settings
        </button>
      </div>

      <!-- Tabs Content -->
      <div class="p-6">
        <div v-if="activeTab === 'profile'">
          <h2 class="text-2xl font-semibold text-gray-800">Profile</h2>
          <p class="text-sm text-gray-500 mt-2">This is the profile tab content.</p>
        </div>
        <div v-if="activeTab === 'settings'">
          <h2 class="text-2xl font-semibold text-gray-800">Settings</h2>
          <p class="text-sm text-gray-500 mt-2">This is the settings tab content.</p>
        </div>
      </div>
    </div>
  </section>
</template>
