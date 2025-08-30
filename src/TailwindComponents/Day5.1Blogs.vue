<script setup>
const posts = [
  {
    id: 1,
    title: "Post One",
    img: "https://picsum.photos/400/300?1",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Post Two",
    img: "https://picsum.photos/400/500?2",
    desc: "Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    title: "Post Three",
    img: "https://picsum.photos/400/250?3",
    desc: "Consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Post Four",
    img: "https://picsum.photos/400/450?4",
    desc: "Ut enim ad minim veniam.",
  },
  {
    id: 5,
    title: "Post Five",
    img: "https://picsum.photos/400/350?5",
    desc: "Quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 6,
    title: "Post Six",
    img: "https://picsum.photos/400/400?6",
    desc: "Nisi ut aliquip ex ea commodo consequat.",
  },
];
</script>
<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-2xl font-bold text-center mb-8">Our Post</h1>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-6">
      <div
        v-for="post in posts"
        :key="post.id"
        class="break-inside-avoid bg-white rounded-lg shadow-md mb-6 overflow-hidden"
      >
        <img :src="post.img" alt="" class="w-full object-cover" />
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
          <p class="textgray-600">{{ post.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
