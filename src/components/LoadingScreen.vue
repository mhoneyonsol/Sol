<template>
  <div class="loading-screen" v-if="showLoading">
    <img src="https://i.imgur.com/Yxh4siF.png" alt="Loading Image" class="loading-image" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 10000);
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-image {
  max-width: 100%;
  max-height: 100%;
}
</style>