<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

        <div>
            <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 mb-4">
                <template v-for="(el, id) of new Array(20)">
                    <li v-if="meal[`strIngredient${id + 1}`]">
                        {{ meal[`strIngredient${id + 1}`] }} * {{ meal[`strMeasure${id + 1}`] }}
                    </li>
                </template>
            </div>
        </div>
        <div class="font-semibold items-center justify-between">
            <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
            <a :href="meal.strSource" target="_blank" class="mx-1 p-3 py-2 rounded text-indigo-600 transition-colors">
                View original source
            </a>
        </div>

    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient.js'
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>