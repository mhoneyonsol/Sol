<template>
  <div class="loading-screen" v-if="showLoading">
    <div class="wrap">
       <video src="https://d2gmxft35na058.cloudfront.net/s9e9sx%2Ffile%2Fb52b88520525b097561d6a72ab3f485a_dafc7e03ce1bc06d38bc86cac4ea8a9f.mp4?response-content-disposition=inline%3Bfilename%3D%22b52b88520525b097561d6a72ab3f485a_dafc7e03ce1bc06d38bc86cac4ea8a9f.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719845136&Signature=CoC0l~Cr6VzaTE6PvAKaa9qrDg26PeIcxp5QDPK7eFIVIGsmzp1372oGdCeabLS3qMoKA1rLbG9IR6h2tNM4l2h7G5Gqop2VixSzuzP6SXQlZQ8D9OWjEy29AR6uKHGggmH6kLjCx7-UBy2J4U3L8Y83QFB6t0TANl65gET~O0uNv13FB1ItrRezW0aOK-xs~tv~a102zeXZKHWu9PXkG2Et531a8djpGARDkwsWLWdEjIGpL1F5EKhsDbtIOBHiG8gP07eF3Br8DFwYLoC3BESFhdzu3xYjA6aJwq6UCRnwhjftIhohv3ojXPohOky4VBdpaaj6mUii1xRpX0Xs~Q__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" autoplay muted loop>
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
