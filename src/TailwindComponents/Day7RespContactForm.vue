<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-200 py-16 px-6">
    <div class="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-lg sm:text-3xl font-bold text-gray-800 mb-6 text-center">Responsive Contact Form</h2>
      <form action="#" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="col-span-1">
          <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        <div class="col-span-1">
          <label for="name" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div class="md:col-span-2">
          <label for="subject" class="block text-sm font-medium text-gray-700">Subject:</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter Subject"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div class="md:col-span-2">
          <label for="message" class="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter Message"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div class="md:col-span-2">
          <button class="bg-blue-600 text-white py-2 rounded-lg w-full font-semibold">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
