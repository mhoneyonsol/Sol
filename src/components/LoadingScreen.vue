<template>
  <div class="loading-screen" v-if="showLoading">
    <div class="wrap">
       <video src="../assets/Animated.mp4" autoplay muted loop>
        Your browser doesn't support the `<video>` tag.
        </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 5000); 
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  width: 100%;
  height: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.lang {
  color: white;
  margin-top: 30px;
  font-family: "Sora";
}

/* Main styles */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);
.text {
  font-size: 7em;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  -webkit-animation: stroke 6s infinite linear;
  animation: stroke 6s infinite linear;
}
.text:nth-child(5n+1) {
  stroke: #F2385A;
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
}
.text:nth-child(5n+2) {
  stroke: #F5A503;
  -webkit-animation-delay: -2.4s;
  animation-delay: -2.4s;
}
.text:nth-child(5n+3) {
  stroke: #E9F1DF;
  -webkit-animation-delay: -3.6s;
  animation-delay: -3.6s;
}
.text:nth-child(5n+4) {
  stroke: #56D9CD;
  -webkit-animation-delay: -4.8s;
  animation-delay: -4.8s;
}
.text:nth-child(5n+5) {
  stroke: #3AA1BF;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}

/* Other styles */
html, body {
  height: 100%;
}

body {
  background: #111;
  background-size: 0.2em 100%;
  font: 5em/1 Open Sans, Impact;
  text-transform: uppercase;
  margin: 0;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
