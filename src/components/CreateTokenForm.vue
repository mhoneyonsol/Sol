<template>
  <div class="box flex flex-col mt-5 p-10 w-[550px]">
    <div class="ribbon"><span>mainnet 🟢</span></div>
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdwbTRzNWRoNDhsbnFlaW9sbjQ1NnpzOTdmbDlueWxvZzN2bnN0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cNTobeyDPsv9xUeAOR/giphy.webp" style="max-height: 40px; width: 100%; margin-top: -20px;">
    <div class="flex flex-row items-center justify-center">
      <input
        v-model="tokenName" placeholder="enter token name" label="token name"
        @input="clearError" />
    </div>
    <div class="flex flex-row items-center justify-center">
      <input
        v-model="tokenSymbol" placeholder="enter token symbol" label="token symbol"
        @input="clearError" />
    </div>
    <div class="flex flex-row items-center justify-center">
      <input
        v-model="metadataUri" placeholder="enter metadata uri" label="token uri"
        @input="clearError" />
    </div>
    <div class="flex flex-row items-center justify-center">
      <input type="number"
        v-model="tokenDecimals" placeholder="enter token decimals" label="token decimals"
        @input="clearError" />
    </div>
    <div class="flex flex-row items-center justify-center">
      <input type="number"
        v-model="totalSupply" placeholder="enter total supply" label="total supply"
        @input="clearError" />
    </div>
    
    <div class="flex flex-row">
      <div class="flex flex-row items-center justify-center mt-3 w-1/3">
        <label>Immutable:</label>
        <input type="checkbox" v-model="immutable" />
      </div>
      <div class="flex flex-row items-center justify-center mt-3 w-1/3">
        <label>Rmint:</label>
        <input type="checkbox" v-model="revokeMint" />
      </div>
      <div class="flex flex-row items-center justify-center mt-3 w-1/3">
        <label>Rfreeze:</label>
        <input type="checkbox" v-model="revokeFreeze" />
      </div>
    </div>

    <span v-if="errNotify != ''">{{ errNotify }} <button @click="clearError">×</button></span>
    <span v-if="successNotify != ''">{{ successNotify }}</span>
    <div class="ol flex flex-row items-center justify-center" style="margin-top: 40px;">
      <p>Connect wallet to begin</p>
    </div>
    <button v-if="connected" @click="handleClickAndCreateToken">
      Create Token ⛏️
    </button>
    <div class="coin-wrapper" ref="coinWrapper">
      <div ref="coin" class="coin coin-hidden">
        <div class="coin__middle"></div>
        <div class="coin__back"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/solana-6926590-5650872.png" alt="Solana Logo" class="solana-logo"></div>
        <div class="coin__front">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/solana-6926590-5650872.png" alt="Solana Logo" class="solana-logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useWallet, useAnchorWallet } from 'solana-wallets-vue';
import { Connection, LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram, Keypair, TransactionSignature } from '@solana/web3.js'
import { PROGRAM_ID, createCreateMetadataAccountV3Instruction } from '@metaplex-foundation/mpl-token-metadata'
import { MINT_SIZE, AuthorityType, TOKEN_PROGRAM_ID, createSetAuthorityInstruction, getMinimumBalanceForRentExemptMint, createInitializeMintInstruction, getAssociatedTokenAddress, createAssociatedTokenAccountInstruction, createMintToInstruction } from '@solana/spl-token';

const network = ref('mainnet-beta');
const tokenName = ref('');
const tokenSymbol = ref('');
const metadataUri = ref('');
const tokenDecimals = ref('');
const totalSupply = ref('');
const immutable = ref(false);
const revokeMint = ref(false);
const revokeFreeze = ref(true);
const errNotify = ref('');
const successNotify = ref('');

const wallet = useAnchorWallet();
const { connected, sendTransaction, publicKey } = useWallet();

const treasuryWallet = new PublicKey("EkE4u1KCSCvfJuCzodQmaJbzRFciEcFij1yqEW4GTtFy");

