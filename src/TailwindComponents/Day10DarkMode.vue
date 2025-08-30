<script setup>
import { onMounted, ref } from "vue";

const isDark = ref(false);

onMounted(() => {
  if (localStorage.getItem("theme") === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});

const toggleDarkTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center dark:bg-gray-900 bg-white text-gray-900 dark:text-gray-100"
  >
    <h1 class="text-3xl font-bold mb-6">Dynamic Theme Switcher</h1>
    <button
      class="px-6 py-3 rounded-lg font-semibold transition duration-300"
      @click="toggleDarkTheme"
      :class="isDark ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'"
    >
      {{ isDark ? "Switch to Light 🌞" : "Switch to Dark 🌙" }}
    </button>
  </div>
</template>
