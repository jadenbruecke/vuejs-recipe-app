import axiosClient from '../axiosClient'

export function searchMealsByName({ commit }, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setMealsByName', data.meals)
        })
}

export function searchMealsByLetter({ commit }, letter){
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            commit('setMealsByLetter', data.meals)
        })
}

export function searchMealsByIngredient({ commit }, ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({data}) => {
            commit('setMealsByIngredient', data.meals)
        })
}