function clearError() {
  errNotify.value = '';
}

function validator() {
    if (!tokenName.value) {
        errNotify.value = "Please input token name";
        return false;
    }
    if (!tokenSymbol.value) {
        errNotify.value = "Please input token symbol";
        return false;
    }
    if (!tokenDecimals.value) {
        errNotify.value = "Please input token decimals";
        return false;
    }
    if (tokenDecimals.value > 9 || tokenDecimals.value < 0) {
        errNotify.value = "Decimals must be between 0 to 9";
        return false;
    }
    if (!totalSupply.value) {
        errNotify.value = "Please input total supply";
        return false;
    }
    return true;
}

const createToken = async () => {
    if (!validator()) return;
    if (!publicKey.value || !wallet.value) return;
    if(network.value == '') {
        errNotify.value = "Please select a network";
        return ;
    }
    let url;
    if(network.value == "mainnet-beta") {
        url = "https://solana-mainnet.g.alchemy.com/v2/S-I8WAhuHVa8lQdJaelKHsbmY0PQZAPh"
    } else {
        url = "https://api." + network.value + ".solana.com", "confirmed"
    }
    console.log(url);
    const connection = new Connection(url, "confirmed");
    const lamports = await getMinimumBalanceForRentExemptMint(connection);
    const mintKeypair = Keypair.generate();
    const tokenATA = await getAssociatedTokenAddress(mintKeypair.publicKey, publicKey.value);
    const metadata = PublicKey.findProgramAddressSync(
        [
            Buffer.from("metadata"),
            PROGRAM_ID.toBuffer(),
            mintKeypair.publicKey.toBuffer(),
        ],
        PROGRAM_ID,
    )[0];
    const createMetadataInstruction = createCreateMetadataAccountV3Instruction(
        {
            metadata: metadata,
            mint: mintKeypair.publicKey,
            mintAuthority: publicKey.value,
            payer: publicKey.value,
            updateAuthority: publicKey.value,
        },
        {
            createMetadataAccountArgsV3: {
                data: {
                    name: tokenName.value,
                    symbol: tokenSymbol.value,
                    uri: metadataUri.value,
                    creators: null,
                    sellerFeeBasisPoints: 0,
                    uses: null,
                    collection: null,
                },
                isMutable: !immutable.value,
                collectionDetails: null,
            },
        },
    );

    const transferAmount = 0.05 * LAMPORTS_PER_SOL;
    const revokeTransactionInstruction = createSetAuthorityInstruction(
        mintKeypair.publicKey, 
        publicKey.value, 
        AuthorityType.MintTokens, 
        null 
    )
    console.log(MINT_SIZE, lamports);
    const createNewTokenTransaction = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey: publicKey.value,
            newAccountPubkey: mintKeypair.publicKey,
            space: MINT_SIZE,
            lamports: lamports,
            programId: TOKEN_PROGRAM_ID,
        }),
        createInitializeMintInstruction(
            mintKeypair.publicKey,
            tokenDecimals.value,
            publicKey.value,
            revokeFreeze.value ? null : publicKey.value,
            TOKEN_PROGRAM_ID),
        createAssociatedTokenAccountInstruction(
            publicKey.value,
            tokenATA,
            publicKey.value,
            mintKeypair.publicKey,
        ),
        createMintToInstruction(
            mintKeypair.publicKey,
            tokenATA,
            publicKey.value,
            totalSupply.value * Math.pow(10, tokenDecimals.value),
        ),
        SystemProgram.transfer({
            fromPubkey: publicKey.value,
            toPubkey: treasuryWallet,
            lamports: transferAmount,
        }),
    );
    if (network.value != 'testnet') createNewTokenTransaction.add(createMetadataInstruction);
    if (revokeMint.value) createNewTokenTransaction.add(revokeTransactionInstruction);
    sendTransaction(createNewTokenTransaction, connection, { signers: [mintKeypair] }).then((signature: TransactionSignature) => {    
        successNotify.value = "Successfully minted " + totalSupply.value + " " + tokenSymbol.value + " (" + mintKeypair.publicKey + ") " + signature;
    });
}

