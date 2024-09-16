<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>Sign Up</h2>
      <form @submit.prevent="onSignup">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="formData.email" type="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="formData.password" type="password" placeholder="Password" required />
        </div>
        <div class="form-group">
          <label for="username">User Name</label>
          <input v-model="formData.username" type="text" placeholder="User Name" required />
        </div>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input v-model="formData.fullName" type="text" placeholder="Full Name" required />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input v-model="formData.phoneNumber" type="text" placeholder="Phone Number" required />
        </div>
        <div class="form-actions">
          <button type="submit" class="sign-up">Complete register</button>
          <button type="button" class="sign-in" @click="$emit('close')">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '../api.js'; // Correct import for named export

export default {
  props: ['initialFormData'],
  data() {
    return {
      formData: {
        email: this.initialFormData?.email || '',
        password: '',
        fullName: '',
        phoneNumber: '',
        role: 'Citizen', // Default role
        username: '' // If you want the user to input a username, add it here
      }
    };
  },
  methods: {
    async onSignup() {
      try {
        const response = await registerUser(this.formData); // Use the imported registerUser function
        if (response) {
          alert('Registration successful! You can now log in.');
          this.$emit('registration-success');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration.');
      }
    }
  }
};
</script>

<style scoped>
/* Use the styles you already have */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.sign-up {
  background-color: #00aaff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sign-up:hover {
  background-color: #0077cc;
}

.sign-in {
  background-color: #ddd;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sign-in:hover {
  background-color: #bbb;
}

.error-message {
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
