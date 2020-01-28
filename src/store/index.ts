import Vue from "vue";
import Vuex from "vuex";
import InteractionState from "@/Globals/InteractionState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentState: InteractionState.Root
  },
  mutations: {
    changeState(state, newState) {
      state.currentState = newState;
    }
  },
  actions: {},
  modules: {}
});
