<template>
  <section class="login">
    <v-container>
      <v-row class="align-center">
        <v-col class="left-login" lg="6" md="6" sm="12">
          <div class="section-title">
            <h1>Please Sign Up</h1>
          </div>

          <img
            class="login-img-left"
            src="../../assets/LoginAndRegistration/signup.png"
            alt=""
          />

          <form>
            <div class="login-input">
              <v-text-field
                class="mt-2s"
                type="text"
                label="Your Name"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-input">
              <v-text-field
                class="mt-2s"
                type="email"
                label="Your Email"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-input">
              <v-text-field
                type="password"
                label="Your Password"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-btn mt-5">
              <v-btn>Sign Up</v-btn>
            </div>
          </form>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <img
            class="login-img"
            src="../../assets/LoginAndRegistration/signupiam.jpg"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "login-route",
};
</script>

<style scoped>
.login {
  margin: 60px 0px;
  color: #fff;
}
.login-img {
  width: 100%;
  border-radius: 10px;
}
.login-img-left {
  padding: 5px;
  width: 90px;
  margin: 5px 0px;
  background: #ffe031;
  border-radius: 50%;
}
.login-input {
  width: 80%;
  margin: 10px auto;
  background: #fff;
  color: #000;
  border-radius: 10px;
  padding: 0px 10px;
  border-radius: 5px;
}
.left-login.col-sm-12.col-md-6.col-lg-6.col {
  background: #3f51b5;
  border-radius: 10px;
  text-align: center;
}
</style>
