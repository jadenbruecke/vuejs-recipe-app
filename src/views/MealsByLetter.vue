<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold mb-4">Recipes By Letter {{ route.params.letter }}</h1>
    <div class="flex flex-wrap justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-2xl hover:text-red-600 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <MealList :meals="meals" />  
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealList from "../components/MealList.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

function searchMeals() {
  store.dispatch("searchMealsByLetter", route.params.letter);
}

watch(route, () => {
  searchMeals();
});

onMounted(() => {
  searchMeals();
});
</script>
