<template>
  <section class="concern pa-0 ma-0">
    <v-container>
      <v-row class="align-center">
        <v-col lg="6" md="6" sm="12">
          <div class="ceo-image text-right">
            <img src="../../../assets/Our_concern/ceo.png" alt="" />
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <div class="ceo-content">
            <h1 class="display-3">Your <span>Health</span> is Our Concern</h1>
            <h4 class="display-1">
              With occupancy rates at near capacity and an increasing number of
              complex patients,
            </h4>
            <p>
              With occupancy rates at near capacity and an increasing number of
              complex patients, our existing facilities are being enhanced and
              new facilities created to meet .
            </p>
            <img src="https://i.ibb.co/DRHjbrg/sign.png" alt="" />
            <div className="ceo-name">
              <h3>Roger Health</h3>
              <span>CEO, Founder</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.ceo-name {
  margin: 20px 0px;
  border-left: 2px solid #3f51b5;
  padding-left: 20px;
}
.ceo-content h1 {
  margin: 25px 0px;
}
.ceo-content span {
  color: #3f51b5;
  font-weight: 600;
}
.our-concern {
  overflow: hidden;
}
.ceo-image img {
  width: 100%;
}
</style>
