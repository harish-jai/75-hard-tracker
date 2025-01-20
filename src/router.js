import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Home from "./pages/Home.vue"; // Placeholder for Home Page

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
