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
      <!-- <h3>{{serviceList}}</h3> -->
      <v-row>
        <v-col
          v-for="service in topServices"
          :key="service._id"
          lg="4"
          md="4"
          sm="12"
        >
          <v-card class="single-service bg elevation-20">
            <img v-bind:src="'data:image/jpeg;base64,' + service.img" />
            <h2>{{ service.name }}</h2>
            <h4>Service Price : {{ service.price }}</h4>
            <v-btn
              ><v-icon>mdi-plus</v-icon>
              <router-link
                class="dynamic-link"
                :to="{ name: 'DetailService', params: { id: service._id } }"
              >
                Details</router-link
              ></v-btn
            >
          </v-card>
        </v-col>
      </v-row>
      <v-btn class="my-10 elevation-10"
        ><router-link class="more-btn" to="/services"
          >More Service</router-link
        ></v-btn
      >

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
      servicesTwo : []
    };
  },
  mounted() {
    // let result = await axios.get(
    //   "https://stormy-basin-00847.herokuapp.com/services"
    // );

    // this.services = result.data;
    // this.services = this.services.slice(0, 6);

    this.$store.dispatch('loadServices')
  },
  computed:{
    ...mapState([
      'servicesList'
    ]),
    topServices(){
      return this.$store.getters.sortList;
    }
  }
  
};
</script>

<style>
.single-service img {
  width: 50%;
  background-color: #ffe04a;
  padding: 10px;
  border-radius: 50%;
}
.single-service {
  text-align: center;
  background: #3f51b5 !important;
  color: #fff !important;
  padding: 20px;
  border-radius: 10px;
}
.single-service h4 {
  margin: 20px 0px;
}
.section-heading {
  text-align: center;
  margin: 60px 0px;
  font-weight: 700;
}
.section-heading p {
  width: 300px;
  margin: 10px auto;
}
.section-heading h1 span {
  color: #3f51b5;
  font-size: 45px;
}
.dynamic-link {
  color: black !important;
  font-weight: 600;
  text-decoration: none;
}
.more-btn {
  color: black !important;
  text-decoration: none;
  margin: 30px 0px;
}
</style>
