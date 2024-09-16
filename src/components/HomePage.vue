<template>
  <div>
    <!-- <h1>Service Requests</h1>
    <ul>
      <li v-for="request in requests" :key="request.id">
        {{ request.description }} - {{ request.status }}
      </li>
    </ul> -->
  </div>
</template>

<!-- <script>
import api from '../api';

export default {
  data() {
    return {
      requests: []
    };
  },
  created() {
    this.loadRequests();
  },
  methods: {
    loadRequests() {
      api.getServiceRequests().then(response => {
        this.requests = response.data;
      });
    }
  }
};
</script> -->