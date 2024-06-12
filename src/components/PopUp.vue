<template>
  <div>
    <div v-if="isVisible" class="background-overlay"></div>
    <div v-if="isVisible" class="alert-box">
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
  beforeDestroy() {
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
</template>