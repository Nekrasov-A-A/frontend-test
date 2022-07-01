<!-- template не может быть последним -->
<template>
  <header class="header">
    <h3>
      Товаров в корзине на:
      {{ getTotalAmount }}
      {{ getCurrency }}
    </h3>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheHeaderComponent",
  computed: {
    ...mapGetters(["getCart", "getCurrency"]),
    getTotalAmount() {
      return this.getCart.reduce(
        (acc, val) => (acc += val.amount * val.price),
        0
      );
    },
  },
  // --- Отказались от props в пользу VueX
  // data() {
  //   return {
  //     cartPrice: 0,
  //   };
  // },
  // watch: {
  //   cart(cart) {
  //     let val = 0;
  //     cart.forEach((item) => {
  //       val += item.price * item.amount;
  //     });
  //     this.cartPrice = val;
  //   },
  // },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>
