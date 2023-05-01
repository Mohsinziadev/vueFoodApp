<script setup>
import { onMounted, ref } from "vue";
import axiosClientinstance from "../axiosClient";
const ingrediants = ref("");
onMounted(() => {
  axiosClientinstance.get("list.php?i=list").then((data) => {
    console.log("ingreduians", data.data.meals);
    ingrediants.value = data.data.meals;
  });
});
</script>

<!-- Script Complete -->

<template>
  <div class="flex flex-col h-screen gap-4 p-8 px-32">
    <div class="flex mb-2">
      <h3 class="text-3xl uppercase font-bold">Ingrediants</h3>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <router-link
        :to="{
          name: 'byIngrediant',
          params: { ingredient: ingrediant.strIngredient },
        }"
        v-for="ingrediant of ingrediants"
        class="bg-white rounded-md bg-white shadow-md px-4 py-6"
      >
        <h3 class="w-full text-lg font-bold">{{ ingrediant.strIngredient }}</h3>
      </router-link>
    </div>
  </div>
</template>
