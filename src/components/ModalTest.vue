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





</template>

