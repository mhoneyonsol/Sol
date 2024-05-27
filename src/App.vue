<script setup lang="ts">
import CreateTokenForm from "./components/CreateTokenForm.vue";
import Chatbot from './components/Chatbot-1.vue';

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
</script>

<template>





<div class="bk">
  <div class="flex lg:px-36 lg:flex-row flex-col justify-center items-center h-screen relative">
    <div class="flex flex-col lg:w-1/2 justify-center items-center w-full">
      <!--ring div starts here-->

      <div class="mt-10"><h1 class="tt text-5xl font-sans text-slate-800 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#7928ca] to-[#ff0080]"> SPL TOKEN CREATOR</h1><h1 class="tt text-5xl font-sans text-slate-800 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#7928ca] to-[#ff0080]" style="
    position: absolute;
    margin-top: -95px;
    font-size: 100px;
    font-weight: 100;
    color: #ffffff29 !important;
"> SPL TOKEN CREATOR</h1><h3 class="text-center"> ONLY CHAIN FEE. FAST. SECURE<br><span></span></h3></div>
      <div class="mt-5">
        <wallet-multi-button />
      </div>
    </div>
    <div class="flex justify-center items-center lg:w-1/2">
      <CreateTokenForm />
    </div>
</div>


</div>
<br>
  <div id="app">
    <Chatbot />
  </div>
</template>





    









































<style>@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700&display=swap");

html {
    display: block;
    backdrop-filter: brightness(0.7);
}
.accordion {
    display: flex;
    flex-direction: column;
    font-family: "Sora", sans-serif;
    max-width: 991px;
    min-width: 320px;
    margin: 50px auto;
    padding: 0 50px;
}
.accordion h1 {
    font-size: 32px;
    text-align: center;
}

.button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
 z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000b5;
    left: 0;
    top: 0;
    border-radius: 10px
}

button.button-85.bg-blue-500.hover\:bg-blue-700.text-white.font-bold.py-3.px-4.rounded.w-full.mt-3.mb-4.bg-gradient-to-r.from-\[\#2152ff\].to-\[\#21d4fd\].uppercase.hover\:scale-\[1\.01\].duration-100:hover {
    transform: scale(0.9);
}

