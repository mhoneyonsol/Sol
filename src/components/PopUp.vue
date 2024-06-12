<template>
  <div>
    <div v-if="isVisible" id="alert-box" class="alert-box">
      <p>{{ alertMessage }}</p>
      <button class="close-button" @click="closeAlert">✖</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      alertMessage: '',
      alertMessages: [],
      currentAlertIndex: 0,
      intervalId: null,
    };
  },
  created() {
    this.generateAlertMessages();
    this.intervalId = setInterval(this.showAlert, 7000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    generateAlertMessages() {
      const funnyNames = [
        "Bonk", "Pok", "Paki", "Shark", "Fluff", "Wobble", "Doodle", "Zonk", "Fizz", "Giggles",
        "Wacky", "Snort", "Peppy", "Bam", "Boom", "Bop", "Zip", "Zap", "Frodo", "Zappy",
        "Zippy", "Noodle", "Squee", "Puff", "Blip", "Blob", "Squiggle", "Whiz", "Tinkle", "Jolly",
        "Goofy", "Funky", "Buzzy", "Hoppy", "Jumpy", "Fizzy", "Quirky", "Silly", "Lumpy", "Zany",
        "Spunky", "Froggy", "Jumpy", "Nutty", "Cheery", "Loony", "Dizzy", "Witty", "Giddy", "Bouncy",
        "Wiggly", "Poppy", "Snappy", "Blinky", "Twinkly", "Wacky", "Pipsqueak", "Squeaky", "Wobble",
        "Chirpy", "Peppy", "Doodle", "Dizzy", "Giggles", "Fluff", "Punky", "Bub", "Fuzz", "Tizzy",
        "Jester", "Zinger", "Quacky", "Wacky", "Jolly", "Zippy", "Peppy", "Buzzy", "Nutter", "Silly",
        "Fizzy", "Goofy", "Snappy", "Wacky", "Zany", "Spunky", "Loon", "Jester", "Jumpy", "Bouncy", "Wiggly",
        "Pipsqueak", "Chirpy", "Hoppy", "Zappy", "Frodo", "Nutty"
      ];

      for (let i = 1; i <= 100; i++) {
        const address = this.getRandomString(4) + '...' + this.getRandomString(4);
        const funnyName = funnyNames[Math.floor(Math.random() * funnyNames.length)];
        this.alertMessages.push(`${address} created ${funnyName} token`);
      }
    },
    getRandomString(length) {
      const characters = '0123456789012345678901234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
      }
      return result;
    },
    showAlert() {
      this.alertMessage = this.alertMessages[this.currentAlertIndex];
      this.isVisible = true;

      setTimeout(this.closeAlert, 3000);

      this.currentAlertIndex = (this.currentAlertIndex + 1) % this.alertMessages.length;
    },
    closeAlert() {
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
/* Alert box container */
.alert-box {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 13px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: pulse 1s ease-out;
}

/* Close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

/* Impulse wave effect */
@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.7;
  }
  20% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
  40% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 1;
  }
  60% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
  80% {
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>
