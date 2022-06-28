<!-- template must be first -->
<template>
  <div class="header">
    <h3>
      Товаров в корзине на:
      {{
        Number.isInteger(getTotalAmount)
          ? getTotalAmount
          : getTotalAmount.toFixed(2)
      }}
      {{ currency }}
    </h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  props: {
    currency: String,
  },
  computed: {
    ...mapGetters(["getTotalAmount"]),
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
