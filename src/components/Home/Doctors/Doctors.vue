<template>
  <section class="doctor my-15">
    <v-container>
      <div class="links">
        <ul>
          <v-btn class="nested-route-btn" :to="{ name: 'VuetiVue' }"
            >Vuetify View</v-btn
          >
          <v-btn class="ml-3 nested-route-btn" :to="{ name: 'HtmlVue' }"
            >Html View</v-btn
          >
        </ul>
      </div>
      <router-view></router-view>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "doctors-area",
  data() {
    return {};
  },
};
</script>

<style scoped>
.nested-route-btn {
  background-color: #ffe04a !important;
}
</style>
