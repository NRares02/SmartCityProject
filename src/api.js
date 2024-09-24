import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Correct base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export const registerUser = (userData) => {
  return apiClient.post('/register', userData);  // Correct route
};


// // Add any other API methods you have below
//  export default {
//   getServiceRequests() {
//     return apiClient.get('/service-requests');
//   },
//   addServiceRequest(data) {
//     return apiClient.post('/service-requests', data);
//   },
//   // Other API methods...
// };
