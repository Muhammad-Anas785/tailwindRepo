<script setup>
import { ref } from "vue";

const selectedCard = ref(null);

const cards = [
  { id: 1, title: "Card 1", desc: "This is card 1" },
  { id: 2, title: "Card 2", desc: "This is card 2" },
  { id: 3, title: "Card 3", desc: "This is card 3" },
];

const toggleCard = (id) => {
  selectedCard.value = id === selectedCard.value ? null : id;
};
</script>
<template>
  <section class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
      <div
        v-for="card in cards"
        :key="card.id"
        @click="toggleCard(card.id)"
        :class="[
          'p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out',
          selectedCard === card.id
            ? 'border-2 border-blue-500 bg-blue-50'
            : 'border border-gray-200 bg-white hover:shadow-lg',
        ]"
      >
        <h2
          :class="[
            'text-xl font-bold mb-2',
            selectedCard == card.id ? 'text-blue-600' : 'text-gray-800',
          ]"
        >
          {{ card.title }}
        </h2>
        <p :class="['text-gray-600',selectedCard === card.id ? 'font-semibold':'']">{{ card.desc }}</p>
      </div>
    </div>
  </section>
</template>
