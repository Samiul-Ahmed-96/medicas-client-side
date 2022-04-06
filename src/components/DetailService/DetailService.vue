<template>
  <section class="">
    <h2>{{ id }}</h2>
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

<style scoped></style>
