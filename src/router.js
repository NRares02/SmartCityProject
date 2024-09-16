import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ServiceRequests from './components/ServiceRequests.vue';
import PaymentPage from './components/PaymentPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import UserPage from './components/UserPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/service-requests', component: ServiceRequests },
  { path: '/payments', component: PaymentPage },
  { path: '/register', component: RegisterPage }, // Route for registration
  { path: '/user-page', component: UserPage }, // Route for user page
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirect to home on 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
