<template>
  <section class="service-detail my-6">
    <v-container>
      <v-row class="align-center">
        <v-col lg="6" md="6" sm="12">
          <div class="left-detail">
            <img v-bind:src="'data:image/jpeg;base64,' + singleItem.img" />
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <div class="right-detail">
            <h1 class="display-3">{{ singleItem.name }}</h1>
            <p>{{ singleItem.description }}</p>
            <h3>Rating : {{ singleItem.rating }}</h3>
            <h2>Price : {{ singleItem.price }}</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Item-Details",
  data() {
    return {
      id: this.$route.params.id,
      singleItem: {},
    };
  },
  async mounted() {
    let result = await axios.get(
      "https://stormy-basin-00847.herokuapp.com/services/" + this.id
    );
    console.log(result.data);
    this.singleItem = result.data;
  },
};
</script>

<style scoped>
.left-detail {
  text-align: center;
}
.left-detail img {
  width: 50%;
}
</style>
