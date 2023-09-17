<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold mb-4">Search Recipes</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for recipes"
      @change="searchMeals"
    />
  </div>
  <MealList :meals="meals" />
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealList from "../components/MealList.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.mealsByName);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMealsByName", keyword.value);
  } else {
    store.commit("setMealsByName", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
