<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const keywords = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals.searchedMeals);
onMounted(() => {
  keywords.value = route.params.name;
  if (keywords.value) {
    searchMeals();
  }
});

function searchMeals() {
  if (keywords.value) {
    store.dispatch("searchMeals", keywords.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
</script>

<template>
  <div class="flex flex-col bg-gray-200 pb-10 h-screen">
    <div class="flex justify-center items-center px-20 mt-10">
      <input
        type="text"
        name=""
        id=""
        v-model="keywords"
        placeholder="search by Meals"
        @change="searchMeals"
        class="px-2 py-4 w-full rounded-sm"
      />
    </div>

    <Meals :meals="meals" />
  </div>
</template>
