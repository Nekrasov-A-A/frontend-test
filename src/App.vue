<template>
  <!-- <div id="app">  duplicate id -->
  <div class="app">
    <!-- В ТЗ указано получить список в компоненте List. Логичнее использовать VueX для передачи данных между копмонентами. -->
    <!-- Поэтому здесь не нужны props, только для currency -->
    <!-- Если в дальнейшем придется расширять приложение чтобы изменять currency, то удобнее его хранить во VueX и получать в копмонентах через getter -->
    <Header :currency="currency" />
    <!--  <Header></Header> --- я обычно открываю компоненты если использую slot-->
    <List :currency="currency" />
    <Cart />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  data() {
    return {
      // cart: [] --- В ТЗ указано получить список в компоненте List
      currency: "VGTB",
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Roboto:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  /*шрифт Avenir платный и не подключен  */
  /* Nunito самый схожий, подключил его */
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
