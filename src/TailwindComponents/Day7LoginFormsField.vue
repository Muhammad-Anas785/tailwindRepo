<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-600 p-6">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl text-center font-bold text-gray-800 mb-6">Login</h2>
      <form action="#" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            class="mt-1 block w-full py-4 px-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            class="mt-1 block w-full py-4 px-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-600 text-white font-medium rounded px-4 py-2 w-full hover:bg-blue-700 transition cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  </section>
</template>
