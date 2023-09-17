<template>
    <div class="flex flex-col p-8">
        <h1 class="text-4xl font-bold mb-4">Random Recipes</h1>
    </div>
    <MealList :meals="meals" /> 
</template>


<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import MealList from '../components/MealList.vue';

const meals = ref([])

onMounted(async () => {
    for(let step = 0; step < 10; step++){
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]))
    }
})

</script>
