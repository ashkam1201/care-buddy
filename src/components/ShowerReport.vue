<template>
    <h1>Shower reports</h1>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Hair washed ?
          </th>
          <th class="text-left">
            Body washed ?
          </th>
          <th class="text-left">
            Hair product used
          </th>
          <th class="text-left">
            shower gel used
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="showerReport in showerReports" :key="showerReport.date">
          <td>{{ showerReport.date }}</td>
          <td>{{ showerReport.hair }}</td>
          <td>{{ showerReport.body }}</td>
          <td>{{ showerReport.shampoo }}</td>
          <td>{{ showerReport.showerGel }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script>
import { getShowerReports } from '../services/showerReportService';

export default {
  name: 'ShowerReport',
  data() {
    return {
      showerReports: []
    };
  },
  created() {
    this.fetchShowerReports();
  },
  methods: {
    async fetchShowerReports() {
      try {
        const response = await getShowerReports();
        this.showerReports = response.data;
      } catch (error) {
        console.error('Error fetching shower reports:', error);
      }
    },
  },
}
</script>

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  td {
    text-align: left;
  }
  </style>
  