<template>
  <div>
    <w3m-button />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/vue";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "2ddac9090b846a6d08a48a50e1299e7a";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
});
</script>
