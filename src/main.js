import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ShowerReport from './components/ShowerReport.vue';
import StressReport from './components/StressReport.vue';


// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css'; // Importing Material Design Icons
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Define routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/showerreports', component: ShowerReport },
  { path: '/stressreports', component: StressReport },
  // Add more routes as needed
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Create and mount the Vue application
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
