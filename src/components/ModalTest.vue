<template>
  <div>
    <div class="button">
      <button>
        <img 
          src="https://media1.giphy.com/media/pylneZCpX0CCsQWSRY/200w.webp?cid=ecf05e474152b1706e962445f5c59ba8b3b0b0f3f52a1aef&amp;rid=200w.webp" 
          style="max-width: 80%;" 
        />
      </button>
    </div>

    <div class="pop-up">
      <div class="content">
        <div class="container">
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          
          <span class="close">fermer</span>
          
          <p style="font-family: 'Russo One', sans-serif;" class="back">0x444</p>
          <img 
            draggable="false" 
            src="https://media0.giphy.com/media/1PgEztlO5hmsMuwIAu/giphy.gif?cid=ecf05e4740500a7827d81d483a1ff8d4a33749c7e2df0755&rid=giphy.gif" 
            alt="Car" 
          />
          
          <div class="subscribe">
            <h1>Souscrivez à la newsletter et recevez <span>mes dernières news et travaux</span>.</h1>
            <form>
              <input type="email" placeholder="Votre adresse mail" />
              <input type="submit" value="Souscrire" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


<script>
import $ from 'jquery';

export default {
  mounted() {
    document.addEventListener('contextmenu', event => event.preventDefault());

    $("button").click(function () {
      $(".pop-up").addClass("open");
    });

    $(".pop-up .close").click(function () {
      $(".pop-up").removeClass("open");
    });
  }
};
</script>

<style>@-webkit-keyframes float {
  0% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
  50% {
    transform: translatey(-30px);
    transform: translatex(20px);
  }
  100% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
}
@-moz-keyframes float {
  0% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
  50% {
    transform: translatey(-30px);
    transform: translatex(20px);
  }
  100% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
}
@-o-keyframes float {
  0% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
  50% {
    transform: translatey(-30px);
    transform: translatex(20px);
  }
  100% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
}
@keyframes float {
  0% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
  50% {
    transform: translatey(-30px);
    transform: translatex(20px);
  }
  100% {
    transform: translatey(0px);
    transform: translatex(0px);
  }
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.button button {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: inherit;
  border-radius: 23pc;
  background-color: #ffffff;
  border: 0;
  padding: 15px 25px;
  color: #000000;
  text-transform: uppercase;
  font-size: 21px;
  letter-spacing: 1px;
  width: 200px;
  overflow: hidden;
  outline: 0;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
  visibility: visible;
  opacity: 1;
  font-weight: bold;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.6);
}
.button button:hover {
  cursor: pointer;
  background-color: #222;
  color: #ffffff;
}
.button button span {
  opacity: 1;
  font-family: Comfortaa;
}
.button.clicked button {
  visibility: hidden;
  oacity: 0;
}

