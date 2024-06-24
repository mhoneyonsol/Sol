<template>
  <div class="loading-screen" v-if="showLoading">
    
<div class="wrap">
  <div class="loader"></div>
  <h3>Wobbly 3D loader</h3>
</div>
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

@media (max-width: 600px) {
  .loading-screen {
    display:none!important;
  }}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loader {
  height: 185px;
  width: 200px;
  display: inline-block;
  position: relative;
  border-radius: 100%;
  animation: spin 0.35s linear infinite;
  box-shadow: inset 0px 0px 20px 2px rgba(0, 0, 0, 0.9), 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
  background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}
.loader:before {
  content: "";
  display: block;
  top: 15%;
  left: 15%;
  right: 15%;
  bottom: 15%;
  background-color: #666;
  position: absolute;
  border-radius: 100%;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.6), inset 0px 0px 15px 1px rgba(0, 0, 0, 0.4);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body {
  background-color: #666;
  color: #333;
  overflow-x: hidden;
  margin: 0;
}
body .wrap {
  min-height: 300px;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>