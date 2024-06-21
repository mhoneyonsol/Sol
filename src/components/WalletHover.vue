<template>
  <div class="solana-price">
    <p>Solana Price: {{ price !== null ? `$${price}` : 'Loading...' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const price = ref<number | null>(null);

const fetchPrice = async () => {
  try {
    const response = await fetch('https://public-api.solscan.io/market/price?symbol=SOL');
    const data = await response.json();
    price.value = data.data.priceUsdt;
    console.log('Fetched price:', price.value); // Debug log to ensure fetch is working
  } catch (error) {
    console.error('Error fetching the price:', error);
  }
};

onMounted(() => {
  fetchPrice();
  setInterval(fetchPrice, 1000); // Update every second
});
</script>

<style scoped>
.solana-price {
  color: white;
    font-family: monospace;
    font-weight: 100;
    position: absolute;
    top: 0;
    left: 0;
}
</style>