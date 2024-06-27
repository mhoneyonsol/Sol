<template>
  <form class="form">
    <p class="title">Create Token</p>
    <p class="message">Fill in the details to create your token.</p>
    
    <label>
      <input required v-model="tokenName" placeholder="" type="text" class="input" @input="clearError">
      <span>Token Name</span>
    </label>

    <label>
      <input required v-model="tokenSymbol" placeholder="" type="text" class="input" @input="clearError">
      <span>Token Symbol</span>
    </label>

    <label>
      <input required v-model="metadataUri" placeholder="" type="text" class="input" @input="clearError">
      <span>Metadata URI</span>
    </label>

    <label>
      <input required v-model="tokenDecimals" placeholder="" type="number" class="input" @input="clearError">
      <span>Token Decimals</span>
    </label>

    <label>
      <input required v-model="totalSupply" placeholder="" type="number" class="input" @input="clearError">
      <span>Total Supply</span>
    </label>
    
    <div class="flex">
      <label>
        <input type="checkbox" v-model="immutable">
        <span>Immutable</span>
      </label>
      <label>
        <input type="checkbox" v-model="revokeMint">
        <span>Rmint</span>
      </label>
      <label>
        <input type="checkbox" v-model="revokeFreeze">
        <span>Rfreeze</span>
      </label>
    </div>
    
    <span class="notification error" v-if="errNotify">{{ errNotify }} <button @click="clearError">×</button></span>
    <span class="notification success" v-if="successNotify">{{ successNotify }}</span>
    
    <button v-if="connected" @click="handleClickAndCreateToken" class="submit">Create Token ⛏️</button>
    <p class="signin">Connect wallet to begin</p>
    
    <div class="coin-wrapper" ref="coinWrapper">
      <div ref="coin" class="coin coin-hidden">
        <div class="coin__middle"></div>
        <div class="coin__back"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/solana-6926590-5650872.png" alt="Solana Logo" class="solana-logo"></div>
        <div class="coin__front"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/solana-6926590-5650872.png" alt="Solana Logo" class="solana-logo"></div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useWallet, useAnchorWallet } from 'solana-wallets-vue';
import { Connection, LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram, Keypair, TransactionSignature } from '@solana/web3.js';
import { PROGRAM_ID, createCreateMetadataAccountV3Instruction } from '@metaplex-foundation/mpl-token-metadata';
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
        url = "https://solana-mainnet.g.alchemy.com/v2/S-I8WAhuHVa8lQdJaelKHsbmY0PQZAPh";
    } else {
        url = "https://api." + network.value + ".solana.com";
    }
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
        mintKeypair.publicKey, // mint acocunt || token account
        publicKey.value, // current auth
        AuthorityType.MintTokens, // authority type
        null // new auth (you can pass `null` to close it)
    );
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

// Coin flip logic
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

const handleClickAndCreateToken = (e: Event) => {
  e.preventDefault();
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
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before, .title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span, .form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

.notification {
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
}

.notification.error {
  background-color: #f8d7da;
  color: #721c24;
}

.notification.success {
  background-color: #d4edda;
  color: #155724;
}

.solana-logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  transition: opacity 50ms linear 200ms, transform 100ms linear 200ms; /* Add transform transition for smooth movement */
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

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
