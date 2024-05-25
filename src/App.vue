<script setup lang="ts">
import CreateTokenForm from "./components/CreateTokenForm.vue";
import Chatbot from './components/Chatbot-1.vue';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { initWallet, WalletMultiButton } from 'solana-wallets-vue'
import "solana-wallets-vue/styles.css";
import "./assets/index.scss";

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
]
initWallet({ wallets, autoConnect: true })
</script>

<template>








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


<div class="accordion">
    <h1>Frequently Asked Questions</h1>
    <div class="accordion-item">
        <input type="checkbox" id="accordion1">
        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>What is an SPL token?</label>
        <div class="accordion-item-desc">An SPL (Solana Program Library) token is a digital asset built on the Solana blockchain that adheres to the SPL token standard. It allows for the creation, transfer, and management of custom tokens on the Solana network.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion2">
        <label for="accordion2" class="accordion-item-title"><span class="icon"></span>How do I create an SPL token?</label>
        <div class="accordion-item-desc">To create an SPL token, you can use our secured tool.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion3">
        <label for="accordion3" class="accordion-item-title"><span class="icon"></span>What are the advantages of using SPL tokens?</label>
        <div class="accordion-item-desc">SPL tokens offer several advantages including high transaction throughput, low fees, fast confirmation times, and seamless integration with other Solana-based applications. They also benefit from Solana's robust infrastructure and growing ecosystem.

</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion4">
        <label for="accordion4" class="accordion-item-title"><span class="icon"></span>Can I convert other tokens to SPL tokens?</label>
        <div class="accordion-item-desc">Yes, you can convert other tokens to SPL tokens by using bridges or decentralized exchanges (DEXs) that support token swapping between different blockchain networks. Additionally, you can create wrapped versions of tokens on the Solana blockchain through custodial or decentralized solutions.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion5">
        <label for="accordion5" class="accordion-item-title"><span class="icon"></span>How do I ensure the security of my SPL token project?</label>
        <div class="accordion-item-desc">Ensuring the security of your SPL token project involves rigorous code audits, adherence to best practices in smart contract development, and robust security measures such as multi-signature wallets and access controls. It's also essential to stay updated on security vulnerabilities and patches within the Solana ecosystem. Additionally, consider utilizing third-party security services for further validation and assurance.</div>
    </div>

</div>
<br>
  <div id="app">
    <Chatbot />
  </div>
</template>





    







































