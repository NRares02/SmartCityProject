<template>
    <div class="real-time-data">
        <button @click="goBack" class="go-back-button bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 absolute top-4 left-4">Go Back</button>
      <h1>Real Time Data</h1>
      <h2>Bucharest</h2>
  
      <!-- First Chart - Pollution Level -->
      <h3>Pollution Level in the City</h3>
      <canvas id="pollutionChart"></canvas>
  
      <!-- Second Chart - Air Quality -->
      <h3>Air Quality in the City</h3>
      <canvas id="airQualityChart"></canvas>
  
      <!-- Third Chart - Traffic Level -->
      <h3>Traffic Level in the City</h3>
      <canvas id="trafficChart"></canvas>
    </div>
  </template>
  
  <script>
// Import the Chart.js library
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// Register the components for Chart.js
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export default {
  mounted() {
    // First Chart - Pollution Level
    const ctx1 = document.getElementById('pollutionChart').getContext('2d');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Pollution Level',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: 'red',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });

    // Second Chart - Air Quality
    const ctx2 = document.getElementById('airQualityChart').getContext('2d');
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Air Quality',
          data: [28, 48, 40, 19, 86, 27],
          borderColor: 'blue',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });

    // Third Chart - Traffic Level
    const ctx3 = document.getElementById('trafficChart').getContext('2d');
    new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        datasets: [{
          label: 'Traffic Level',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'green',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);  // This will take the user back to the previous route
    }
  }
  
};

</script>
  
  <style scoped>
.real-time-data {
  background-color: #fdf6e3; /* Light yellow */
  padding: 20px;
  text-align: center;
  @apply bg-yellow-100 p-8 text-center; /* Tailwind classes for background and padding */
}


canvas {
  margin: 20px auto;
  display: block;
  max-width: 600px;
  height: 300px;
  @apply mx-auto mt-6 max-w-2xl; /* Tailwind classes for margin and width control */
}
</style>