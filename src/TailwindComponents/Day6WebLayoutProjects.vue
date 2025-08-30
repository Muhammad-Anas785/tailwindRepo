<script setup>
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    desc: "A responsive online store built with Vue & Tailwind.",
    img: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing my skills and work.",
    img: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    title: "Dashboard UI",
    desc: "An admin dashboard with charts and analytics.",
    img: "https://picsum.photos/400/250?random=3",
  },
  {
    id: 4,
    title: "E-commerce Website",
    desc: "A responsive online store built with Vue & Tailwind.",
    img: "https://picsum.photos/400/250?random=4",
  },
  {
    id: 5,
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing my skills and work.",
    img: "https://picsum.photos/400/250?random=5",
  },
  {
    id: 6,
    title: "Dashboard UI",
    desc: "An admin dashboard with charts and analytics.",
    img: "https://picsum.photos/400/250?random=6",
  },
];
</script>
<template>
  <section id="projects" class="bg-gray-50 py-16 px-6 md:px-12">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl">
        My <span class="text-blue-600">Projects</span>
      </h2>
      <p class="text-gray-600 mt-4">
        Some of the recent work I've done using Vue.js and Tailwind Css.
      </p>
    </div>

    <!-- projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <img :src="project.img" alt="project image" class="object-cover w-full h-48" />
        <div class="flex flex-col flex-1 p-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 flex-1">{{ project.desc }}</p>
          <button
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
