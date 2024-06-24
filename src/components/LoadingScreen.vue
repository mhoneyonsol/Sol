<template>
  <div class="loading-screen" v-if="showLoading">
    
<div class="wrap">
  <div class="loading-spinner">
</div>
  <h3 class="lang" >LOADING ...</h3>
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

@media (max-width: 600px) {
  .loading-screen {
    display:none!important;
  }}

.lang {

color: white;
    margin-top: 30px;
    font-family: "Sora";
}

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

.loading-spinner {
    position: fixed;
    left: 50%;
    transform: translate(-50%,-50%) translateZ(0);
    top: 50%;
    width: 90px;
    height: 90px;
    z-index: 1;
    background: url(https://i.imgur.com/7KbUHcB.png) center no-repeat;
    background-size: contain;
    /*animation: spinning 1.5s infinite ease-in-out;*/
}

.loading-spinner:after {
  content:"";
  position:absolute;
  width:120px;
  height:120px;
  background-color:rgba(0,0,0,0);
  border-radius:100%;
  margin:-15px;
  box-shadow: 0 4px 0 0 #000;
  transition: all 1s linear;
  animation: lds-eclipse 1s linear infinite;
}



@keyframes spinning {
  0% { transform: translate(-50%,-50%) scale(1) translateZ(0);}
  50% { transform: translate(-50%,-50%) scale(1.1) translateZ(0);}
  100% { transform: translate(-50%,-50%) scale(1) translateZ(0);}
}

@keyframes lds-eclipse {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>