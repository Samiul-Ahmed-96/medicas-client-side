<template>
  <section class="services">
    <v-container>
      <div class="section-heading">
        <h1>Special Service For Patients</h1>
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
            <v-btn>Details of {{ service.name }} </v-btn>
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
    this.services = this.services.slice(0, 6);
  },
};
</script>

<style scoped>
.single-service img {
  width: 50%;
  background-color: #ffe04a;
  padding: 10px;
  border-radius: 50%;
}
.single-service {
  text-align: center;
  background: #3f51b5;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
}
.single-service h4 {
  margin: 20px 0px;
}
.section-heading {
  text-align: center;
  margin: 60px 0px;
}
</style>
