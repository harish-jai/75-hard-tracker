<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? 
        <a href="#" @click.prevent="goToRegister">Register</a>
      </p>
    </div>
  </template>
  
  <script>
  import { auth } from "../firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log("Logged in as:", userCredential.user);
          this.$router.push("/home");
        } catch (error) {
          console.error("Error logging in:", error.message);
          alert("Login failed. Please check your email and password.");
        }
      },
      goToRegister() {
        this.$router.push("/register");
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  