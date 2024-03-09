<template>
  <div class="nav">
    <v-app-bar :elevation="10" color="green">
      <template v-slot:prepend>
        <v-app-bar-nav-icon>
          <v-icon color="white" icon="mdi-shower" size="large"></v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-title>Care buddy</v-app-bar-title>
      </template>
      <!-- Navigation Links -->
      <v-spacer></v-spacer> <!-- This pushes the navigation to the right -->
      <v-btn text color="white" to="/">Home</v-btn>
      <v-btn text color="white" to="/showerreports">Shower Reports</v-btn>
      <v-btn text color="white" to="/stressReports">Stress Reports</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
</style>
