<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, TimeScale);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Solana Price',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'minute',
        displayFormats: {
          minute: 'HH:mm',
        },
      },
    },
    y: {
      beginAtZero: false,
    },
  },
});

const fetchLiveData = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=1&interval=minute');
    const data = await response.json();
    const prices = data.prices;
    chartData.value.labels = prices.map(price => new Date(price[0]));
    chartData.value.datasets[0].data = prices.map(price => price[1]);
  } catch (error) {
    console.error('Error fetching live data:', error);
  }
};

onMounted(() => {
  fetchLiveData();
  setInterval(fetchLiveData, 60000); // Update every minute
});
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: 400px !important;
}
</style>
