<template>
  <nav
    :class="[
      { 'navbar navbar-dark bg-dark': DarkModeFlag === true },
      { 'navbar navbar-light bg-light': DarkModeFlag === false }
    ]"
  >
    <router-link to="/"><button :class="[{'btn btn-light':DarkModeFlag===true},
    {'btn btn-dark':DarkModeFlag===false}]">Buscar</button></router-link>

    <div>
     <router-link to="/favorites">   <div class="circle">{{Fav.length}}</div>
    <button :class="[{'btn btn-light':DarkModeFlag===true},
    {'btn btn-dark':DarkModeFlag===false}]"> ✩ Mis Favoritos</button></router-link>
  
    </div>
    <div class="form-check form-switch" @click="ChangeFont()">
      <label class="text-success" for="flexSwitchCheckDefault"> DarkMode</label>

      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
    </div>
  </nav>
  <router-view />
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const ChangeFont = () => {
      store.dispatch("ChangeDarkMode");
    };
    const DarkModeFlag = computed(() => store.state.DarkMode);
    const Fav = computed(() => store.state.Favorites);
    
    return { ChangeFont, DarkModeFlag, Fav };
  },
};
</script>
<style scoped>
.circle{
  z-index: 1;
  height: 1.5rem;
  width: 1.5rem;
  background-color: red;
  border-radius: 100%;
  color: white;
  text-align: center;
  margin-bottom: -1rem;
  margin-left: 96%;
  
}

</style>
