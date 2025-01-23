import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import Vue Router
import './style.css'; // Import global CSS styles

// Create and mount the Vue app
createApp(App)
    .use(router) // Use Vue Router
    .mount('#app');
