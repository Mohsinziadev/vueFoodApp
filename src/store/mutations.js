export  function setSearchedMeals (state,meals) {
state.searchedMeals.searchedMeals = meals || [];
}
export function setMealbyLetter(state, meals) {
  state.searchedMeals.mealsByLetter = meals || [];
}
export function setMealbyIngrediants(state, meals) {
  state.searchedMeals.mealsByIngrediants = meals || [];
}