const isClicked = ref(false);
const coin = ref(null);
const maxMoveLoopCount = 90;
let moveLoopCount = 0;
let maxFlipAngle = 0;
let sideRotationCount = 0;

const resetCoin = () => {
  if (coin.value) {
    coin.value.style.setProperty('--coin-x-multiplier', 0);
    coin.value.style.setProperty('--coin-scale-multiplier', 0);
    coin.value.style.setProperty('--coin-rotation-multiplier', 0);
    coin.value.style.setProperty('--shine-opacity-multiplier', 0.4);
    coin.value.style.setProperty('--shine-bg-multiplier', '50%');
    coin.value.style.setProperty('--coin-y-multiplier', 0);
    coin.value.style.setProperty('--front-scale-multiplier', 1);
    coin.value.style.setProperty('--front-y-multiplier', 0);
    coin.value.style.setProperty('--middle-scale-multiplier', 0);
    coin.value.style.setProperty('--middle-y-multiplier', 0);
    coin.value.style.setProperty('--back-scale-multiplier', 0);
    coin.value.style.setProperty('--back-y-multiplier', 0);
    coin.value.style.setProperty('opacity', 1);
    coin.value.classList.add('coin-hidden'); // Hide the coin after animation
  }
  setTimeout(() => {
    isClicked.value = false;
  }, 300);
};

const flipCoinLoop = () => {
  moveLoopCount++;
  let percentageCompleted = moveLoopCount / maxMoveLoopCount;
  let angle = -maxFlipAngle * Math.pow((percentageCompleted - 1), 2) + maxFlipAngle;
  if (coin.value) {
    coin.value.classList.remove('coin-hidden'); // Show the coin during animation

    coin.value.style.setProperty('--coin-y-multiplier', -11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11);
    coin.value.style.setProperty('--coin-x-multiplier', percentageCompleted);
    coin.value.style.setProperty('--coin-scale-multiplier', percentageCompleted * 0.6);
    coin.value.style.setProperty('--coin-rotation-multiplier', percentageCompleted * sideRotationCount);

    coin.value.style.setProperty('--front-scale-multiplier', Math.max(Math.cos(angle), 0));
    coin.value.style.setProperty('--front-y-multiplier', Math.sin(angle));
    coin.value.style.setProperty('--middle-scale-multiplier', Math.abs(Math.cos(angle), 0));
    coin.value.style.setProperty('--middle-y-multiplier', Math.cos((angle + Math.PI / 2) % Math.PI));
    coin.value.style.setProperty('--back-scale-multiplier', Math.max(Math.cos(angle - Math.PI), 0));
    coin.value.style.setProperty('--back-y-multiplier', Math.sin(angle - Math.PI));
    coin.value.style.setProperty('--shine-opacity-multiplier', 4 * Math.sin((angle + Math.PI / 2) % Math.PI) - 3.2);
    coin.value.style.setProperty('--shine-bg-multiplier', -40 * (Math.cos((angle + Math.PI / 2) % Math.PI) - 0.5) + '%');
  }
  if (moveLoopCount < maxMoveLoopCount) {
    if (moveLoopCount === maxMoveLoopCount - 6) {
      coin.value.classList.add('shrink-landing');
    }
    window.requestAnimationFrame(flipCoinLoop);
  } else {
    coin.value.classList.add('coin-landed');
    coin.value.style.setProperty('opacity', 0);
    setTimeout(() => {
      coin.value.classList.remove('shrink-landing', 'coin-landed');
      resetCoin();
    }, 1500);
  }
};

const handleClickAndCreateToken = () => {
  if (isClicked.value) return;
  isClicked.value = true;
  setTimeout(() => {
    sideRotationCount = Math.floor(Math.random() * 5) * 90;
    maxFlipAngle = (Math.floor(Math.random() * 4) + 3) * Math.PI;
    moveLoopCount = 0;  // Reset moveLoopCount
    flipCoinLoop();
    createToken();
  }, 50);
};

