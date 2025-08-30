<template>
  <section id="contact" class="bg-white py-16 px-6 md:px-12">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl">
        Contact <span class="text-blue-600">Me</span>
      </h2>
      <p class="text-gray-600 mt-4">
        Have a project in mind or just want to say hi? Fill the form below 👇
      </p>

      <!-- contact form -->
      <div class="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mt-8">
        <form class="space-y-6">
          <div>
            <label class="block text-left text-gray-700 font-medium mb-2">Your Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name.."
              class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-left text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email.."
              class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-left text-gray-700 font-medium mb-2">Message:</label>
            <textarea
              rows="5"
              placeholder="Write Your Message.."
              class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="submit"
            label="Send Message"
            class="bg-blue-600 w-full text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  </section>
</template>
