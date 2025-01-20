<template>
    <div class="home">
      <h1>Welcome, {{ user.displayName || "User" }}!</h1>
      <p>Current Streak: {{ streak }} days</p>
      <p>Motivational Quote: "{{ quote }}"</p>
      
      <!-- Example of daily progress (can be dynamic) -->
      <TaskList />

      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { getAuth } from "firebase/auth";
  import TaskList from "../components/TaskList.vue";
  
  export default {
    components: {
      TaskList
    },
    methods: {
      async logout() {
        await getAuth().signOut();
        this.$router.push("/login");
      },
    },
    data() {
      return {
        user: getAuth().currentUser,
        streak: 5, // For example, you would calculate this dynamically
        quote: "Keep pushing yourself to the limit!" // Example quote, can be fetched from an API
      };
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  