button.bg-blue-500.hover\:bg-blue-700.text-white.font-bold.py-3.px-4.rounded.w-full.mt-3.mb-4.bg-gradient-to-r.from-\[\#2152ff\].to-\[\#21d4fd\].uppercase.hover\:scale-\[1\.01\].duration-100 {
    text-transform: inherit;
    font-family: monospace;
    background-image: linear-gradient(348deg, #18ffa5 30%, #830cff 100%);
    color: white;
    margin-top:40px;
    font-weight:300;
}

button.bg-blue-500.hover\:bg-blue-700.text-white.font-bold.py-3.px-4.rounded.w-full.mt-3.mb-4.bg-gradient-to-r.from-\[\#2152ff\].to-\[\#21d4fd\].uppercase.hover\:scale-\[1\.01\].duration-100 {
    background: #E7BD09;

    font-family: monospace;
}

.flex.flex-col.mt-5.border.border-gray-300.p-10.rounded-lg.shadow-lg.shadow-gray-500.w-\[550px\] {
    transition: 2s;
    margin-right: 20%;
    width: 100%;
    height: 400px;
    max-height: 600px;
    padding-top:20px;
}

.flex.flex-col.mt-5.border.border-gray-300.p-10.rounded-lg.shadow-lg.shadow-gray-500.w-\[550px\]:hover {
    transform: scale(1.7) translateX(-200px);
    transition: 1s;
    width: 100%;
    webkit-box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 47px 5px 15px 39px rgba(0,0,0,0); box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 47px 5px 15px 39px rgba(0,0,0,0); 
    
}

div#app {
    dispay:flex;
    background-image: url(https://i.imgur.com/f7B6pf7.png);
    background-position:bottom left;
    background-size: 35%;
    background-color: #ffffff00;
    background-repeat: no-repeat;
}

.over {
    display:none;
  }















@media (max-width: 600px) {
  .over {
    width:100%;
    height:100%;
    background:black
  }

.h-screen {
    height: none!important;
    margin-bottom:150px;
}

h1.tt.text-5xl.font-sans.text-slate-800.font-bold.text-center.text-transparent.bg-clip-text.bg-gradient-to-l.from-\[\#7928ca\].to-\[\#ff0080\] {
    font-weight: 900;
    margin-top:45px!important;
}
  .flex.flex-col.lg\:w-1\/2.justify-center.items-center.w-full {
    margin-top: 0px!important;
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

.flex.flex-col.mt-5.border.border-gray-300.p-10.rounded-lg.shadow-lg.shadow-gray-500.w-\[550px\]:hover {
    transform: scale(1);
    width: 100%;
    webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b, -10px -7px 27px 1px #8e5cff, 47px 5px 15px 39px transparent;
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b, -10px -7px 27px 1px #8e5cff, 47px 5px 15px 39px transparent;
}


.flex.flex-row.items-center.justify-center {
    margin-top: 8px;
}

div#app {
    
    background-size: 55%;
    
}

.flex.flex-col.mt-5.border.border-gray-300.p-10.rounded-lg.shadow-lg.shadow-gray-500.w-\[550px\] {
    transition: 2s;
    margin-top: 20%;
    width: 100%;
    height: 400px;
    max-height: 600px;
    padding-top: 20px;
    padding: 9px;
    font-size: 0.9em;
    padding-top: 20px;
    margin-right:0%!important;
    margin-top:20%;
}

p.nop {
    
    display: none;

}

.text-transparent {
   
    margin-top: 50%!important;
}

.shadow-gray-500 {
   
    margin-top: 20%;
    margin-right:0;
}


}














p.nop {
    
    margin-top: 290px;
    position: absolute;
    text-align: center;
    margin-left: 60px;

}


col.mt-5.border.border-gray-300.p-10.rounded-lg.shadow-lg.shadow-gray-500.w-\[550px\] {
    transform: scale(2) translateX(-150px);
    transition: 2s;
    width:100%;
}


.bk {
width: 100%;
    height: 100%;
    
}

.accordion-item {
    margin-top: 16px;
    border: 1px solid #fcfcfc;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.accordion-item .accordion-item-title {
    position: relative;
    margin: 0;
    display: flex;
    width: 100%;
    font-size: 15px;
    cursor: pointer;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 14px 20px;
    box-sizing: border-box;
    align-items: center;
}
.accordion-item .accordion-item-desc {
    display: none;
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
    color: #444;
    border-top: 1px dashed #ddd;
    padding: 10px 20px 20px;
    box-sizing: border-box;
}
.accordion-item input[type="checkbox"] {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
}
.accordion-item input[type="checkbox"]:checked ~ .accordion-item-desc {
    display: block;
}
.accordion-item
    input[type="checkbox"]:checked
    ~ .accordion-item-title
    .icon:after {
    content: "-";
    font-size: 20px;
}
.accordion-item input[type="checkbox"] ~ .accordion-item-title .icon:after {
    content: "+";
    font-size: 20px;
}
.accordion-item:first-child {
    margin-top: 0;
}
.accordion-item .icon {
    margin-left: 14px;
}

@media screen and (max-width: 767px) {
    .accordion {
        padding: 0 16px;
    }
    .accordion h1 {
        font-size: 22px;
    }
}
</style>

<style>
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
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate 4s linear infinite;
}
.ring i:nth-child(3) {
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate2 10s linear infinite;
}
.ring:hover i {
  border: 6px solid var(--clr);
  filter: drop-shadow(0 0 20px var(--clr));
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
</style>








<style type="text/css">/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

.flex.flex-col.lg\:w-1\/2.justify-center.items-center.w-full {
    margin-top: -350px;
}

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

@media only screen and (max-width: 600px) {
   tt {
    font-size:3em!important;
  }
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

h1.tt.text-5xl.font-sans.text-slate-800.font-bold.text-center.text-transparent.bg-clip-text.bg-gradient-to-l.from-\[\#7928ca\].to-\[\#ff0080\] {
    font-weight: 900;

}

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
  background-image: radial-gradient(circle at 20% 100%, rgba(184, 184, 184, 0.1) 0%, rgba(184, 184, 184, 0.1) 33%, rgba(96, 96, 96, 0.1) 33%, rgba(96, 96, 96, 0.1) 66%, rgba(7, 7, 7, 0.1) 66%, rgba(7, 7, 7, 0.1) 99%), linear-gradient(345deg, #040a22, #1EED93, #9242F2, #41A8C0);
   
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

.swv-button[disabled] {
    background: white!important;
    color: black!important;
    cursor: not-allowed;
}
.swv-modal-overlay {
    background: var(--swv-overlay-background-color);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    margin-top: -100px;
    right: 0;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-ring-color: #451f1f00!important;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.visible {
  visibility: visible;
}
.collapse {
  visibility: collapse;
}
.relative {
  position: relative;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-10 {
    margin-bottom: 50px;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.h-5 {
  height: 1.25rem;
}
.h-screen {
  height: 100vh;
}
.w-1\/3 {
  width: 33.333333%;
}
.w-1\/4 {
  width: 25%;
}
.w-3\/4 {
  width: 75%;
}
.w-5 {
  width: 1.25rem;
}
.w-\[550px\] {
  width: 550px;
}
.w-full {
  width: 100%;
}
.w-1 {
  width: 0.25rem;
}
.w-3 {
  width: 0.75rem;
}
.border-collapse {
  border-collapse: collapse;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.resize {
  resize: both;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.break-words {
  overflow-wrap: break-word;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-\[\#2152ff\] {
  --tw-gradient-from: #2152ff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(33 82 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-\[\#7928ca\] {
  
}
.to-\[\#21d4fd\] {
  --tw-gradient-to: #21d4fd var(--tw-gradient-to-position);
}
.to-\[\#ff0080\] {
          --tw-gradient-to: #ffffff00!important;
    --tw-gradient-from: #27ff8b00!important;
}


.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}
.p-10 {
  padding: 2.5rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-2\.5 {
  padding: 0.625rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.px-36 {
  padding-left: 9rem;
  padding-right: 9rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pr-4 {
  padding-right: 1rem;
}
.text-center {
  text-align: center;
  color:white;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
.uppercase {
  text-transform: uppercase;
}
.leading-6 {
  line-height: 1.5rem;
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}
.text-transparent {
  color: white !important;
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-gray-500 {
  --tw-shadow-color: #black!important;
  --tw-shadow: var(--tw-shadow-colored);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-inset {
  --tw-ring-inset: inset;
}
.ring-gray-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}
.duration-100 {
  transition-duration: 100ms;
}
.placeholder\:text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.placeholder\:text-gray-400::placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.hover\:scale-\[1\.01\]:hover {
  --tw-scale-x: 1.01;
  --tw-scale-y: 1.01;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.focus\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}
.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\:ring-inset:focus {
  --tw-ring-inset: inset;
}
.focus\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}
.focus\:ring-indigo-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
}
@media (min-width: 640px) {

  .sm\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\:leading-6 {
    line-height: 1.5rem;
  }
}
@media (min-width: 1024px) {

  .lg\:w-1\/2 {
    width: 50%;
  }

  .lg\:flex-row {
    flex-direction: row;
  }

  .lg\:px-36 {
    padding-left: 9rem;
    padding-right: 9rem;
  }
}
@media (prefers-color-scheme: dark) {

  .dark\:border-gray-600 {
    --tw-border-opacity: 1;
    border-color: rgb(75 85 99 / var(--tw-border-opacity));
  }

  .dark\:bg-gray-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  }

  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\:placeholder-gray-400::-moz-placeholder {
    --tw-placeholder-opacity: 1;
    color: rgb(156 163 175 / var(--tw-placeholder-opacity));
  }

  .dark\:placeholder-gray-400::placeholder {
    --tw-placeholder-opacity: 1;
    color: rgb(156 163 175 / var(--tw-placeholder-opacity));
  }

  .dark\:focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
  }

  .dark\:focus\:ring-blue-500:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
  }
}
</style>

<style type="text/css">:root {
    /* Buttons. */
    --swv-button-background-color: #4f46e5;
    --swv-button-text-color: white;
    --swv-button-outline-color: #3730a3;
    --swv-button-hover-background-color: #4338ca;
    --swv-button-disabled-background-color: #475569;
    --swv-button-disabled-text-color: #94a3b8;

    /* Modal. */
    --swv-overlay-background-color: rgba(200, 200, 200, 0.8);
    --swv-modal-background-color: white;
    --swv-modal-text-color: #1f2937;
    --swv-modal-close-button-background-color: #f3f4f6;
    --swv-modal-close-button-text-color: #9ca3af;
    --swv-modal-close-button-hover-text-color: #374151;
    --swv-modal-button-text-color: #1f2937;
    --swv-modal-wallet-status-text-color: #64748b;
    --swv-modal-button-hover-background-color: #f3f4f6;
    --swv-modal-button-outline-color: var(--swv-button-outline-color);

    /* Dropdown. */
    --swv-dropdown-background-color: white;
    --swv-dropdown-item-hover-background-color: #f3f4f6;
    --swv-dropdown-text-color: #1f2937;

    /* Shadows. */
    --swm-modal-shadow: 0 25px 25px rgb(0 0 0 / 0.15);
    --swm-dropdown-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);

    /* Radius. */
    --swv-button-radius: 6px;
    --swv-modal-radius: 10px;
    --swv-dropdown-radius: 10px;
    --swv-dropdown-item-radius: 6px;
}

.swv-dark {
    /* Modal. */
    --swv-overlay-background-color: rgba(0, 0, 0, 0.7);
    --swv-modal-background-color: #1e293b;
    --swv-modal-text-color: white;
    --swv-modal-close-button-background-color: #0f172a;
    --swv-modal-close-button-text-color: #64748b;
    --swv-modal-close-button-hover-text-color: white;
    --swv-modal-button-text-color: white;
    --swv-modal-wallet-status-text-color: #64748b;
    --swv-modal-button-hover-background-color: #0f172a;
    --swv-modal-button-outline-color: white;

    /* Dropdown. */
    --swv-dropdown-background-color: #1e293b;
    --swv-dropdown-item-hover-background-color: #334155;
    --swv-dropdown-text-color: white;

    /* Shadows. */
    --swm-modal-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
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
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b, -10px -7px 27px 1px #8e5cff, 47px 5px 15px 39px transparent;
    font-weight: 100;
    transition:0.5s;
}

.swv-button:not([disabled]):hover {
    background-color: white !important;
    transition: 0.5s;
    transform: scale(1.2);
}

.swv-button:not([disabled]):focus-visible {
    outline-color: var(--swv-button-outline-color);
}

.swv-button:not([disabled]):hover {
    background-color: var(--swv-button-hover-background-color);
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

.swv-dropdown {
    position: relative;
    display: inline-block;
}

.swv-dropdown-list {
    position: absolute;
    z-index: 99;
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 10px;
    padding: 10px;
    top: 100%;
    right: 0;
    margin: 0;
    list-style: none;
    background: var(--swv-dropdown-background-color);
    color: var(--swv-dropdown-text-color);
    border-radius: var(--swv-dropdown-radius);
    box-shadow: var(--swm-dropdown-shadow);
    opacity: 0;
    visibility: hidden;
    transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;
    font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.swv-dropdown-list-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
}

.swv-dropdown-list-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    border-radius: var(--swv-dropdown-item-radius);
    font-size: 14px;
    font-weight: 500;
    height: 37px;
}

.swv-dropdown-list-item:not([disabled]):hover {
    background-color: var(--swv-dropdown-item-hover-background-color);
}

.swv-modal-collapse-button {
    justify-content: space-between;
    border-radius: 0px 0px var(--swv-modal-radius) var(--swv-modal-radius);
}

.swv-modal-collapse-button svg {
    transition: transform ease-in 150ms;
    align-self: center;
    fill: #999;
}

.swv-modal-collapse-button.swv-modal-collapse-button-active svg {
    transform: rotate(180deg);
}

.swv-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    transition: opacity linear 150ms;
    z-index: 1040;
    overflow-y: auto;
}

.swv-modal-logo-wrapper {
    padding: 60px;
    padding-bottom: 0px;
}

.swv-modal-logo {
    max-width: 100%;
    max-height: 100px;
}

.swv-modal-button-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 12px;
    cursor: pointer;
    background: var(--swv-modal-close-button-background-color);
    color: var(--swv-modal-close-button-text-color);
    border: none;
    border-radius: 50%;
}

.swv-modal-button-close:hover {
    color: var(--swv-modal-close-button-hover-text-color);
}

.swv-modal-button-close:focus-visible {
    outline-color: var(--swv-modal-button-outline-color);
}

.swv-modal-button-close svg {
    fill: currentColor;
    transition: fill 200ms ease 0s;
}

.swv-modal-overlay {
    background: var(--swv-overlay-background-color);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.swv-modal-container {
    display: flex;
    margin: 3rem;
    min-height: calc(100vh - 6rem); /* 100vh - 2 * margin */
    align-items: center;
    justify-content: center;
}

@media (max-width: 480px) {
    .swv-modal-container {
        margin: 1rem;
        min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */
    }
}

.swv-modal-wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1050;
    max-width: 400px;
    border-radius: var(--swv-modal-radius);
    background: var(--swv-modal-background-color);
    color: var(--swv-modal-text-color);
    box-shadow: var(--swm-modal-shadow);
    font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    flex: 1;
}

.swv-modal-wrapper .swv-button {
    width: 100%;
    color: var(--swv-modal-button-text-color);
}

.swv-modal-wrapper .swv-button:not([disabled]):hover {
    background: var(--swv-modal-button-hover-background-color);
}

.swv-modal-wrapper .swv-button:not([disabled]):focus-visible {
    outline-color: var(--swv-modal-button-outline-color);
}

.swv-modal-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    padding: 30px 60px;
    text-align: center;
}

@media (max-width: 374px) {
    .swv-modal-title {
        font-size: 18px;
    }
}

.swv-modal-list {
    margin: 0 0 12px 0;
    padding: 0;
    width: 100%;
    list-style: none;
}

.swv-modal-list .swv-button {
    font-weight: 400;
    border-radius: 0;
    font-size: 18px;
    justify-content: flex-start;
}

.swv-modal-list .swv-button .swv-wallet-status {
    color: var(--swv-modal-wallet-status-text-color);
    font-size: 16px;
    margin-left: auto;
}

.swv-modal-list .swv-button-icon,
.swv-modal-list .swv-button-icon img {
    width: 28px;
    height: 28px;
}
</style>