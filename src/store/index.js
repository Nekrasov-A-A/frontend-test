import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalAmount: 0,
    productsList: [],
    cart: [],
  },
  getters: {
    getTotalAmount: (s) => s.totalAmount,
    getProductsList: (s) => s.productsList,
    getCart: (s) => s.cart,
  },
  mutations: {
    setTotalAmount(state, payload) {
      state.totalAmount += payload;
    },
    setProductsList(state, payload) {
      state.productsList = payload;
    },
    setToCart(state, payload) {
      state.cart.unshift(payload);
    },
  },
  actions: {
    getProductsListFromApi(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {},
});
