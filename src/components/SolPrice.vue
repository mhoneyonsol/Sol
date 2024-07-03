<template>
  <div class="solana-price">
    <p>Solana Price: {{ price !== null ? `$${price}` : 'Loading...' }}</p>
    <p :class="changeClass">
      24h Change: {{ change24h !== null ? `${change24h}%` : 'Loading...' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const price = ref<number | null>(null);
const change24h = ref<number | null>(null);

const fetchPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true');
    const data = await response.json();
    price.value = data.solana.usd;
    change24h.value = data.solana.usd_24h_change.toFixed(2);
    console.log('Fetched price:', price.value); // Debug log to ensure fetch is working
    console.log('Fetched 24h change:', change24h.value); // Debug log to ensure fetch is working
  } catch (error) {
    console.error('Error fetching the price:', error);
  }
};

const changeClass = computed(() => {
  if (change24h.value === null) {
    return '';
  }
  return change24h.value >= 0 ? 'positive' : 'negative';
});

onMounted(() => {
  fetchPrice();
  setInterval(fetchPrice, 60000); // Update every minute
});
</script>

<style scoped>
.solana-price {
  color: #fff;
  font-family: monospace;
  font-weight: 100;
  position: absolute;
  top: 1%;
  left: 1%;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
