<template>
  <section class="footer">
    <v-container>
      <v-row>
        <v-col lg="3" md="3" sm="12">
          <div class="anout-us">
            <img src="../../../assets/logo.png" alt="" />
            <h4>
              Health care is the maintenance or improvement of health via the
              prevention, diagnosis, treatment, recovery, or cure of disease,
              illness, injury, and other physical and mental impairments in
              people. Health care is delivered by health professionals and
              allied health fields.
            </h4>
            <ul>
              <li>
                <v-icon>mdi-facebook</v-icon>
              </li>

              <li>
                <v-icon>mdi-twitter</v-icon>
              </li>
              <li>
                <v-icon>mdi-instagram</v-icon>
              </li>
              <li>
                <v-icon>mdi-linkedin</v-icon>
              </li>
            </ul>
          </div></v-col
        >
        <v-col lg="3" md="3" sm="12">
          <div class="departments">
            <h3>Departments</h3>
            <ul>
              <li>
                <a href="#">Surgery and Radiology</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">Family</a>
              </li>
              <li>
                <a href="#">Our Doctors</a>
              </li>
              <li>
                <a href="#">Woman's Health</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div></v-col
        >
        <v-col lg="3" md="3" sm="12">
          <div class="links">
            <h3>Links</h3>
            <ul>
              <li>
                <router-link to="/home">Home</router-link>
              </li>
              <li>
                <router-link to="/service">Services</router-link>
              </li>
              <li>
                <router-link to="/doctors/vuetivue">Doctor</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/login">Login</router-link>
              </li>
              <li>
                <router-link to="/signup">Sign Up</router-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col lg="3" md="3" sm="12">
          <div class="opening-Hours">
            <h3>Opening Hours</h3>
            <ul>
              <li>MON - TUES ---- <span>9.00AM - 17.00PM</span></li>
              <li>WEDNESDAY ----<span>9.00AM - 17.00PM</span></li>
              <li>THURSDAY ---- <span>9.00AM - 17.00PM</span></li>
              <li>FRIDAY ---- <span>9.00AM - 17.00PM</span></li>
              <li>SATURDAY ---- <span>CLOSED</span></li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Footer-area",
};
</script>

<style scoped>
.anout-us h4 {
  font-size: 14px;
  margin: 15px 0px;
  font-weight: 400;
}
.footer {
  background: #3f51b5;
  color: #fff;
  padding: 30px 0px;
}

.anout-us ul li {
  list-style: none;
  display: inline-block;
  margin: 10px;
}

.anout-us ul li i {
  background: #ffe000;
  color: #212529;
  padding: 2px;
  font-weight: 600;
  border-radius: 50%;
}

.departments ul li a {
  color: #ffe000;
  text-decoration: none;
}

.departments ul {
  margin: 35px 0px;
}
.links ul {
  margin: 35px 0px;
}

.links ul li {
  list-style: none;
  margin: 10px -30px;
}

.links ul li a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}
.links ul li a:hover {
  color: #ffe000;
}
.opening-Hours ul li {
  list-style: none;
  margin: 20px -30px;
  border-bottom: 1px solid #ffe000;
}
.opening-Hours ul li:last-child {
  border: none;
}
.opening-Hours ul li span {
  color: #ffe000;
}
</style>
