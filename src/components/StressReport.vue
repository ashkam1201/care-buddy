<template>
    <h1>Shower reports</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Stress level
          </th>
          <th class="text-left">
            Notes
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stressReports in stressReports" :key="stressReports.date">
          <td>{{ stressReports.date }}</td>
          <td>{{ stressReports.stressLevel }}</td>
          <td>{{ stressReports.notes }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script>
import { getStressReports } from '../services/stressReportService';

export default {
  data() {
    return {
      stressReports: []
    };
  },
  mounted() {
    getStressReports().then(response => {
      this.stressReports = response.data;
    }).catch(error => console.error(error));
  },
  // ... other component options
};
</script>

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  td {
    text-align: left;
  }
  </style>
  