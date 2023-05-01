<template>
  <div class="max-w-[1000px] mx-auto h-full p-8">
    <h1 class="text-3xl font-bold uppercase mb-5 text-orange-500">
      {{ meal.strMeal }}
    </h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-[100%] w-full h-[30rem] rounded-md object-cover"
    />
    <div
      class="grid grid-cols-1 mt-5 text-gray-600 sm:grid-cols-3 text-lg py-2"
    >
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3 text-gray-600 text-md font-light">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 mt-10 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-6">
        <YouTubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 text-sm py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClientinstance from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClientinstance.get(`lookup.php?i=${route.params.id}`).then((data) => {
    meal.value = data.data.meals[0] || {};
  });
});
</script>
