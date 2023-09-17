<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold mb-4">
      Recipes for {{ route.params.ingredient }}
    </h1>
  </div>
  <MealList :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealList from "../components/MealList.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
