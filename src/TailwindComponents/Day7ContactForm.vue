<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-200 py-16 px-6">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg w-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
      <form action="#" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter Your Message"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold rounded py-2 hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
