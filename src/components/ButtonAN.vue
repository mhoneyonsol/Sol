<template>
  <button class="tip-button" @click="handleClick" :class="{ clicked: isClicked }">
    <span class="tip-button__text">Create token</span>
    <div class="coin-wrapper">
      <div ref="coin" class="coin">
        <div class="coin__middle"></div>
        <div class="coin__back"></div>
        <div class="coin__front">
          <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana Logo" class="solana-logo">
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ButtonAn',
  setup() {
    const isClicked = ref(false);
    const coin = ref(null);
    const maxMoveLoopCount = 90;
    let moveLoopCount = 0;
    let maxFlipAngle = 0;
    let sideRotationCount = 0;

    const resetCoin = () => {
      if (coin.value) {
        coin.value.style.setProperty('--coin-x-multiplier', 0);
        coin.value.style.setProperty('--coin-scale-multiplier', 0);
        coin.value.style.setProperty('--coin-rotation-multiplier', 0);
        coin.value.style.setProperty('--shine-opacity-multiplier', 0.4);
        coin.value.style.setProperty('--shine-bg-multiplier', '50%');
        coin.value.style.setProperty('--coin-y-multiplier', 0);
        coin.value.style.setProperty('--front-scale-multiplier', 1);
        coin.value.style.setProperty('--front-y-multiplier', 0);
        coin.value.style.setProperty('--middle-scale-multiplier', 0);
        coin.value.style.setProperty('--middle-y-multiplier', 0);
        coin.value.style.setProperty('--back-scale-multiplier', 0);
        coin.value.style.setProperty('--back-y-multiplier', 0);
        coin.value.style.setProperty('opacity', 1);
      }
      setTimeout(() => {
        isClicked.value = false;
      }, 300);
    };

    const flipCoinLoop = () => {
      moveLoopCount++;
      let percentageCompleted = moveLoopCount / maxMoveLoopCount;
      let angle = -maxFlipAngle * Math.pow((percentageCompleted - 1), 2) + maxFlipAngle;
      if (coin.value) {
        coin.value.style.setProperty('--coin-y-multiplier', -11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11);
        coin.value.style.setProperty('--coin-x-multiplier', percentageCompleted);
        coin.value.style.setProperty('--coin-scale-multiplier', percentageCompleted * 0.6);
        coin.value.style.setProperty('--coin-rotation-multiplier', percentageCompleted * sideRotationCount);

        coin.value.style.setProperty('--front-scale-multiplier', Math.max(Math.cos(angle), 0));
        coin.value.style.setProperty('--front-y-multiplier', Math.sin(angle));
        coin.value.style.setProperty('--middle-scale-multiplier', Math.abs(Math.cos(angle), 0));
        coin.value.style.setProperty('--middle-y-multiplier', Math.cos((angle + Math.PI / 2) % Math.PI));
        coin.value.style.setProperty('--back-scale-multiplier', Math.max(Math.cos(angle - Math.PI), 0));
        coin.value.style.setProperty('--back-y-multiplier', Math.sin(angle - Math.PI));
        coin.value.style.setProperty('--shine-opacity-multiplier', 4 * Math.sin((angle + Math.PI / 2) % Math.PI) - 3.2);
        coin.value.style.setProperty('--shine-bg-multiplier', -40 * (Math.cos((angle + Math.PI / 2) % Math.PI) - 0.5) + '%');

        if (moveLoopCount > maxMoveLoopCount - 10) {
          // Make the coin disappear towards the end of the animation
          coin.value.style.setProperty('opacity', (maxMoveLoopCount - moveLoopCount) / 10);
        }
      }
      if (moveLoopCount < maxMoveLoopCount) {
        if (moveLoopCount === maxMoveLoopCount - 6) {
          coin.value.classList.add('shrink-landing');
        }
        window.requestAnimationFrame(flipCoinLoop);
      } else {
        coin.value.classList.add('coin-landed');
        coin.value.style.setProperty('opacity', 0);
        setTimeout(() => {
          coin.value.classList.remove('shrink-landing', 'coin-landed');
          resetCoin();
        }, 1500);
      }
    };

    const handleClick = () => {
      if (isClicked.value) return;
      isClicked.value = true;
      setTimeout(() => {
        sideRotationCount = Math.floor(Math.random() * 5) * 90;
        maxFlipAngle = (Math.floor(Math.random() * 4) + 3) * Math.PI;
        moveLoopCount = 0;  // Reset moveLoopCount
        flipCoinLoop();
      }, 50);
    };

    return { handleClick, isClicked, coin };
  },
};
</script>

<style scoped>
.solana-logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.tip-button {
  background: none;
  margin-top: 150px;
  border: 0;
  border-radius: 0.25rem 0.25rem 0 0;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  height: 2.6rem;
  margin-bottom: -4rem;
  outline: 0;
  position: relative;
  top: 0;
  transform-origin: 0% 100%;
  transition: transform 50ms ease-in-out;
  width: 9.5rem;
  -webkit-tap-highlight-color: transparent;
}
.tip-button:active {
  transform: rotate(4deg);
}
.tip-button.clicked {
  animation: 150ms ease-in-out 1 shake;
  pointer-events: none;
}
.tip-button.clicked .tip-button__text {
  opacity: 0;
  transition: opacity 100ms linear 200ms;
}
.tip-button.clicked::before {
  height: 0.5rem;
  width: 60%;
}
.tip-button.clicked .coin {
  transition: margin-bottom 1s linear 200ms;
  margin-bottom: 0;
}
.tip-button.shrink-landing::before {
  transition: width 200ms ease-in;
  width: 0;
}
.tip-button.coin-landed::after {
  opacity: 1;
  transform: scale(1);
  transform-origin: 50% 100%;
}
.tip-button.coin-landed .coin-wrapper {
  backg
