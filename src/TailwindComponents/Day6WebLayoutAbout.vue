<template>
  <section id="about" class="bg-white py-16 px-6 md:px-12 min-h-screen">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-12">
      <!-- left image -->
      <div class="flex-1 flex justify-center">
        <img
          src="https://picsum.photos/400/400"
          alt="about-image"
          class="rounded-lg shadow-lg max-w-full"
        />
      </div>

      <!-- right content -->
      <div class="flex-1 text-center md:text-left space-y-6">
        <h2 class="text-3xl font-bold text-gray-800 md:text-4xl">
          About <span class="text-blue-600">Me</span>
        </h2>
        <p class="text-gray-600 leading-relaxed">
          I am a <span class="font-semibold"> Frontend Developer</span> with a passion for creating
          beautiful and responsive web applications using
          <span class="font-semibold text-blue-600"> Vue.js</span> and
          <span class="font-semibold text-blue-600"> Tailwind css</span>.
        </p>

        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center gap-2">✅ Expertise in modern UI frameworks</li>
          <li class="flex items-center gap-2">✅ Strong focus on responsive design</li>
          <li class="flex items-center gap-2">✅ Experience with Vue.js ecosystem</li>
        </ul>
      </div>
    </div>
  </section>
</template>
