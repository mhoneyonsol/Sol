<template>
  <div class="solana-price">
    <p @click="showModal = true">
      Solana Price: 
      <span>{{ price !== null ? `$${price}` : 'Loading...' }}</span>
    </p>
    <p :class="changeClass">
      {{ change24h !== null ? formatChange(change24h) : 'Loading...' }}
    </p>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <LiveChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import LiveChart from './LiveChart.vue'; // Adjust the path if needed

const price = ref<number | null>(null);
const change24h = ref<number | null>(null);
const showModal = ref(false);

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

const formatChange = (change: number) => {
  return change >= 0 ? `+${change}%` : `${change}%`;
};

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
  cursor: pointer;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 23px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
