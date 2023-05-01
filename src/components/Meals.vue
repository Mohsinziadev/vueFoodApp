<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 px-5">
    <div v-for="meal of meals" key="idMeal">
      <MealItem :meal="meal" />
    </div>
  </div>
  <div v-if="!meals.length" class="flex justify-center mt-10">
    There is no Meals
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
