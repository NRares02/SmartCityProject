<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <button class="close-button" @click="$emit('close')">&times;</button>
      <h2>Login</h2>
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Password" required />
        </div>
        <div class="form-actions">
          <button type="submit" class="sign-in">Sign In</button>
          <button type="button" class="sign-up" @click="$emit('open-extended-signup', { email })">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onLogin() {
      try {
        // Simulate API call to validate login
        const isValidLogin = await this.fakeLoginApi(this.email, this.password);

        if (isValidLogin) {
          this.$emit('login-success');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        alert('An error occurred during login.');
      }
    },
    fakeLoginApi(email, password) {
      // Replace with actual API logic
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(email === "user@example.com" && password === "password123");
        }, 1000);
      });
    }
  }
};
</script>

<style scoped>
/* Popup Overlay Styling */
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

/* Popup Content Styling */
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

/* Close Button Styling */
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

/* Form Group Styling */
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

/* Form Actions Styling */
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
