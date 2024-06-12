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
      timeoutId: null,
      alertSchedule: [
        { min: 30000, max: 50000 },
        40000,
        10000,
        80000,
        120000
      ], // Time intervals in ms
      alertIndex: 0,
    };
  },
  created() {
    this.generateAlertMessages();
    this.scheduleNextAlert(); // Schedule the first alert
  },
  beforeUnmount() {
    clearTimeout(this.timeoutId);
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

      // Schedule the next alert based on the alert schedule
      this.scheduleNextAlert();
    },
    closeAlert() {
      this.isVisible = false;
    },
    scheduleNextAlert() {
      if (this.alertIndex < this.alertSchedule.length) {
        let delay;
        const schedule = this.alertSchedule[this.alertIndex];

        if (typeof schedule === 'object') {
          delay = Math.random() * (schedule.max - schedule.min) + schedule.min;
        } else {
          delay = schedule;
        }

        this.timeoutId = setTimeout(this.showAlert, delay);
        this.alertIndex++;
      }
    }
  }
};
</script>

<style scoped>
/* Alert box container */
.alert-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 13px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: pulse 1s ease-out;
  zoom: 70%;
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
    transform: scale(0.95);
    opacity: 0.7;
  }
  20% {
    transform: scale(1.1);
    opacity: 1;
  }
  40% {
    transform: scale(0.9);
    opacity: 1;
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
  }
  80% {
    transform: scale(0.98);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

p {
  margin-right: 10px;
}
</style>
