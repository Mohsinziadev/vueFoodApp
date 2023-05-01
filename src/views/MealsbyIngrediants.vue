<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
onMounted(() => {
  store.dispatch("searchMealsByIngrediant", route.params.ingredient);
});
const meals = computed(() => store.state.searchedMeals.mealsByIngrediants);
</script>

<!-- Script Complete -->

<template>
  <div class="h-screen">
    <Meals :meals="meals" />
  </div>
</template>
