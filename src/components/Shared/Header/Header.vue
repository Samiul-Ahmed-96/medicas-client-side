<template>
  <v-app-bar
    style="padding: 0px 35px"
    color="indigo"
    light
    elevation="6"
    elevate-on-scroll
  >
    <router-link to="/">
      <v-avatar style="width: 120px" :tile="true">
        <img :src="require('../../../assets/logo.png')" alt="logo" />
      </v-avatar>
    </router-link>
    <v-spacer />
    <v-list color="indigo" class="d-flex align-center">
      <v-list-item link v-for="menu in menus" :key="menu.title">
        <v-list-item-title
          ><v-btn
            text
            style="color: #ffe04a; text-decoration: none"
            :to="'/' + menu.route"
            >{{ menu.title }}</v-btn
          ></v-list-item-title
        >
      </v-list-item>
    </v-list>

    <v-btn to="/login" text
      ><v-icon color="#ffe04a">mdi-account-arrow-right</v-icon></v-btn
    >
    <v-btn to="/signup" text
      ><v-icon color="#ffe04a">mdi-account-arrow-up </v-icon></v-btn
    >
    <v-btn text><v-icon color="#ffe04a">mdi-login </v-icon></v-btn>
    
  </v-app-bar>
</template>

<script>
export default {
  name: "Header-Area",
  data() {
    return {
      menus: [
        { title: "Home", route: "home" },
        { title: "About", route: "about" },
        { title: "Services", route: "services" },
        { title: "Doctors", route: "doctors/vuetivue" },
      ],
      userInfo : '',
    };
  },
    computed:{
    user() {
      return this.$store.getters.user ;
    },
  }
};
</script>

<style scoped></style>
