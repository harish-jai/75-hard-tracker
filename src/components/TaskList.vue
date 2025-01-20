<template>
    <div>
      <h2>Track Your Daily Tasks</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.completed" /> {{ task.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { name: 'Workout', completed: false },
          { name: 'Drink 1 gallon of water', completed: false },
          { name: 'Read 10 pages', completed: false },
          { name: 'Take progress picture', completed: false }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  li {
    margin: 10px 0;
  }
  </style>
  