<template>
  <div class="w-full h-fit rounded-md shadow-lg px-2 py-4">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="h-full w-full rounded-md"
      />
    </router-link>
    <div class="flex flex-col px-4 mt-2">
      <h3 class="text-md font-light text-green">{{ meal.strMeal }}</h3>
      <div v-if="meal.strInstructions">
        <p class="text-xs font-light h-20 overflow-scroll text-gray-600 mt-2">
          {{ meal.strInstructions }}
        </p>
      </div>
      <div v-if="!meal.strInstructions">
        <p class="text-xs font-light h-20 overflow-scroll text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam maiores
          possimus enim atque sit quod in doloribus velit ex corrupti!
        </p>
      </div>
      <div class="flex text-sm items-center mt-5">
        <a
          :href="meal.strYoutube"
          class="px-8 py-3 rounded-md bg-red-400 text-white"
          target="_blank"
          >Youtube</a
        >
        <!-- <router-link
              class="px-10 py-2 rounded-sm bg-gray-600 text-white"
              to="/"
              >View</router-link
            > -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
