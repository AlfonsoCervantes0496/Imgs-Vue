<template><div :class="[{'bg-dark text-white':font===true},{'bg-light text-dark':font===false}]">
  <section :class="[{'bg-dark text-white':font===true},{'bg-light text-dark':font===false}]">
  <h1 class="display-2 tex rounded-3">Buscador de imagenes</h1>
  <form class="form-floating" @submit="Tofind">
    <input
      type="text"
      class="form-control text-success"
      id="floatingInputValue"
      placeholder="name@example.com"
      v-model="mensaje"
      
    />
    <label for="floatingInputValue">Busqueda</label>
    <input class="btn btn-outline-success boton" type="submit" value="buscar" />
  </form>
  </section>
  <div class="row">
  <CardResults v-for="data in data" 
  :key="data.id" :image="data.urls.small" 
   
  :likes="data.likes" 
  :author="data.user.name" 
  :id="data.description"/>
  </div>
  </div>
   
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import CardResults from "../components/Card.vue"

export default {
  name: "HomeView",
  data() {
    return {
      mensaje:""
     
    };
  },
  components: {CardResults},
  methods:{
    Tofind(e){
      e.preventDefault()
      this.Find(this.mensaje)
      
    }

  },

  setup() {
    
    const store = useStore();
    const Find = (value) => {
      store.dispatch('fetchData',value)
     
     
    };
    const data = computed(()=>store.state.RenderData)
    const font = computed(()=>store.state.DarkMode)
    

    return{Find, data, font}
  },
};
</script>

<style scoped>
.boton {
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 2rem;
}

</style>
