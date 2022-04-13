<template>
  <v-main>
    <Hero />
    <OurSystem />
    <Services />
    <Concern />
  </v-main>
</template>

<script>
import Hero from "../../../components/Home/Hero/Hero.vue";
import OurSystem from "../../Home/OurSystem/OurSystem.vue";
import Services from "../../Home/Services/Services.vue";
import Concern from "../../Home/OurConcern/OurConcern.vue";
export default {
  name: "Home-Page",
  components: {
    Hero,
    OurSystem,
    Services,
    Concern,
  },
};
</script>

<style scoped></style>
