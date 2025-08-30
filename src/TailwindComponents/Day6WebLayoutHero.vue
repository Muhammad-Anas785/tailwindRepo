<template>
  <section
    id="home"
    class="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 px-6 py-12 md:px-14"
  >
    <!-- left content -->
    <div class="flex-1 text-center md:text-left space-y-6">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-800">
        Hi, I'm <span class="text-blue-600">Anas Taimoori</span>
      </h1>
      <p class="text-gray-600 md:text-lg">
        A passionate <span class="font-semibold">Frontend Developer</span> building responsive and
        modern web apps.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <button
          class="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Get Started
        </button>

        <button
          class="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded hover:bg-gray-300 transition duration-300"
        >
          Learn More
        </button>
      </div>
    </div>

    <!-- Right Image -->
    <div class="flex-1 mt-10 md:mt-0 flex justify-center">
      <img
        src="https://picsum.photos/500/400"
        alt="Hero Image"
        class="rounded-lg shadow-lg max-w-full"
      />
    </div>
  </section>
</template>
