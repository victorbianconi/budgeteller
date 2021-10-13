import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
});
export default store;
