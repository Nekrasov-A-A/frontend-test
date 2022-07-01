<template>
  <div id="app">
    <!-- В ТЗ указано получить список в компоненте List. Логичнее использовать VueX для передачи данных между копмонентами. -->
    <TheHeaderComponent />
    <!--  <Header></Header> --- я обычно открываю компоненты если использую slot-->
    <TheListComponent />
    <TheCartComponent />
  </div>
</template>

<script>
import TheHeaderComponent from "./components/TheHeaderComponent.vue";
import TheListComponent from "./components/TheListComponent.vue";
import TheCartComponent from "./components/TheCartComponent.vue";

export default {
  name: "App",
  components: {
    TheHeaderComponent,
    TheListComponent,
    TheCartComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
