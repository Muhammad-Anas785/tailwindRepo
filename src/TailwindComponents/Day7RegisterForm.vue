<template>
  <section class="min-h-screen flex justify-center items-center p-6 bg-gray-200">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Registeration Form</h2>
      <form action="#" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            class="block mt-1 w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            class="block mt-1 w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="passowrd"
            id="password"
            placeholder="Enter Your Password"
            class="block mt-1 w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label for="confirmPass" class="block text-sm font-medium text-gray-700"
            >Confirm Pssword:</label
          >
          <input
            type="password"
            id="confirmPass"
            placeholder="Confirm Your Password"
            class="block mt-1 w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-700 text-white font-semibold px-4 py-2 rounded w-full hover:bg-blue-800 transition cursor-pointer mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
