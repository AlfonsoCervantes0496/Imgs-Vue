import { createStore } from "vuex";

export default createStore({
  state: {
    //Flag DarkMode
    DarkMode: false,
    //storage persons
    PersonStore: [],
    //RenderComponentBydata
    RenderData: [],
    //Favorites
    Favorites: [],
  },
  getters: {},
  mutations: {
    //Mutation state Darkmode
    setstateDarkMode(state, payload) {
      state.DarkMode = payload;
    },
    //mutation  state fetch data
    setDatafetch(state, payload) {
      state.PersonStore = payload;
      state.RenderData = payload;
    },
    addElementToFavorite(state, payload) {
      state.Favorites = payload;
    },
  },
  actions: {
    //Change Darkmode
    ChangeDarkMode({ commit, state }) {
      let NewState = !state.DarkMode;
      commit("setstateDarkMode", NewState);
    },
    //fetch data
    async fetchData({ commit, state }, search) {
      const response = await fetch(
        `https://api.unsplash.com//search/photos?per_page=25&query=${search}&client_id=AZGW3-0IcRzCLSKT551FSVTv-ZuIIJMLC3ErGLanNgw`
      );
      console.log(
        `https://api.unsplash.com//search/photos?page=1&query=${search}&client_id=AZGW3-0IcRzCLSKT551FSVTv-ZuIIJMLC3ErGLanNgw`
      );
      const { results } = await response.json();
      console.log(results[0].tags[0]);
      commit("setDatafetch", results);
    },
    addToFavorites({ commit, state }, element) {
      let toAdd = [];

      toAdd = [element, ...state.Favorites];

      commit("addElementToFavorite", toAdd);
    },
    deteleitem({ commit, state }, element) {
      let toDelete = [];
      toDelete = state.Favorites.filter((del) => del.image != element);
      commit("addElementToFavorite", toDelete);
    },
  },
  modules: {},
});
