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

p {
cursor: url(https://i.imgur.com/ek44f48.png), auto !important;
}

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
  cursor: url(https://i.imgur.com/mu9r8sc.png) 0 0, auto !important;
}

.negative {
  color: red;
  cursor: url(https://i.imgur.com/mu9r8sc.png) 0 0, auto !important;
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
  cursor: url(https://i.imgur.com/mu9r8sc.png), auto;
}

.modal-content {
  background-color: #fefefe00;
    margin: 15% auto;
    padding: 20;
    border: 1px solid #8880;
    width: 80%;
    border-radius: 23px;
    background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lxdHR2Z3E0aHNiZ2h6dDFvbWpzMG8yamlnbGZpNjZ4MHA5Zng2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/R7q0rjwD1gRW9D1R8e/giphy.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
}

.close {
    color: #ff000000 !important;
    float: right !important;
    margin-top: 5%;
    font-size: 28px !important;
    font-weight: 700 !important;
    margin-right: 19% !important;
    background-image: url(https://static.vecteezy.com/system/resources/previews/019/634/201/non_2x/3d-icon-of-cancel-free-png.png);
    background-size: 100%;
    background-position: 50%;
    width: 30px;
    height: 30px;
    cursor: url(https://i.imgur.com/ek44f48.png), auto !important;

}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media (max-width: 600px) {
.close {
margin-right: 0% !important;
margin-top: 50px !important;
  }
    }
</style>
