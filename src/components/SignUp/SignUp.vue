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
                v-model="signUpData.email"
                class="mt-2s"
                type="email"
                label="Your Email"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-input">
              <v-text-field
                v-model="signUpData.password"
                type="password"
                label="Your Password"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="login-btn my-5">
              <v-btn @click="signUp()">Sign Up</v-btn>
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
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "login-route",
  data() {
    return {
      signUpData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
  //   signUp  () {
  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(
  //       auth,

  //       this.signUpData.email,
  //       this.signUpData.password
  //     ).then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(user)
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorCode)
  //   console.log(errorMessage)
  // });
  //       // .then((data) => {
  //       //   alert("Sign up successfully", data);
  //       // })
  //       // .then((err) => console.log(err.message));
  //   },

  signUp(){
    this.$store.dispatch('registerUser',{
      email : this.signUpData.email,
      password : this.signUpData.password,
    });
  }
  },
  computed:{
    user() {
      return this.$store.getters.user;
    },
  }
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
