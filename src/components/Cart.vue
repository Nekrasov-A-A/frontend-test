<template>
  <div class="cards-wrapper">
    <div v-for="(item, idx) in getCart" :key="item.title + idx">
      <!-- :key="item.title + idx --- неповторяющийся примитив -->
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // spisok_dlya_rendera() { --- Yvolnenue_dlya_zdorovya_glaz
    //     return this.cart.reverse(); --- reverse мутирует исходный массив, лучше использовать
    // [...arr].reverse() идентично arr.slice().reverse()
    // или
    // arr.sort((a,b) => arr.indexOf(b) - arr.indexOf(a))
    // или
    // использовать unshift() при добавлении в массив cart
    // },
    ...mapGetters(["getCart"]),
  },
};
</script>

<style></style>
