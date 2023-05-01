import {createRouter,createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import MealsbyName from "../views/MealsbyName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import MealsbyIngrediants from "../views/MealsbyIngrediants.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingrediants from "../views/Ingrediants.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsbyName,
      },

      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/ingrediants",
        name: "ingrediants",
        component: Ingrediants,
      },
      {
        path: "/by-Ingrediant?/:ingredient",
        name: "byIngrediant",
        component: MealsbyIngrediants,
      },

      {
        path: "/meal?/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/auth",
    component: GuestLayout,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;