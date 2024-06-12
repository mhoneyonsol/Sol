<template>
<div id="background-overlay" class="background-overlay"></div>
<div id="alert-box" class="alert-box">
  <p id="alert-message"></p>
  <button class="close-button" onclick="closeAlert()">✖</button>
</div>

<script>
  // Function to generate a random string with a given length from numbers and uppercase/lowercase letters
  function getRandomString(length) {
    const characters = '0123456789012345678901234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // More numbers than letters
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
  }

  // Function to generate a random number between min and max
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Array of funny names
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

  // Array of alert messages
  const alertMessages = [];
  for (let i = 1; i <= 100; i++) {
    const address = getRandomString(4) + '...' + getRandomString(4);
    const funnyName = funnyNames[Math.floor(Math.random() * funnyNames.length)];
    alertMessages.push(`${address} created ${funnyName} token`);
  }

  let currentAlertIndex = 0;

  // Function to show the alert
  function showAlert() {
    document.getElementById('alert-message').textContent = alertMessages[currentAlertIndex];
    document.getElementById('background-overlay').style.display = 'block';
    document.getElementById('alert-box').style.display = 'block';

    // Hide the alert after 3 seconds
    setTimeout(closeAlert, 3000);

    // Cycle to the next alert message
    currentAlertIndex = (currentAlertIndex + 1) % alertMessages.length;
  }

  // Function to close the alert
  function closeAlert() {
    document.getElementById('background-overlay').style.display = 'none';
    document.getElementById('alert-box').style.display = 'none';
  }

  // Show the alert every 7 seconds
  setInterval(showAlert, 7000);
</script>
</template>