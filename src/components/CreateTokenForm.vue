<template>
  <div class="box flex flex-col mt-5 border border-gray-300 p-10 rounded-lg shadow-lg shadow-gray-500 w-[550px]">
    <div class="ribbon"><span>mainnet 🟢</span></div>
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdwbTRzNWRoNDhsbnFlaW9sbjQ1NnpzOTdmbDlueWxvZzN2bnN0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cNTobeyDPsv9xUeAOR/giphy.webp" style="max-height: 40px; width: 100%; margin-top: -20px;">
    
    <div class="flex flex-col space-y-2">
      <input v-model="tokenName" placeholder="Enter token name" @input="clearError" class="input"/>
      <input v-model="tokenSymbol" placeholder="Enter token symbol" @input="clearError" class="input"/>
      <input v-model="metadataUri" placeholder="Enter metadata URI" @input="clearError" class="input"/>
      <input type="number" v-model="tokenDecimals" placeholder="Enter token decimals" @input="clearError" class="input"/>
      <input type="number" v-model="totalSupply" placeholder="Enter total supply" @input="clearError" class="input"/>
    </div>
    
    <div class="flex flex-row mt-3">
      <div class="flex flex-row items-center justify-center w-1/3">
        <label class="label">Immutable:</label>
        <label class="container">
          <input type="checkbox" v-model="immutable" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="flex flex-row items-center justify-center w-1/3">
        <label class="label">Rmint:</label>
        <span class="tooltip">
          <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="tooltiptext">Revokes minting permission</span>
        </span>
        <label class="container">
          <input type="checkbox" v-model="revokeMint" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="flex flex-row items-center justify-center w-1/3">
        <label class="label">Rfreeze:</label>
        <span class="tooltip">
          <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="tooltiptext">Revokes freeze permission</span>
        </span>
        <label class="container">
          <input type="checkbox" v-model="revokeFreeze" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <span class="notification bg-red-400" v-if="errNotify">{{ errNotify }} <button @click="clearError" class="ml-4 font-bold">×</button></span>
    <span class="notification bg-green-400" v-if="successNotify">{{ successNotify }}</span>
    
    <div class="flex flex-row items-center justify-center mt-10">
      <p>Connect wallet to begin</p>
    </div>
    
    <button v-if="connected" @click="handleClickAndCreateToken" class="button-create-token">
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
        mintKeypair.publicKey, // mint acocunt || token account
        publicKey.value, // current auth
        AuthorityType.MintTokens, // authority type
        null // new auth (you can pass `null` to close it)
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
.input {
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 0.375rem;
  padding: 0.375rem 1rem;
  color: #111827;
  border: none;
  ring: 1px inset #d1d5db;
  placeholder: #9ca3af;
  focus-ring: 2px inset #6366f1;
}

.label {
  width: 3/4;
  font-family: 'Sora';
  font-size: 0.9em;
}

.notification {
  margin-top: 0.75rem;
  border-radius: 0.125rem;
  padding: 0.25rem 1.25rem;
}

.button-create-token {
  background: linear-gradient(to right, #2152ff, #21d4fd);
  color: white;
  font-bold;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  width: 100%;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  hover:scale-105;
  transition-duration: 100ms;
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
  border: 2px solid #323232;
  border-radius: 5px;
  box-shadow: 4px 4px #323232;
  background-color: #ccc;
  transition: all 0.3s;
}

.container input:checked ~ .checkmark {
  background-color: hsla(39,100%,68%,1);
}

.checkmark:after {
  content: "";
  width: 7px;
  height: 15px;
  position: absolute;
  display: none;
  border: solid white;
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

.solana-logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.coin-hidden {
  display: none;
}
</style>
