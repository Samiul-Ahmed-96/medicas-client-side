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
          v-for="service in servicesList"
          :key="service._id"
          lg="4"
          md="4"
          sm="12"
        >
          <v-card class="single-service elevation-20">
            <img v-bind:src="'data:image/jpeg;base64,' + service.img" />
            <h2>{{ service.name }}</h2>
            <h4>Service Price : {{ service.price }}</h4>
            <v-btn outlined class="white--text"
              ><v-icon>mdi-plus</v-icon>
              <router-link
                class="dynamic-link white--text"
                :to="{ name: 'DetailService', params: { id: service._id } }"
              >
                Details</router-link
              ></v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "Services-area",
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    this.$store.dispatch('loadServices')
  },
  computed:{
    ...mapState([
      'servicesList'
    ]),
   
  }
};
</script>

<style scoped></style>
