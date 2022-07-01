import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    currency: "VGTB",
  },
  getters: {
    getCart: (s) => s.cart,
    getCurrency: (s) => s.currency,
  },
  mutations: {
    setToCart(state, payload) {
      state.cart.push(payload);
    },
  },
  actions: {
    getProductsListFromApi(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {},
});
