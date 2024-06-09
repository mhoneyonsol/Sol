
 import $ from 'jquery';
<template>
  
 

 <div class="pop-up">
  <div class="content">
    <div class="container">
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      
      <span class="close">fermer</span>
      
   
      <p class="back">0x444</p>
      <img draggable="false" src="https://media0.giphy.com/media/1PgEztlO5hmsMuwIAu/giphy.gif?cid=ecf05e4740500a7827d81d483a1ff8d4a33749c7e2df0755&amp;rid=giphy.gif" alt="Car">
      
      <div class="subscribe">
        <h1>Souscrivez à la newsletter et recevez <span> mes dernières news et travaux</span>.</h1>
      
        <form>
          <input style="cursor: url(https://i.imgur.com/pKsV7hh.png) 25 15, auto;" type="email" placeholder="Votre adresse mail">
          <input type="submit" value="Souscrire">
        </form>
      </div>
    </div>
  </div>
</div>

<div class="plus" style="">
 





 <button href="index.html#contact" class="bdr-ripple-ani-btn">
 <img src="https://cdn.dribbble.com/users/891352/screenshots/7105199/media/5238cf20f0301e51fea9cad8912b9ea3.gif" class="turn" style=" transform: scale(1.8);"></button>

 

 <div class="tooltip" style="">
    <p>How to use</p>
    <i class="fa fa-play"></i>
  </div>
</div>


<script>

document.addEventListener('contextmenu', event => event.preventDefault());


$("buutton").click(function () {
  $(".pop-up").addClass("open");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("open");
});




</script>

<style>



</style>



</template>

