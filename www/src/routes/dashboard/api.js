import { defaultEvmStores } from "svelte-web3";


export function login_wallet() {
    defaultEvmStores.setProvider()
}
