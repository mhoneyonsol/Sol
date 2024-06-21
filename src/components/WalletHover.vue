<template>
  <div class="solana-price">
    <p>Solana Price: {{ price ? `$${price}` : 'Loading...' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const price = ref<number | null>(null);

const fetchPrice = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    price.value = response.data.solana.usd;
  } catch (error) {
    console.error('Error fetching the price:', error);
  }
};

onMounted(() => {
  fetchPrice();
  setInterval(fetchPrice, 60000); // Update every 60 seconds
});
</script>

<style scoped>
.solana-price {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>