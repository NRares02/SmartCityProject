// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Set the base URL for axios to match your backend server
axios.defaults.baseURL = 'http://localhost:8080'; // Replace with your server URL

const app = createApp(App);

// Make axios available globally
app.config.globalProperties.$axios = axios;

app.use(router);
app.mount('#app');
