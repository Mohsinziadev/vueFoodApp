<script setup>
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPRSTUVWXYZ".split("");
const meals = computed(() => store.state.searchedMeals.mealsByLetter);

onMounted(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex gap-4 py-10 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 cursor-pointer flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
    <div>
      <Meals :meals="meals" />
    </div>
  </div>
</template>
