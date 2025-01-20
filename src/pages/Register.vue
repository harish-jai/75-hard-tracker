<template>
    <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password (min 6 characters)" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? 
        <a href="#" @click.prevent="goToLogin">Login</a>
      </p>
    </div>
  </template>
  
  <script>
  import { auth } from "../firebase";
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          // Register the user
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log("Registered as:", userCredential.user);
  
          // Automatically log in the user after registration
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/home");
        } catch (error) {
          console.error("Error registering:", error.message);
          alert("Registration failed. Please try again.");
        }
      },
      goToLogin() {
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  