<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Shared/Header/Header.vue";
import Footer from "./components/Shared/Footer/Footer.vue";
export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