.pop-up {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) scale(0.9);
  -moz-transform: translate(-50%, -50%) scale(0.9);
  -ms-transform: translate(-50%, -50%) scale(0.9);
  -o-transform: translate(-50%, -50%) scale(0.9);
  transform: translate(-50%, -50%) scale(0.9);
  overflow-y: auto;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 10;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
  .pop-up {
    width: calc(100% - 40px);
    height: auto;
    max-width: 900px;
  }
}
.pop-up .content {
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  text-align: center;
  position: relative;
  min-height: 100vh;
}
@media (min-width: 768px) {
  .pop-up .content {
    min-height: inherit;
  }
}
.pop-up .content .container {
  padding: 100px 20px 140px;
}
@media (min-width: 568px) {
  .pop-up .content .container {
    padding: 50px 20px 80px;
  }
}
@media (min-width: 768px) {
  .pop-up .content .container {
    padding: 70px 0px 90px;
    max-width: 520px;
    margin: 0 auto;
  }
}
.pop-up .content .close {
  position: absolute;
    top: 20px;
    left: 20px;
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
    color: #222;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    font-weight: 400;
}
.pop-up .content .close:hover {
  cursor: pointer;
  color: #bcbcbc;
}
.pop-up .content .dots .dot {
  position: absolute;
  border-radius: 100%;
  z-index: 11;
}
.pop-up .content .dots .dot:nth-of-type(1) {
  top: -80px;
  right: -80px;
  width: 160px;
  height: 160px;
  background-color: #ffb4ce;
  -webkit-animation: float 6s ease-in-out infinite;
  -moz-animation: float 6s ease-in-out infinite;
  -o-animation: float 6s ease-in-out infinite;
  animation: float 6s ease-in-out infinite;
}
@media (min-width: 768px) {
  .pop-up .content .dots .dot:nth-of-type(1) {
    top: -190px;
    right: -190px;
    width: 380px;
    height: 380px;
  }
}
.pop-up .content .dots .dot:nth-of-type(2) {
  bottom: -120px;
  left: -120px;
  width: 240px;
  height: 240px;
  background-color: #fff38e;
  -webkit-animation: float 8s ease-in-out infinite;
  -moz-animation: float 8s ease-in-out infinite;
  -o-animation: float 8s ease-in-out infinite;
  animation: float 8s ease-in-out infinite;
}
.pop-up .content .dots .dot:nth-of-type(3) {
  bottom: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
  background-color: #82d8ff;
  -webkit-animation: float 4s ease-in-out infinite;
  -moz-animation: float 4s ease-in-out infinite;
  -o-animation: float 4s ease-in-out infinite;
  animation: float 4s ease-in-out infinite;
}
.pop-up .content .title h1 {
  text-align: center;
  color: #bcbcbc;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.8rem;
  letter-spacing: 0.05rem;
}
.pop-up .content img {
  width: 100%;
  max-width: 220px;
  display: inline-block;
  margin: 30px 0 40px 0;
  opacity: 0;
  -webkit-transform: translateX(60px);
  -moz-transform: translateX(60px);
  -ms-transform: translateX(60px);
  -o-transform: translateX(60px);
  transform: translateX(60px);
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  -webkit-backface-visibility: hidden;
}
@media (min-width: 768px) {
  .pop-up .content img {
    max-width: 300px;
  }
}
.pop-up .content .subscribe h1 {
  font-size: 1.5rem;
  color: #222;
  line-height: 130%;
  letter-spacing: 0.07rem;
  margin-bottom: 30px;
}
.pop-up .content .subscribe h1 span {
  color: #bcbcbc;
}
.pop-up .content .subscribe form {
  overflow: hidden;
}
.pop-up .content .subscribe form input {
  width: 100%;
  float: left;
  padding: 15px 20px;
  text-align: center;
  font-family: inherit;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  outline: 0;
}
.pop-up .content .subscribe form input[type=email] {
  margin-bottom: 15px;
  border-radius: 23PC 0PC 0PC 23PC;
  border: 1px solid #a2a2a2;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
}
@media (min-width: 768px) {
  .pop-up .content .subscribe form input[type=email] {
    margin-bottom: 0px;
    width: 75%;
    border-right-width: 0px;
  }
}
.pop-up .content .subscribe form input[type=email]:focus {
  border-color: #222;
}
.pop-up .content .subscribe form input[type=submit] {
    background-color: #1f1f1f8c;
    color: #ffffff;
    border-radius: 0PC 23PC 23PC 0PC;
    /* border: 1px solid #222; */
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}
@media (min-width: 768px) {
  .pop-up .content .subscribe form input[type=submit] {
    width: 25%;
  }
}
.pop-up .content .subscribe form input[type=submit]:hover {
  cursor: pointer;
  background-color: #090909;
  border-color: #090909;
}
.pop-up.open {
  visibility: visible;
  border-radius:23px;
  opacity: 1;
  position: fixed;
  -webkit-transform: translate(-50%, -50%) scale(1);
  -moz-transform: translate(-50%, -50%) scale(1);
  -ms-transform: translate(-50%, -50%) scale(1);
  -o-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
  cursor: url(https://i.imgur.com/IyBiS1B.png) 25 15, auto;
}
.pop-up.open img {
  margin-bottom: 0;
  opacity: 1;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  -webkit-transition-delay: 0.3s;
  -moz-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  -ms-transform: translateX(0px);
  -o-transform: translateX(0px);
  transform: translateX(0px);
}

p.back {
      font-size: 8EM;
    position: fixed;
    opacity: 0.8;
    COLOR: #1f1f1f;
    font-weight: 600;
    font-family: 'Russo One', sans-serif;
}
</style>



</template>

