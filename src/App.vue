<template>
  <v-app>
    <v-main>
      <Header />
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Shared/Header/Header.vue";
import Home from "./components/Home/Home/Home.vue";
export default {
  name: "App",

  components: {
    Header,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
