<template>
  <div class="loading-screen" v-if="showLoading">
    <img src="https://i.imgur.com/Yxh4siF.png" alt="Loading Image" class="loading-image" />
    <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
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

.loading-image {
  max-width: 30%;
    max-height: 100%;
    left: 5%;
    border-radius: 13px;
    position: absolute;
}

.loader {
 width: 80px;
    height: 50px;
    position: absolute;
    zoom: 400%;
    left: 50%;
}

.loader-text {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: #C8B6FF;
  animation: text_713 3.5s ease both infinite;
  font-size: .8rem;
  letter-spacing: 1px;
}

.load {
  background-color: #9A79FF;
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: loading_713 3.5s ease both infinite;
}

.load::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #D1C2FF;
  border-radius: inherit;
  animation: loading2_713 3.5s ease both infinite;
}

@keyframes text_713 {
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
}

@keyframes loading_713 {
  0% {
    width: 16px;
    transform: translateX(0px);
  }

  40% {
    width: 100%;
    transform: translateX(0px);
  }

  80% {
    width: 16px;
    transform: translateX(64px);
  }

  90% {
    width: 100%;
    transform: translateX(0px);
  }

  100% {
    width: 16px;
    transform: translateX(0px);
  }
}

@keyframes loading2_713 {
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    width: 100%;
    transform: translateX(0px);
  }

  90% {
    width: 80%;
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0px);
    width: 16px;
  }
}
 

</style>