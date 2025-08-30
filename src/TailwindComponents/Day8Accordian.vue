<script setup>
import { ref } from "vue";

const faqs = [
  {
    id: 1,
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    id: 2,
    question: "What is Vue.js?",
    answer: "Vue.js is a progressive JavaScript framework for building user interfaces.",
  },
  {
    id: 3,
    question: "Can I use Tailwind with Vue?",
    answer: "Yes, Tailwind integrates seamlessly with Vue for styling and responsive design.",
  },
];

const openId = ref(null);

const toggleAccordian = (id) => {
  openId.value = openId.value === id ? null : id;
};
</script>

<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-100 p-6">
    <div class="bg-white w-full max-w-lg rounded-lg shadow-lg divide-y">
      <div
        v-for="faq in faqs"
        :key="faq.id"
        class="p-4 cursor-pointer"
        @click="toggleAccordian(faq.id)"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800">{{ faq.question }}</h3>
          <span
            class="text-gray-500 transition-transform"
            :class="openId === faq.id ? 'rotate-180' : 'rotate-0'"
            >▼</span
          >
        </div>

        <!-- answer -->
        <transition name="accordion">
          <p v-if="faq.id === openId" class="mt-2 text-gray-600">{{ faq.answer }}</p>
        </transition>
      </div>
    </div>
  </section>
</template>

<style>
/* Smooth expand/collapse effect */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px; /* enough space for text */
}
</style>
