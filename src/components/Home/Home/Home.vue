<template>
  <v-main>
    <Hero />
    <OurSystem />
    <Services />
  </v-main>
</template>

<script>
import Hero from "../../../components/Home/Hero/Hero.vue";
import OurSystem from "../../Home/OurSystem/OurSystem.vue";
import Services from "../../Home/Services/Services.vue";
export default {
  name: "Home-Page",
  components: {
    Hero,
    OurSystem,
    Services,
  },
};
</script>

<style scoped></style>
