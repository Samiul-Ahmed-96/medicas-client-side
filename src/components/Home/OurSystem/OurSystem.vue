<template>
  <section class="our-system">
    <v-container>
      <v-row>
        <v-col v-for="system in systems" :key="system.id" lg="4" md="4" sm="12">
          <div class="single-system">
            <i :class="system.icon"></i>
            <h2>{{ system.name }}</h2>
            <p>{{ system.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Our-system",
  data() {
    return {
      systems: [
        {
          id: "1",
          name: "Open Hours",
          icon: "far fa-clock",
          description:
            " workers may communicate with each other more easily and find a convenient divide between work life and home life",
        },
        {
          id: "2",
          name: "appoinment",
          icon: "far fa-calendar-check",
          description:
            "to make an appointment: to arrange, to organize a meeting, a date. idiom. I made an appointment for next Friday.",
        },
        {
          id: "3",
          name: "online billing system",
          icon: "far fa-money-bill-alt",
          description:
            "Online bill payment is a secure electronic service that allows customers to pay bills without having to write. ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.our-system {
  margin: -24px;
}
.single-system {
  background: #313234;
  color: #fff;
  text-align: center;
  border: 3px solid #333;
  padding: 20px;
  border-radius: 10px;
}
.single-system h2 {
  color: #ffe04a;
  text-transform: capitalize;
  font-size: 22px;
}
</style>
