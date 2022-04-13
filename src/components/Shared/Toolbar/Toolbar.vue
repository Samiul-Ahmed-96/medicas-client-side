<template>
<div class="header">
    <v-app-bar app dark absolute color="primary">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="//hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          DevMeetup
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer dark v-model="drawer" fixed temporary class="primary">
      <v-list shaped>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            router
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
  export default {
    name:'Tool-bar',
    data: () => ({
    drawer: false,
    group: null,
    selectedItem: 1,
    
  }),
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.store.getters.user !== undefined
      );
    },
    menuItems() {
      let menuItems = [
        {
          title: "All Meetups",
          icon: "mdi-account-supervisor",
          link: "/meetups",
        },
        {
          title: "Create meeting",
          icon: "mdi-google-classroom",
          link: "/meetup/create",
        },
        { title: "Profile", icon: "mdi-account-circle", link: "/profile" },
        { title: "Sign up", icon: "mdi-account-plus", link: "/signup" },
        { title: "Sign in", icon: "mdi-login", link: "/signin" },
      ];
      // if (this.userIsAuthenticated) {
      //   (menuItems = {
      //     title: "All Meetups",
      //     icon: "mdi-account-supervisor",
      //     link: "/meetups",
      //   }),
      //     {
      //       title: "Create meeting",
      //       icon: "mdi-google-classroom",
      //       link: "/meetup/create",
      //     },
      //     { title: "Profile", icon: "mdi-account-circle", link: "/profile" };
      // }
      return menuItems;
    },
  },
    watch: {
    group() {
      this.drawer = false;
    },
  },
  }
</script>

<style scoped>

</style>