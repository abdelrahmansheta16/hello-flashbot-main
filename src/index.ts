import { providers, Wallet } from "ethers";
import {
  FlashbotsBundleProvider,
  FlashbotsBundleResolution,
} from "@flashbots/ethers-provider-bundle";

const GWEI = 10n ** 9n;
const ETHER = 10n ** 18n;

const CHAIN_ID = 5; // goerli
const FLASHBOTS_ENDPOINT = "https://relay-goerli.flashbots.net";

const provider = new providers.JsonRpcProvider({
  // @ts-ignore
  url: process.env.ETH_RPC_URL,
});