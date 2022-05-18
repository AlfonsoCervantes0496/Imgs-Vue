<template>
  <div class="card marg bg-transparent" style="width: 18rem">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h1 class="h6 text-center">likes: {{ likes }}</h1>
      <h1 class="h6 text-center">Hecha por {{ author }}</h1>
      <div class="containerbutton">
        <button
          type="button fs-2"
          :class="[{'btn btn-outline-success':flagbutton==true},
          {'btn btn-outline-danger':flagbutton==false}]"
          @click="setstatebutton()"
        >
          {{flagbutton?'✩ Agregar a favoritos': '⌦Borrar elemento'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "CardResults",
  props: {
    image: String,
    likes: Number,
    author: String,
    id: String,
  },
  data(){
    return{
      flagbutton:true

    }
    
  },
  methods:{
    setstatebutton(){
      this.flagbutton ?
      this.addtoFavorites()
      :this.deteleitem()
      this.flagbutton = !this.flagbutton
    }
    

  },
  setup(props) {
    const store = useStore();
    
    const addtoFavorites = () => {
      store.dispatch("addToFavorites", props);
    };
    const deteleitem = () => {
      store.dispatch("deteleitem", props.image);
    };
    const favorite = computed (()=>store.state.Favorites)
    return { addtoFavorites, deteleitem, favorite };
  },
  
 
};
</script>

<style scoped>
.marg {
  margin: 1rem;
}
.containerbutton {
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}
button {
  width: 100%;
}
img {
  height: 11rem;
}
</style>
