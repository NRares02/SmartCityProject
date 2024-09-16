<!-- src/components/RegisterPage.vue -->
<template>
  <div>
    <h1>Register</h1>
    <login-popup></login-popup> <!-- Assuming this is the registration form popup -->
  </div>
</template>

<script>
import LoginPopup from './LoginPopup.vue'; // Import the popup component

export default {
  components: {
    LoginPopup,
  },
};
</script>

<style scoped>
/* Add styles if needed */
</style>
