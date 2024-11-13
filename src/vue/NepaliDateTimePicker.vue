<template>
    <div>
      <datepicker v-model="selectedDate" :time-format="timeFormat" :date-format="dateFormat" :show-time="showTimeSelect" />
      <div v-if="selectedDate">
        <h3>Selected Date in Nepali Format:</h3>
        <p>{{ convertToNepaliDate(selectedDate) }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import Datepicker from 'vuejs-datepicker';
  import { convertToNepaliDate } from '../core'; // Import core logic
  
  export default {
    components: {
      Datepicker
    },
    props: {
      value: {
        type: Date,
        required: false
      },
      showTimeSelect: {
        type: Boolean,
        default: true
      },
      timeFormat: {
        type: String,
        default: "HH:mm"
      },
      dateFormat: {
        type: String,
        default: "yyyy-MM-dd HH:mm"
      }
    },
    data() {
      return {
        selectedDate: this.value || null
      };
    },
    methods: {
      convertToNepaliDate
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS here */
  </style>
  