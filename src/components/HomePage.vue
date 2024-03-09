<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <!-- Date Field -->
        <v-text-field
          label="Date"
          type="date"
          v-model="showerReport.date"
          required
        ></v-text-field>
  
        <!-- Hair Wash Checkbox -->
        <v-checkbox
          label="Did I wash my hair?"
          v-model="showerReport.hair"
        ></v-checkbox>
  
        <!-- Body Wash Checkbox -->
        <v-checkbox
          label="Did I wash my body?"
          v-model="showerReport.body"
        ></v-checkbox>
  
        <!-- Shampoo Field -->
        <v-text-field
          label="Shampoo"
          v-model="showerReport.shampoo"
        ></v-text-field>
  
        <!-- Shower Gel Field -->
        <v-text-field
          label="Shower Gel"
          v-model="showerReport.showerGel"
        ></v-text-field>
  
        <!-- Submit Button -->
        <v-btn type="submit" color="light">Submit</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
    return {
      showerReport: {
        date: '',
        hair: false,
        body: false,
        shampoo: '',
        showerGel: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle the form submission logic here
      console.log(this.showerReport);
    }
  }
};
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .formContainer {
    margin: 100px;
  }
  </style>
  