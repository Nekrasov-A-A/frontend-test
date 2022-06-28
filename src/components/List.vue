<template>
  <div class="product-list">
    <!-- add key -->
    <div class="card" v-for="product in getProductsList" :key="product.id">
      <!-- для заголовков есть тег h -->
      <h3 class="card-title">{{ product.title }}</h3>
      <!-- add attr alt for <img> -->
      <img class="card-image" :src="product.image" :alt="product.title" />
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <!-- <input type="number" ref="amount" :id="product.id" /> -->
        <input type="number" v-model="product.amount" />
        <span>кг</span>
      </div>

      <button @click="addToCart(product)">В корзину</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      // products: [],
      timer: "",
    };
  },
  computed: {
    // cardsWidth() {
    //   let width = window.innerWidth;
    //   let count = 1;
    //   if (width > "840px") {
    //     count = 3;
    //   } else if (width > "420px" && width < "840px") {
    //     count = 2;
    //   }

    //   return 100 / count;
    // },
    // --- Grid + media
    ...mapGetters(["getProductsList"]),
  },
  methods: {
    // startPricesMonitoring() {
    //   setInterval(this.getList, 2000);
    // },
    async getList() {
      let productsList = await this.getProductsListFromApi();
      productsList.forEach((item) => (item.amount = 0));
      this.setProductsList(productsList);
    },
    ...mapActions(["getProductsListFromApi"]),
    ...mapMutations(["setProductsList", "setToCart", "setTotalAmount"]),
    addToCart(product) {
      if (product.amount > 0) {
        // --- смешная валидация без показа ошибок
        let totalPrice = product.price * product.amount;
        let payload = {
          amount: product.amount,
          price: product.price, // --- не совсем понимаю зачем
          totalPrice, // --- так логичнее
          title: product.title,
        };
        // --- но лучше добавить
        // --- id: uuid() --- легкая библиотека с уникальными id
        // --- т.к нам рендерить массив этих значений
        this.setToCart(payload);
        this.setTotalAmount(totalPrice);
      }
      //   let amount = this.$refs.amount.find(
      //     (input) => input.id === product.id
      //   ).value;

      // --- v-model + добавление ключа amount при mounted

      //   let data = {
      //     amount,
      //     price: product.price,
      //     title: product.title,
      //   };
      //   this.$parent.cart.push(data);
    },
  },
  async mounted() {
    this.getList();
    this.timer = setInterval(() => {
      this.getList();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  // created() { --- все асинхронные запросы в mounted + шаблон еще не отрисован
  //   this.startPricesMonitoring();
  // },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
}
@media screen and (max-width: 840px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 420px) {
  .product-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.card-title {
  margin-bottom: 10px;
}
.card-image {
  width: 100%;
}
button {
  padding: 5px;
  margin: 5px;
}
</style>
