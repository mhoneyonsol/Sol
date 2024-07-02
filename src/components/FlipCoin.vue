<template>
  <div class="LF">
    <div class="outcome" ref="outcome"></div>
    <button @click="FlipP">Flip Coin</button>
  </div>
</template>

<script>
export default {
  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    },
    FlipP() {
      const outcome = this.$refs.outcome;
      const randomNumber = this.getRandomNumber();
      outcome.textContent = '';
      outcome.classList.toggle('flip');
      outcome.classList.add('toss');

      setTimeout(() => {
        if (randomNumber === 1) {
          outcome.textContent = '';
        } else if (randomNumber === 2) {
          outcome.textContent = '';
        }
        outcome.classList.remove('toss');
      }, 800);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.LF {
        position: absolute;
    bottom: 5%;
    right: 3%; 
}

body {
  background: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

button {
background: none;
    border: 2px solid green;
    padding: 12px 30px 11px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 5px;
    position: relative;
    color: #fff;
    font-size: 12px;
    outline: none;
    height: 200px;
    width: 200PX;
    z-index: 444;
    opacity: 0;

}
button:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
  background: green;
  transition: 0.2s;
  z-index: -1;
}
button:hover:before {
  height: 100%;
}
button:hover {
  cursor: pointer;
}

.outcome {
  height: 200px;
    width: 200px;
    background: #000;
    margin-bottom: 50px;
    border-radius: 50%;
    border-style: dotted;
    border-color: #1c1c1c;
    border-width: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: rotateY(0deg) rotateX(0deg);
    transition: 1s;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700;
    line-height: .8;
    color: #222;
    box-shadow: 0 0 30px #000;
    margin-top: 7vh;
    margin-left: 7vh;
    zoom: 70%;
    background-image: url(https://i.imgur.com/hjNeC8A.png);
    background-size: 70%;
    background-position: 50%;
    border: 15px solid #383838;
    background-repeat: no-repeat;
    filter: drop-shadow(2px 4px 6px black);
}
.outcome.flip {
  transition: 1s;
  transform: rotateY(720deg) rotateX(720deg);
}
.outcome.toss {
  -webkit-animation: toss 0.7s forwards ease-in-out;
          animation: toss 0.7s forwards ease-in-out;
}
.outcome:before {
  content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    /* background: none; */
    background-image: url(https://i.imgur.com/hjNeC8A.png);
    background-size: 70%;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    filter: drop-shadow(2px 4px 6px black);
}
.outcome:after {
  content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    /* background: none; */
    background-image: url(https://i.imgur.com/hjNeC8A.png);
    background-size: 70%;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    filter: drop-shadow(2px 4px 6px black);
}

@-webkit-keyframes toss {
  0% {
    top: 0px;
  }
  50% {
    top: -150px;
  }
  100% {
    top: 0px;
  }
}

@keyframes toss {
  0% {
    top: 0px;
  }
  50% {
    top: -150px;
  }
  100% {
    top: 0px;
  }
}



media (max-width: 600px) {


.outcome {
    
    margin-top: 6vh!important;
    margin-left: 4vh!important;
    zoom: 50%!important;
   
}



}

@media (max-width: 600px) {

.LF {
  zoom: 50% !important;
        position: relative;
        margin-left: 40%;
       
}

button {
    background: none;
    border: 2px solid green;
    padding: 12px 30px 11px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 5px;
    position: relative;
    color: #fff;
    font-size: 12px;
    outline: none;
    height: 200px;
    width: 200PX;
    z-index: 444;
    opacity: 0;
    margin-top: -150px;
    margin-right: -50px;
}



}

</style>
