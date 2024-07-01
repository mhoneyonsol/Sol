<template>
  <div class="coin-container">
    <span class="coin gold" @click="Flip"></span>
  </div>
</template>

<script>
export default {
  methods: {
    Flip(event) {
      const coin = event.target;
      const random = Math.floor(Math.random() * 2);
      const classes = coin.className;

      coin.className = `${classes} ${random === 1 ? 'flippy' : 'reverse-flippy'}`;

      setTimeout(() => {
        coin.className = classes;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.coin-container {
  display: inline-block;
}

.coin {
  display: inline-block;
  box-sizing: border-box;
  width: 2em;
  margin: 0 0.25rem;
  height: 1em;
  border-bottom: 0.05em solid white;
  border-right: 0.05em solid white;
  border-radius: 50%;
  transition: all 0.25s ease-out;
  cursor: pointer;
  background-image: linear-gradient(20deg, goldenrod, 30%, khaki, 34%, khaki, 50%, goldenrod, 54%, goldenrod, 60%, wheat, 64%, wheat, 67%, goldenrod, 71%, goldenrod);
  box-shadow: 0 0.05em 0 darken(goldenrod, 20%), 0 0.1em 0 darken(goldenrod, 20%), 0 0.15em 0 darken(goldenrod, 20%), 0 0.2em 0 darken(goldenrod, 20%), 0 0.25em 0 darken(goldenrod, 20%), 0 0.3em 0 darken(goldenrod, 20%), 0 0.35em 0.1em rgba(0, 0, 0, 0.5);
}

.coin.copper {
  filter: hue-rotate(-30deg) saturate(50%) contrast(140%);
}

.coin.silver {
  filter: grayscale(100%) contrast(115%);
}

.coin.flippy {
  animation: flip 1.5s linear;
}

.coin.reverse-flippy {
  animation: reverse-flip 1.5s linear;
}

@keyframes flip {
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(-3rem) rotate(180deg);
  }
  50% {
    height: 0.1rem;
    border: 0.025;
    transform: translateY(-5rem) rotate(360deg);
  }
  75% {
    transform: translateY(-4rem) rotate(540deg);
  }
  100% {
    transform: translateY(0) rotate(720deg);
  }
}

@keyframes reverse-flip {
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(-3rem) rotate(-180deg);
  }
  50% {
    height: 0.1rem;
    border: 0.025;
    transform: translateY(-5rem) rotate(-360deg);
  }
  75% {
    transform: translateY(-4rem) rotate(-540deg);
  }
  100% {
    transform: translateY(0) rotate(-720deg);
  }
}
</style>
