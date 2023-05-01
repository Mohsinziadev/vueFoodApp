import axiosClientinstance from "../axiosClient";

export function searchMeals ({commit},keyword){
 axiosClientinstance.get(`/search.php?s=${keyword}`).then(({data})=>{
  console.log("data by keyword",data)
  commit("setSearchedMeals",data.meals);
 })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClientinstance.get(`/search.php?f=${letter}`).then(({ data }) => {
    console.log("data by letter", data);
    commit("setMealbyLetter", data.meals);
  });
}

export function searchMealsByIngrediant({ commit }, ing) {
  console.log("ing",ing)
  axiosClientinstance.get(`/filter.php?i=${ing}`).then(({ data }) => {
    console.log("data by ingrediant", data);
    commit("setMealbyIngrediants", data.meals);
  });
}