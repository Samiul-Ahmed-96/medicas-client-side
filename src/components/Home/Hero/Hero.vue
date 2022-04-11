<template>
  <section class="hero-main">
    <v-container>
      <v-row class="align-center">
        <v-col lg="6" md="6" sm="12">
          <div class="left-hero">
            <h1>
              Wellcome to <span>Health Lab Care</span> <br />
              Your Health is Our Concern
            </h1>
            <p>
              Health care is the maintenance or improvement of health via the
              prevention, diagnosis, treatment, recovery, or cure of disease,
              illness, injury, and other physical and mental impairments in
              people. Health care is delivered by health professionals and
              allied health fields.
            </p>
            <v-btn>Appoinment Now</v-btn>
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <div class="right-hero">
            <v-carousel :continuous="true" hide-delimiters>
              <v-carousel-item
                ><img
                  class="banner-img"
                  src="../../../assets/Banner/banner (1) (1).png"
                  alt=""
              /></v-carousel-item>
              <v-carousel-item
                ><img
                  class="banner-img"
                  src="../../../assets/Banner/banner (2) (1).png"
                  alt=""
              /></v-carousel-item>
              <v-carousel-item
                ><img
                  class="banner-img"
                  src="../../../assets/Banner/banner (3) (1).png"
                  alt=""
              /></v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Hero-section",
};
</script>

<style scoped>
.hero-main {
  background-color: #3f51b5;
  color: #fff;
  padding: 0;
}

.left-hero p {
  margin: 30px 0px;
}
.left-hero h1 span {
  color: #ffe04a;
  font-size: 50px;
}
.banner-img {
  width: 100%;
  overflow: hidden;
}
.section-heading p {
  width: 400px;
  margin: 10px auto;
}
.section-heading h1 {
  font-size: 30px;
  color: #3f51b5;
}
</style>
