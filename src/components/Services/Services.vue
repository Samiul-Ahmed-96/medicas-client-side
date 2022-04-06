<template>
  <section class="services">
    <v-container>
      <div class="section-heading">
        <h1>Special Service For <span>Patients</span></h1>
        <p>
          We are dedicated to providing best-in-class services and outcomes
          through Respiratory and Sleep Therapy
        </p>
      </div>
      <v-row>
        <v-col
          v-for="service in services"
          :key="service._id"
          lg="4"
          md="4"
          sm="12"
        >
          <div class="single-service">
            <img v-bind:src="'data:image/jpeg;base64,' + service.img" />
            <h2>{{ service.name }}</h2>
            <h4>Service Price : {{ service.price }}</h4>
            <v-btn> <v-icon>mdi-plus</v-icon> Details </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Services-area",
  data() {
    return {
      services: [],
    };
  },
  async mounted() {
    let result = await axios.get(
      "https://stormy-basin-00847.herokuapp.com/services"
    );
    console.log(result.data);
    this.services = result.data;
  },
};
</script>

<style scoped></style>
