<template>
  <header class="bg-white shadow-lg h-16 px-20 flex items-center">
    <div class="flex justify-between items-center w-full">
      <div>
        <router-link :to="{ name: 'home' }"> Home</router-link>
      </div>
      <div class="flex gap-4 items-center">
        <router-link
          :to="{ name: 'byName' }"
          class="px-4 cursor-pointer h-full hover:bg-purple-200"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="px-4 cursor-pointer h-full hover:bg-purple-200"
        >
          Meals by Letter
        </router-link>
        <router-link
          :to="{ name: 'ingrediants' }"
          class="px-4 cursor-pointer h-full hover:bg-purple-200"
        >
          Meal By Ingrediants
        </router-link>
      </div>
    </div>
  </header>
</template>
