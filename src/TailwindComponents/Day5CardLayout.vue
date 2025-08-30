<script setup>
const cards = [
  {
    id: 1,
    title: "Laptop",
    desc: "High-performance laptop for work and play",
    img: "https://picsum.photos/400/200?1",
  },
  {
    id: 2,
    title: "Headphones",
    desc: "Noise-cancelling wireless headphones",
    img: "https://picsum.photos/400/200?2",
  },
  {
    id: 3,
    title: "Camera",
    desc: "Capture moments with stunning clarity",
    img: "https://picsum.photos/400/200?3",
  },
  {
    id: 4,
    title: "Smartphone",
    desc: "Latest smartphone with AI features",
    img: "https://picsum.photos/400/200?4",
  },
  {
    id: 5,
    title: "Watch",
    desc: "Smartwatch with health tracking",
    img: "https://picsum.photos/400/200?5",
  },
  {
    id: 6,
    title: "Gaming Console",
    desc: "Next-gen console for immersive gaming",
    img: "https://picsum.photos/400/200?6",
  },
  {
    id: 7,
    title: "Smart LED",
    desc: "Smart LED with health tracking",
    img: "https://picsum.photos/400/200?7",
  },
  {
    id: 8,
    title: "Gaming Watch",
    desc: "Next-gen watch for gaming console for immersive gaming",
    img: "https://picsum.photos/400/200?8",
  },
];
</script>

<template>
  <!-- Grids Responsive mobile tablet laptop -->
  <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="bg-blue-200 p-6 rounded">1</div>
    <div class="bg-blue-200 p-6 rounded">2</div>
    <div class="bg-blue-200 p-6 rounded">3</div>
    <div class="bg-blue-200 p-6 rounded">4</div>
    <div class="bg-blue-200 p-6 rounded">5</div>
    <div class="bg-blue-200 p-6 rounded">6</div>
  </div> -->
  <!-- Columns automatic adjust ho jate hain screen width ke hisaab se. -->
  <!-- <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
    <div class="bg-green-500 p-6 rounded">1</div>
    <div class="bg-green-500 p-6 rounded">2</div>
    <div class="bg-green-500 p-6 rounded">3</div>
    <div class="bg-green-500 p-6 rounded">4</div>
    <div class="bg-green-500 p-6 rounded">5</div>
    <div class="bg-green-500 p-6 rounded">6</div>
    <div class="bg-green-500 p-6 rounded">7</div>
  </div>
  <div class="flex flex-col sm:flex-row gap-4">
    <div class="bg-red-600 flex-1 p-6 rounded">Left</div>
    <div class="bg-red-600 flex-1 p-6 rounded">Right</div>
  </div> -->
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-2xl font-bold text-center mb-8">Our Products</h1>
    <!-- breakpoints strategy -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="card in cards"
        :key="card.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <img :src="card.img" alt="" class="w-full h-48 object-cover" />
        <div class="flex flex-col p-4 flex-1">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ card.title }}</h2>
          <p class="text-gray-600 flex-1">{{ card.desc }}</p>
          <button
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
    <!-- Auto-Fit strategy -->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-6">
      <div
        v-for="card in cards"
        :key="card.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <img :src="card.img" alt="" class="w-full h-48 object-cover" />
        <div class="flex flex-col p-4 flex-1">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ card.title }}</h2>
          <p class="text-gray-600 flex-1">{{ card.desc }}</p>
          <button
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
