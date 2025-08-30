<script setup>
import { ref } from "vue";

let isOpen = ref(false);

const activeLink = ref("home");
</script>

<template>
  <header class="bg-white shadow-md">
    <div
      class="container mx-auto flex flex-row-reverse sm:flex-row justify-between items-center p-4"
    >
      <div class="text-lg font-bold text-blue-600 md:text-2xl">Dream Town</div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex gap-6 text-gray-700 font-medium">
        <router-link to="/">
          <a
            href="#"
            @click.prevent="activeLink = 'home'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'home' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >Home</a
          >
        </router-link>
        <router-link to="/about">
          <a
            href="#"
            @click.prevent="activeLink = 'about'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'about' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >About</a
          >
        </router-link>
        <router-link to="/contact">
          <a
            href="#"
            @click.prevent="activeLink = 'contact'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'contact' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >Contact</a
          >
        </router-link>
        <router-link to="/blogs">
          <a
            href="#"
            @click.prevent="activeLink = 'blogs'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'blogs' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >Blogs</a
          >
        </router-link>
      </nav>

      <!-- Mobile Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 hover:text-gray-800 transition"
      >
        ☰
      </button>
    </div>
    <!-- Mobile Menu -->
    <div
      v-show="isOpen"
      class="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
      :class="isOpen ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'"
    >
      <nav class="flex flex-col gap-4 p-4 text-gray-700 font-medium">
        <router-link to="/">
          <a
            href="#"
            @click.prevent="activeLink = 'home'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'home' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >Home</a
          >
        </router-link>
        <router-link to="/about">
          <a
            href="#"
            @click.prevent="activeLink = 'about'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'about' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >About</a
          >
        </router-link>
        <router-link to="/contact">
          <a
            href="#"
            @click.prevent="activeLink = 'contact'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'contact' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >Contact</a
          >
        </router-link>
        <router-link to="/blogs">
          <a
            href="#"
            @click.prevent="activeLink = 'blogs'"
            :class="[
              'hover:text-blue-600 transition',
              activeLink === 'blogs' ? 'text-blue-600' : 'text-gray-800',
            ]"
            >Blogs</a
          >
        </router-link>
      </nav>
    </div>
  </header>
</template>
