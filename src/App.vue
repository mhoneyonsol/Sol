<script setup lang="ts">
import { onMounted } from 'vue';
import CreateTokenForm from "./components/CreateTokenForm.vue";
import Chatbot from './components/Chatbot-1.vue';
import Modal from './components/ModalTest.vue';
import Popup from './components/PopUp.vue';
import "./assets/add.css";
import CustomButton from './components/WalletButton.vue';
import SolPrice from './components/SolPrice.vue';
import Car from './components/CarOu.vue';
import CarouSe from './components/CarouSe.vue'; 
import LoadingScreen from './components/LoadingScreen.vue'; 




import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { initWallet, WalletMultiButton } from 'solana-wallets-vue'
import "solana-wallets-vue/styles.css";
import "./assets/add.css";
require('dotenv').config();

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
]
initWallet({ wallets, autoConnect: true })

onMounted(() => {
  document.title = 'SPL Forge - Solana Token Factory';
});




</script>


<template>

<LoadingScreen />

<div id="app">
    <Modal />
    
    

  </div>


    <Popup />
 




<div class="bk">
  <div class="flex lg:px-36 lg:flex-row flex-col justify-center items-center h-screen relative">
    <div class="flex flex-col lg:w-1/2 justify-center items-center w-full">
      <!--ring div starts here-->

<div style="z-index:222;position: absolute;top: 5%;margin-left: 20%;"><input class="closeflag" id="unique-id-for-box-1" type="checkbox"><div class="msgbox" style="
        border: 2px solid black;
    border-radius: 4px;
    padding: 19px;
    background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGlxNm1md2diMnkxMXdwazR3cHh5MXA4Y21ncGlwMG9rcjhndzhwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTniuHdUjpOlNo1q/giphy.gif);
    background-size: 100%;
    background-color: #00000078;
    color: white;
    background-position: bottom!important;
    
"><label class="closebutton" for="unique-id-for-box-1"> ❌</label> To initiate token creation, ensure your wallet holds SOL for transaction fees.</div></div>


      <div class="mt-10"><div class="glitch-wrapper" style="
    /* font-size: 3rem; */
"> <div class="glitch" data-text="SPL Forge" style="
    font-size: 6rem;
    font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-weight: 900;
">SPL Forge</div> </div><h1 class="tt text-5xl font-sans text-slate-800 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#7928ca] to-[#ff0080]" style="position:absolute;margin-top:-145px;font-size:5em;font-weight:100;color:#ffffff29 !important;">SPL TOKEN CREATOR</h1><h3 class="text-center"> ONLY CHAIN FEE. FAST. SECURE<br><span></span></h3></div>
      <div class="mt-5">
        <wallet-multi-button />

        <SolPrice />
        <CustomButton />
        
      </div>
    </div>
    
    
    <div class="flex justify-center items-center lg:w-1/2">

    
     <CarouSe />



<div id="google1" class="modaloverlay">
  <div class="modal"><a href="#close" class="close">&times;</a>

  
      <CreateTokenForm />
      <br>
      <wallet-multi-button />
      
      </div>
      </div>

      <div id="google2" class="modaloverlay">
  <div class="modal"><a href="#close" class="close">&times;</a>

  test2
      
      </div>
      </div>

      <Car />
    </div>
    <Chatbot />
</div>


</div>




</template>





    









































<style>
/* Button Styles */
button.swv-button.swv-button-trigger {
    margin-left: auto;
    margin-right: auto;
}

