<template>
  <section class="about-us my-10">
    <v-container>
      <v-row class="align-center">
        <v-col lg="6" md="6" sm="12">
          <div class="about-us-detail">
            <h2>Short Story About HealthLab Care Since 2007</h2>
            <p>
              Health care is the maintenance or improvement of health via the
              prevention, diagnosis, treatment, recovery, or cure of disease,
              illness, injury, and other physical and mental impairments in
              people. Health care is delivered by health professionals and
              allied health fields.
            </p>
            <ul>
              <li>
                <v-icon>mdi-check</v-icon>Scientific Skills For getting a better
                result
              </li>
              <li>
                <v-icon>mdi-check</v-icon>Communication Skills to getting in
                touch
              </li>
              <li>
                <v-icon>mdi-check</v-icon>A Career Overview opportunity
                Available
              </li>
              <li>
                <v-icon>mdi-check</v-icon>A good Work Environment For work
              </li>
            </ul>
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <img width="100%" src="../../assets/AboutUs/AboutUs.jpg" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "About-us",
};
</script>

<style scoped>
.about-us-detail ul li {
  list-style: none;
  font-size: 18px;
  font-weight: 500;
  margin: 15px -30px;
}

.about-us-detail ul li i {
  background: #3f51b5;
  color: #fff;
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
