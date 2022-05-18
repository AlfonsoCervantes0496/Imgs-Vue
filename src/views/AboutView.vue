<template>
<div :class="[{'bg-dark text-white':font===true},{'bg-light text-dark':font===false}]">
  <h1 class="display-2 tex rounded-3">Mis Favoritos</h1>
  <div class="row">
  <Favorites
  v-for="ArrayFavorites in ArrayFavorites" :key="ArrayFavorites.id"
  :image="ArrayFavorites.image"
  :likes="ArrayFavorites.likes"
  :author="ArrayFavorites.author"
  :id="ArrayFavorites.id"/>
  
  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from "vuex"
import Favorites from "../components/CardsFavorites.vue"
export default {
    components:{
        Favorites
    },
    setup(){
        const store = useStore()
        const ArrayFavorites = computed(()=>store.state.Favorites)
        const font = computed(()=>store.state.DarkMode)
        return{ArrayFavorites,font}
    }
}
</script>

<style scoped>

</style>