.swv-button {
    background-color: transparent;
    border: none;
    color: var(--swv-button-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    line-height: 48px;
    padding: 0 24px;
    border-radius: var(--swv-button-radius);
}

.swv-button > * + * {
    margin-left: 12px;
}

.swv-button-trigger {
    background: white;
    color: black;
    font-family: monospace;
    font-weight: 100;
    transition: 0.5s;
}

.swv-button:not([disabled]):hover {
    background-color: #ffffffdb !important;
    transition: 0.5s;
    transform: scale(1.2);
    border-radius: 13px;
}

.swv-button:not([disabled]):focus-visible {
    outline-color: var(--swv-button-outline-color);
}

.swv-button[disabled] {
    background: var(--swv-button-disabled-background-color);
    color: var(--swv-button-disabled-text-color);
    cursor: not-allowed;
}

.swv-button-icon,
.swv-button-icon img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

/* Link Styles */
a.cr, a.cy {
    padding: 50px;
    border-radius: 23px;
    width: 50%;
    color: #fff;
    padding-left: 20px;
    filter: drop-shadow(2px 4px 6px black);
    height: 1em;
    transition: 2s;
}

a.cr {
    background: #4A59E0;
    background-image: url(https://i.imgur.com/py2KVmM.png);
    background-position: right;
    background-size: 30%;
    background-repeat: no-repeat;
    background-position-x: 95%;
    color: white;
}

a.cy {
    background: #E1597F;
    background-image: url(https://i.imgur.com/py2KVmM.png);
    background-position: right;
    background-size: 30%;
    background-repeat: no-repeat;
    background-position-x: 95%;
    color: white;
}

/* Paragraph Styles */
p.cto {
    font-size: 200%;
    transition: 1s;
}

p.cto:hover {
    font-size: 220%;
    transition: 1s;
}

p.call {
    font-size: 3em;
    margin-top: 22px;
}

/* Flexbox Styles */
.flex.justify-center.items-center.lg\:w-1\/2 {
    flex-direction: column;
}

.flex.flex-col.gap-2.w-60.sm\:w-72.text-\[10px\].sm\:text-xs.z-50 {
    display: none;
}

/* Font Imports */
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Yatra+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Noto+Color+Emoji&family=Red+Rose:wght@300..700&display=swap');

/* List Styles */
li {
    margin-top: 10px;
}

/* Span Styles */
span.bg-red-400.mt-3.rounded-sm.px-5.py-1 {
    position: absolute;
    left: 25%;
    top: 10%;
    border-radius: 13px;
    background: #ff0000;
    z-index: 444;
    filter: drop-shadow(2px 4px 6px black);
}

/* Checkbox Styles */
.rounded-checkbox {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    cursor: pointer;
}

.rounded-checkbox::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
}

input[type="checkbox"].hidden:checked + .rounded-checkbox::after {
    opacity: 1;
}

/* Keyframes */
@keyframes hue-rotate-animation {
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(353deg);
    }
    100% {
        filter: hue-rotate(0deg);
    }
}

@keyframes at-ripple {
    0% {
        box-shadow: 0 4px 10px rgba(102, 102, 102, 0.1), 0 0 0 0 rgba(102, 102, 102, 0.1), 0 0 0 5px rgba(102, 102, 102, 0.1), 0 0 0 10px rgba(102, 102, 102, 0.1);
    }
    100% {
        box-shadow: 0 4px 10px rgba(102, 102, 102, 0.1), 0 0 0 5px rgba(102, 102, 102, 0.1), 0 0 0 10px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0);
    }
}

@keyframes at-ripple-pink {
    0% {
        box-shadow: 0 4px 10px rgba(255, 65, 130, 0.1), 0 0 0 0 rgba(255, 65, 130, 0.1), 0 0 0 5px rgba(255, 65, 130, 0.1), 0 0 0 10px rgba(255, 65, 130, 0.1);
    }
    100% {
        box-shadow: 0 4px 10px rgba(255, 65, 130, 0.1), 0 0 0 5px rgba(255, 65, 130, 0.1), 0 0 0 10px rgba(255, 65, 130, 0.1), 0 0 0 20px rgba(255, 65, 130, 0);
    }
}

@keyframes glow {
    0% {
        box-shadow: 0 0 50px 50px rgba(50, 160, 50, 0.9);
    }
    50% {
        box-shadow: 0 0 50px 0px rgba(50, 160, 50, .2);
    }
    100% {
        box-shadow: 0 0 50px 50px rgba(50, 160, 50, 0.9);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px) translateX(0px);
    }
    50% {
        transform: translateY(-30px) translateX(20px);
    }
    100% {
        transform: translateY(0px) translateX(0px);
    }
}

@keyframes tooltip-vert {
    to {
        opacity: 1;
        transform: translate(-50%, 0);
    }
}

