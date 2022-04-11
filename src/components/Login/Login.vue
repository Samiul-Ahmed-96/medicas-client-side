<template>
  <section class="login">
    <v-container>
      <v-row class="align-center">
        <v-col lg="6" md="6" sm="12">
          <img
            class="login-img"
            src="../../assets/LoginAndRegistration/loginiam.jpg"
            alt=""
          />
        </v-col>
        <v-col class="left-login" lg="6" md="6" sm="12">
          <div class="section-title">
            <h1>Please Login</h1>
          </div>

          <img
            class="login-img-left"
            src="../../assets/LoginAndRegistration/login.png"
            alt=""
          />

          <form>
            <div class="login-input">
              <v-text-field
                class="mt-2s"
                type="email"
                label="Your Email"
                v-model="loginData.email"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-input">
              <v-text-field
                type="password"
                label="Your Password"
                :rules="rules"
                v-model="loginData.password"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-btn mt-5">
              <v-btn @click="loginUser">Login</v-btn>
            </div>
            <div class="login-btn mt-5">
              <v-btn @click="signInGoogle">Google Sign In</v-btn>
            </div>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export default {
  name: "login-route",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser: function () {
      signInWithEmailAndPassword(
        auth,
        this.loginData.email,
        this.loginData.password
      )
        .then((data) => console.log(data))
        .then((err) => console.log(err));
    },
    signInGoogle: function () {
      signInWithPopup(auth, googleProvider);
    },
  },
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
  width: 160px;
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