</script>

<style scoped>
.solana-logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.container {
  position: relative;
  cursor: pointer;
}

.container input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  width: 30px;
  height: 30px;
  position: relative;
  top: 0;
  left: 0;
  border: 2px solid #323232;
  border-radius: 5px;
  box-shadow: 4px 4px #323232;
  background-color: #ccc;
  transition: all 0.3s;
}

.container input:checked ~ .checkmark {
  background-color: #2d8cf0;
}

.checkmark:after {
  content: "";
  width: 7px;
  height: 15px;
  position: absolute;
  top: 2px;
  left: 8px;
  display: none;
  border: solid #fff;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.tooltip {
  position: absolute;
  display: inline-block;
  margin-left: 5px;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.info-icon {
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: #888;
}

.tip-button {
  background: none;
  margin-top: 150px;
  border: 0;
  border-radius: 0.25rem 0.25rem 0 0;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  height: 2.6rem;
  margin-bottom: -4rem;
  outline: 0;
  position: relative;
  top: 0;
  transform-origin: 0% 100%;
  transition: transform 50ms ease-in-out;
  width: 9.5rem;
  -webkit-tap-highlight-color: transparent;
}
.tip-button:active {
  transform: rotate(4deg);
}
.tip-button.clicked {
  animation: 150ms ease-in-out 1 shake;
  pointer-events: none;
}
.tip-button.clicked .tip-button__text {
  opacity: 0;
  transition: opacity 100ms linear 200ms;
}
.tip-button.clicked::before {
  height: 0.5rem;
  width: 60%;
}
.tip-button.clicked .coin {
  transition: margin-bottom 1s linear 200ms;
  margin-bottom: 0;
}
.tip-button.shrink-landing::before {
  transition: width 200ms ease-in;
  width: 0;
}
.tip-button.coin-landed::after {
  opacity: 1;
  transform: scale(1);
  transform-origin: 50% 100%;
}
.tip-button.coin-landed .coin-wrapper {
  background: radial-gradient(circle at 35% 97%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.04rem), radial-gradient(circle at 45% 92%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.02rem), radial-gradient(circle at 55% 98%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.04rem), radial-gradient(circle at 65% 96%, rgba(3, 16, 50, 0.4) 0.06rem, transparent 0.06rem);
  background-position: center bottom;
  background-size: 100%;
  bottom: -1rem;
  opacity: 0;
  transform: scale(2) translateY(-10px);
}
.tip-button__text {
  color: #fff;
  margin-right: 1.8rem;
  opacity: 1;
  position: relative;
  transition: opacity 100ms linear 500ms;
  z-index: 3;
}
.coin-hidden {
  display:none;
}
.tip-button::before {
  background: #031032;
  border-radius: 0.25rem;
  bottom: 0;
  content: "";
  display: block;
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: height 250ms ease-in-out 400ms, width 250ms ease-in-out 300ms;
  width: 100%;
  z-index: 2;
}
.tip-button::after {
  bottom: -1rem;
  color: #031032;
  content: "Thank you!";
  height: 110%;
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  text-align: center;
  transform: scale(0);
  transform-origin: 50% 20%;
  transition: transform 200ms cubic-bezier(0, 0, 0.35, 1.43);
  width: 100%;
  z-index: 1;
}

.coin-wrapper {
  background: none;
  bottom: 0;
  height: 28rem;
  left: 0;
  opacity: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: none;
  transform-origin: 50% 100%;
  transition: opacity 200ms linear 100ms, transform 300ms ease-out;
  width: 100%;
}


.coin {
  --front-y-multiplier: 0;
  --back-y-multiplier: 0;
  --coin-y-multiplier: 0;
  --coin-x-multiplier: 0;
  --coin-scale-multiplier: 0;
  --coin-rotation-multiplier: 0;
  --shine-opacity-multiplier: 0.4;
  --shine-bg-multiplier: 50%;
  bottom: calc(var(--coin-y-multiplier) * 1rem - 3.5rem ); 
  height: 3.5rem;
  margin-bottom: 3.05rem;
  position: absolute;
  right: calc(var(--coin-x-multiplier) * 34% + 16%);
  transform: translateX(50%) scale(calc(1.2 + var(--coin-scale-multiplier))) rotate(calc(var(--coin-rotation-multiplier) * -1deg));
  transition: opacity 50ms linear 200ms, transform 100ms linear 200ms;
  width: 3.5rem;
  z-index: 3;
  zoom:130%;
}
.coin__front, .coin__middle, .coin__back, .coin::before, .coin__front::after, .coin__back::after {
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
}
.coin__front {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%), linear-gradient(210deg, #8590b3 32%, transparent 32%), linear-gradient(150deg, #8590b3 32%, transparent 32%), linear-gradient(to right, #8590b3 22%, transparent 22%, transparent 78%, #8590b3 78%), linear-gradient(to bottom, #fcfaf9 44%, transparent 44%, transparent 65%, #fcfaf9 65%, #fcfaf9 71%, #8590b3 71%), linear-gradient(to right, transparent 28%, #fcfaf9 28%, #fcfaf9 34%, #8590b3 34%, #8590b3 40%, #fcfaf9 40%, #fcfaf9 47%, #8590b3 47%, #8590b3 53%, #fcfaf9 53%, #fcfaf9 60%, #8590b3 60%, #8590b3 66%, #fcfaf9 66%, #fcfaf9 72%, transparent 72%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--front-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--front-scale-multiplier));
}
.coin__front::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--front-y-multiplier);
}
.coin__middle {
  background: #737c99;
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--middle-scale-multiplier));
}
.coin__back {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%), radial-gradient(circle at 50% 40%, #fcfaf9 23%, transparent 23%), radial-gradient(circle at 50% 100%, #fcfaf9 35%, transparent 35%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--back-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--back-scale-multiplier));
}
.coin__back::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--back-y-multiplier);
}
.coin::before {
  background: radial-gradient(circle at 25% 65%, transparent 50%, rgba(255, 255, 255, 0.9) 90%), linear-gradient(55deg, transparent calc(var(--shine-bg-multiplier) + 0%), #e9f4ff calc(var(--shine-bg-multiplier) + 0%), transparent calc(var(--shine-bg-multiplier) + 50%));
  content: "";
  opacity: var(--shine-opacity-multiplier);
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / -2)) scaleY(var(--middle-scale-multiplier)) rotate(calc(var(--coin-rotation-multiplier) * 1deg));
  z-index: 10;
}
.coin::after {
  background: #737c99;
  content: "";
  height: 0.3181818182rem;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 2;
}

@keyframes shake {
  0% {
    transform: rotate(4deg);
  }
  66% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0);
  }
}

html,
:host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
     tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

body {
  margin: 0;
  line-height: inherit;
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

small {
  font-size: 80%;
}

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

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

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

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

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

.relative {
  position: relative;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-10 {
  margin-top: 2.5rem;
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
.h-5 {
  height: 1.25rem;
}
.h-screen {
  height: 100vh;
}
.w-1\/3 {
  width: 33.333333%;
  font-family: 'Sora';
  font-size: 0.9em;
}
.w-1\/4 {
  width: 25%;
}
.w-3\/4 {
  width: 55%;
  font-family: 'Sora';
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
.mb-4 {
  margin-bottom: 1rem;
}
.mt-10 {
  margin-top: 2.5rem;
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
.h-5 {
  height: 1.25rem;
}
.h-screen {
  height: 100vh;
}
.w-1\/3 {
  width: 33.333333%;
  font-family: 'Sora';
  font-size: 0.9em;
}
.w-1\/4 {
  width: 25%;
}
.w-3\/4 {
  width: 55%;
  font-family: 'Sora';
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
.break-words {
  overflow-wrap: break-word;
}
.uppercase {
  text-transform: uppercase;
}
</style>
