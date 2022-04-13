<template>
  <v-app class="grey lighten-4">
    <Header />
    <v-main>
      <router-view></router-view>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Shared/Footer/Footer.vue";
import Header from "./components/Shared/Header/Header.vue";

export default {
  name: "App",

  components: {
    Footer,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
