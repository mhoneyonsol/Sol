<template>
  <div>
    <div v-if="isVisible" id="alert-box" class="alert-box">
      <p>{{ alertMessage }}</p>
      <button class="close-button" @click="closeAlert">✖</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      alertMessage: '',
      alertMessages: [],
      currentAlertIndex: 0,
      timeoutId: null,
      alertSchedule: [
        { min: 30000, max: 50000 },
        40000
