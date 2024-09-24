<template>
    <!-- View Rendered Here -->
    <router-view></router-view>

    <!-- Login/Signup Popups -->
    <LoginPopup 
      v-if="showLoginPopup" 
      @close="showLoginPopup = false" 
      @open-extended-signup="openExtendedSignup"
      @login-success="onLoginSuccess"
    />
    <ExtendedSignupPopup 
      v-if="showExtendedSignupPopup" 
      :initialFormData="initialFormData" 
      @close="showExtendedSignupPopup = false" 
      @registration-success="handleRegistrationSuccess"
    />
    <div>
      footer here
    </div>
</template>

<script>
// Import the LoginPopup and ExtendedSignupPopup components
import LoginPopup from './components/LoginPopup.vue';
import ExtendedSignupPopup from './components/ExtendedSignupPopup.vue';

export default {
  name: 'App',
  components: {
    LoginPopup,
    ExtendedSignupPopup
  },
  data() {
    return {
      showLoginPopup: false,
      showExtendedSignupPopup: false,
      initialFormData: null // Store the initial form data
    };
  },
  methods: {
    openLoginPopup() {
      this.showLoginPopup = true;
    },
    openExtendedSignup(data) {
      this.initialFormData = data;
      this.showLoginPopup = false;
      this.showExtendedSignupPopup = true;
    },
    handleRegistrationSuccess() {
      this.showExtendedSignupPopup = false;
      // Optionally, you can open the login popup after registration
      this.showLoginPopup = true;
    },
    onLoginSuccess() {
      this.showLoginPopup = false;
      // Redirect to user page, which you should create in the future
      this.$router.push('/user-page');
    }
  }
};
</script>


<style>

/* Styling for the menu items */
.menu-item {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px; /* Reduced padding */
  background-color: lightgreen;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2em; /* Reduced font size */
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: green;
  color: white;
}

/* Styling for the User button */
.user-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  padding: 10px 20px; /* Reduced padding */
  font-size: 1.2em; /* Reduced font size */
}

.user-button:hover {
  background-color: #800020; /* Red-wine background */
  color: white; /* White text */
}

.user-button:active {
  background-color: #4d0013; /* Darker red-wine */
}

/* Main News Image Styling */
.news-image {
  width: 50%;
  margin: 20px auto;
  display: block;
  border-radius: 10px;
}

/* Table Styling */
.news-table {
  width: 100%;
  margin-top: 20px;
  background-color: #fffacd; /* Light yellow background */
  border-collapse: collapse; /* Merge table borders */
}

.news-item {
  border: 1px solid #ccc; /* Visible borders for each row */
}

.news-thumbnail-cell {
  width: 10%;
  padding: 10px;
}

.news-content-cell {
  text-align: left;
  padding: 10px;
}

.news-thumbnail {
  width: 80%;
  border-radius: 5px;
}

.news-link {
  color: blue;
  text-decoration: none;
  font-size: 1em;
}

.news-link:hover {
  text-decoration: underline;
}

</style>
