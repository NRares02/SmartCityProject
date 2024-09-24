<template>
  <div class="user-profile">
    <!-- Profile Header -->
    <div class="profile-header">
      <img class="profile-picture" :src="profileImage" alt="Profile Picture" />
      <div class="profile-info">
        <h1>{{ username }}</h1>
        <h2>{{ fullName }}</h2>
        <button @click="editProfile" class="edit-profile-btn">Edit Profile</button>
      </div>
    </div>

    <!-- Button Section -->
    <div class="buttons-section">
      <router-link to="/real-time-data">
  <button class="btn btn-real-time">Real Time Data</button>
</router-link>
      <button class="profile-btn">Payments</button>
      <button class="profile-btn">Services</button>
      <button class="profile-btn">Service Requests</button>
    </div>

    <!-- Chat Section -->
    <div class="chat-section">
      <h3>Chat</h3>
      <textarea v-model="chatMessage" class="chat-box" placeholder="Write your message here..."></textarea>
      <button @click="sendMessage" class="send-btn">Send</button>
      <div class="chat-messages">
        <div v-for="message in chatMessages" :key="message.id" class="chat-message">
          <strong>{{ message.username }}:</strong> {{ message.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "https://via.placeholder.com/150", // Placeholder profile image
      username: "R2N2",
      fullName: "Rares Nae",
      chatMessage: "",
      chatMessages: [
        { id: 1, username: "User1", text: "Hello!" },
        { id: 2, username: "User2", text: "Hi there!" },
      ],
    };
  },
  methods: {
    editProfile() {
      // Redirect to edit profile page
      this.$router.push("/edit-profile");
    },
    sendMessage() {
      if (this.chatMessage.trim() !== "") {
        this.chatMessages.push({
          id: this.chatMessages.length + 1,
          username: this.username,
          text: this.chatMessage,
        });
        this.chatMessage = ""; // Clear the input after sending
      }
    },
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

body {
  background-color: #f1ef7af4; /* Light yellow background */
}

.profile-header {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.profile-picture {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}

.profile-info h1 {
  font-size: 2em;
  margin: 0;
}

.profile-info h2 {
  font-size: 1.5em;
  color: #555;
  margin: 0;
}

.edit-profile-btn {
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}

.edit-profile-btn:hover {
  background-color: #555;
}

.buttons-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.profile-btn {
  background-color: #f1f1f1;
  color: black;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  width: 200px;
}

.profile-btn:hover {
  background-color: #ddd;
}

.chat-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}

.chat-box {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 10px;
}

.send-btn {
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.send-btn:hover {
  background-color: #555;
}

.chat-messages {
  margin-top: 20px;
}

.chat-message {
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
