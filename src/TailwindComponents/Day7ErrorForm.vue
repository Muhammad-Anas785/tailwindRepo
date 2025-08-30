<script setup>
import { ref } from "vue";

let error = ref(false);
let name = ref("");

const handleSubmit = () => {
  if (!name.value.trim()) {
    error.value = true;
  } else {
    error.value = false;
    name.value = "";
    alert("Form Submitted Successfully");
  }
};
</script>

<template>
  <section class="min-h-screen justify-center items-center bg-gray-100 py-16 px-6">
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-center text-2xl font-medium text-gray-800 mb-6">Validation Example</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-800">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            v-model="name"
            :class="[
              'mt-1 block w-full px-4 py-2 border rounded-lg outline-none',
              error
                ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                : 'border-gray-300 focus:ring-2 focus:ring-blue-500',
            ]"
          />
          <p v-show="error" class="text-sm text-red-500 mt-1">Name is Required</p>
        </div>

        <button
          type="submit"
          class="bg-blue-600 py-3 w-full rounded text-white hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
