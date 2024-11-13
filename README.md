# Nepali Date-Time Picker

A framework-agnostic React and Vue component to select Nepali dates and display them in Nepali format.

## Installation

To install the component in your React or Vue project:

```bash
npm install nepali-date-time-picker




Usage
In React:

import { NepaliDateTimePicker } from 'nepali-date-time-picker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <NepaliDateTimePicker
      value={selectedDate}
      onDateChange={setSelectedDate}
    />
  );
};

In Vue:

<template>
  <NepaliDateTimePicker v-model="selectedDate" />
</template>

<script>
import NepaliDateTimePicker from 'nepali-date-time-picker/vue/NepaliDateTimePicker.vue';

export default {
  components: {
    NepaliDateTimePicker
  },
  data() {
    return {
      selectedDate: null
    };
  }
};
</script>