@keyframes tooltip-horz {
    to {
        opacity: 1;
        transform: translate(0, -50%);
    }
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate2 {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes glitch-it {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    to {
        transform: translate(0);
    }
}

/* Utility Styles */
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    display: block;
    backdrop-filter: brightness(0.7);
}

.bdr-ripple-ani-btn {
    display: block;
    background: #5B9BFF;
    width: 68px;
    height: 68px;
    line-height: 48px;
    text-align: center;
    border-radius: 100%;
    box-sizing: border-box;
    color: #666;
    animation: at-ripple 0.6s linear infinite;
    overflow: hidden;
    border: 2px SOLID #5B9BFF;
}

.bdr-ripple-ani-btn.pink {
    background: #ff4081;
    color: white;
    animation: at-ripple-pink 0.6s linear infinite;
}

.bdr-ripple-ani-btn.two {
    right: 300px;
    z-index: 2;
    position: fixed;
    bottom: 50px;
}

.bdr-ripple-ani-btn i {
    transform: rotate(0deg);
    transition: 0.5s ease;
}

.bdr-ripple-ani-btn:hover i {
    transform: rotate(180deg);
}

.ring {
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ring i {
    position: absolute;
    inset: 0;
    transition: 0.5s;
    border: 6px solid white;
    filter: drop-shadow(0 0 20px #ffc65c);
}

.ring i:nth-child(1) {
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    animation: animate 6s linear infinite;
}

.ring i:nth-child(2) {
    border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
    animation: animate 4s linear infinite;
}

.ring i:nth-child(3) {
    border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
    animation: animate2 10s linear infinite;
}

.ring:hover i {
    border: 6px solid var(--clr);
    filter: drop-shadow(0 0 20px var(--clr));
}

.glow-shadow {
    background: #fff;
    width: 100px;
    height: 100px;
    left: 50px;
    margin-left: 50px;
    margin-top: 15%;
    border-radius: 50%;
    -webkit-animation: throb 1.5s infinite ease-in-out;
    animation: glow 1.5s infinite ease-in-out;
}

/* Tooltip Styles */
[data-tooltip] {
    position: relative;
    cursor: pointer;
    color: white;
    z-index: 222;
}

[data-tooltip]::before,
[data-tooltip]::after {
    text-transform: none;
    font-size: .9em;
    line-height: 1;
    position: absolute;
    display: none;
    opacity: 0;
}

[data-tooltip]::before {
    content: '';
    border: 6px solid transparent;
    z-index: 101;
}

[data-tooltip]::after {
    content: attr(data-tooltip);
    text-align: center;
    min-width: 3em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 6px 8px;
    border-radius: 3px;
    background: #FFFFFF;
    color: #FFFFFF;
    z-index: 100;
}

[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
    display: block;
}

[data-tooltip='']::before,
[data-tooltip='']::after {
    display: none !important;
}

[data-tooltip]:not([data-flow])::before,
[data-tooltip][data-flow^="top"]::before {
    bottom: 100%;
    border-bottom-width: 0;
    border-top-color: #333333;
}

[data-tooltip]:not([data-flow])::after,
[data-tooltip][data-flow^="top"]::after {
    bottom: calc(100% + 5px);
}

[data-tooltip]:not([data-flow])::before,
[data-tooltip]:not([data-flow])::after,
[data-tooltip][data-flow^="top"]::before,
[data-tooltip][data-flow^="top"]::after {
    transform: translate(-50%, -.4em);
    left: 20%;
    top: 130%;
    transform: translate(-50%, 0.4em);
    background: #333333;
    filter: drop-shadow(2px 4px 6px black);
}

[data-tooltip][data-flow^="bottom"]::before {
    top: 100%;
    border-top-width: 0;
    border-bottom-color: #333333;
}

[data-tooltip][data-flow^="bottom"]::after {
    top: calc(100% + 5px);
}

[data-tooltip][data-flow^="bottom"]::before,
[data-tooltip][data-flow^="bottom"]::after {
    left: 50%;
    transform: translate(-50%, .4em);
}

[data-tooltip][data-flow^="left"]::before {
    top: 50%;
    border-right-width: 0;
    border-left-color: #333333;
    left: calc(0em - 5px);
    transform: translate(-.5em, -50%);
}

[data-tooltip][data-flow^="left"]::after {
    top: 50%;
    right: calc(100% + 5px);
    transform: translate(-.4em, -50%);
}

[data-tooltip][data-flow^="right"]::before {
    top: 50%;
    border-left-width: 0;
    border-right-color: #333333;
    right: calc(0em - 7px);
    transform: translate(.4em, -50%);
}

[data-tooltip][data-flow^="right"]::after {
    top: 50%;
    left: calc(100% + 5px);
    transform: translate(.5em, -50%);
}

[data-tooltip]:not([data-flow]):hover::before,
[data-tooltip]:not([data-flow]):hover::after,
[data-tooltip][data-flow^="top"]:hover::before,
[data-tooltip][data-flow^="top"]:hover::after,
[data-tooltip][data-flow^="bottom"]:hover::before,
[data-tooltip][data-flow^="bottom"]:hover::after {
    animation: tooltip-vert .5s ease-out forwards;
    left: 20%;
    top: 130%;
    transform: translate(-50%, 0.4em);
    background: #333333;
    filter: drop-shadow(2px 4px 6px black);
}

[data-tooltip][data-flow^="left"]:hover::before,
[data-tooltip][data-flow^="left"]:hover::after,
[data-tooltip][data-flow^="right"]:hover::before,
[data-tooltip][data-flow^="right"]:hover::after {
    animation: tooltip-horz .5s ease-out forwards;
}

/* Responsive Styles */
@media screen and (max-width: 767px) {
    .accordion {
        padding: 0 16px;
    }

    .accordion h1 {
        font-size: 22px;
    }
}

@media (max-width: 600px) {
    .over {
        width: 100%;
        height: 100%;
        background: black;
    }

    .chatbot {
        display: none;
    }

    .h-screen {
        height: 150vh;
    }

    .modaloverlay .modal {
        background-color: #121212;
        height: 100%;
        position: relative;
        margin: 0 auto;
        background-size: 30%;
        padding: 3em;
        color: #fff;
        background-repeat: no-repeat;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        border-radius: 23px;
        border: 3px solid white;
        -webkit-backdrop-filter: blur(9px);
        backdrop-filter: blur(9px);
    }

    .cto {
        font-size: 1em !important;
    }

    .w-3\/4 {
        font-size: 0.9em;
    }

    body {
        background-image: url(https://i.imgur.com/6cmzcpu.png);
        background-size: cover !important;
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
    }

    .glitch {
        margin-top: 120px;
        line-height: 55px;
        margin-bottom: 40px;
        filter: drop-shadow(-9px -10px 4px black);
    }

    h1.tt.text-5xl.font-sans.text-slate-800.font-bold.text-center.text-transparent.bg-clip-text.bg-gradient-to-l.from-\[\#7928ca\].to-\[\#ff0080\] {
        font-size: 4rem !important;
    }

    .flex.flex-col.mt-5.border.border-gray-300.p-10.rounded-lg.shadow-lg.shadow-gray-500.w-\[550px\] {
        transform: none !important;
        margin-top: 20%;
        width: 100% !important;
        height: 450px;
        max-height: 600px;
        padding-top: 20px;
        padding: 9px;
        margin-bottom: 40px;
        font-size: 0.9em;
        margin-right: 0% !important;
        margin-top: 20%;
    }

    button.button-85.bg-blue-500.hover\:bg-blue-700.text-white.font-bold.py-3.px-4.rounded.w-full.mt-3.mb-4.bg-gradient-to-r.from-\[\#2152ff\].to-\[\#21d4fd\].uppercase.hover\:scale-\[1\.01\].duration-100 {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-shadow: none !important;
    }

    .cta {
        z-index: 999 !important;
    }

    .h-screen {
        height: none !important;
        margin-bottom: 220px;
    }

    .mt-5 {
        z-index: 222;
    }

    h1.tt.text-5xl.font-sans.text-slate-800.font-bold.text-center.text-transparent.bg-clip-text.bg-gradient-to-l.from-\[\#7928ca\].to-\[\#ff0080\] {
        font-weight: 900;
        margin-top: 65px !important;
    }

    .flex.flex-col.lg\:w-1\/2.justify-center.items-center.w-full {
        margin-top: 20px !important;
    }

    .flex.justify-center.items-center.lg\:w-1\/2 {
        z-index: 222;
    }

    .mt-10 {
        margin-top: 70%;
    }

    input.mt-2.block.w-full.rounded-md.border-0.py-1\.5.pl-4.pr-4.text-gray-900.ring-1.ring-inset.ring-gray-400.placeholder\:text-gray-400.focus\:ring-2.focus\:ring-inset.focus\:ring-indigo-600.sm\:text-sm.sm\:leading-6 {
        width: 50%;
    }

    .flex.flex-row.items-center.justify-center {
        margin-top: 8px;
    }

    div#app {
        background-size: 55%;
    }

    p.nop {
        display: none;
    }

    .shadow-gray-500 {
        margin-top: 20%;
        margin-right: 0;
    }
}

@media only screen and (max-width: 600px) {
    tt {
        font-size: 3em !important;
    }

    .modaloverlay .modal::-webkit-scrollbar {
        display: none;
    }

    .modaloverlay .modal {
        background-color: #121212;
        height: 100%;
        position: relative;
        margin: 0 auto;
        background-size: 30%;
        padding: 3em;
        -ms-overflow-style: none;
        scrollbar-width: none;
        color: #fff;
        background-repeat: no-repeat;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        border-radius: 23px;
        border: 3px solid #fff;
        -webkit-backdrop-filter: blur(9px);
        backdrop-filter: blur(9px);
        box-shadow: 15px -11px 0px 9px rgb(35 35 35);
        background-position: 100% 100%;
    }

    button.button-85.bg-blue-500.hover\:bg-blue-700.text-white.font-bold.py-3.px-4.rounded.w-full.mt-3.mb-4.bg-gradient-to-r.from-\[\#2152ff\].to-\[\#21d4fd\].uppercase.hover\:scale-\[1\.01\].duration-100 {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-shadow: none !important;
    }
}
</style>
