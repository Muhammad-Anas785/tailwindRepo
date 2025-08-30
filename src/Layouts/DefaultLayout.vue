<script setup lang="ts">
import Day6WebLayoutFooter from "@/TailwindComponents/Day6WebLayoutFooter.vue";
import Day6WebLayoutNav from "@/TailwindComponents/Day6WebLayoutNav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="font-sans">
    <Day6WebLayoutNav />
    <main>
      <RouterView />
    </main>
    <Day6WebLayoutFooter />
  </div>
</template>
