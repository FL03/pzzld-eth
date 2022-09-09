import { defaultEvmStores } from "svelte-web3";


/**
 * @param {string} method
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 */
export function cb_exchange_api(method, resource, data) {
    const base = 'https://api.exchange.coinbase.com';
    return fetch(`${base}/${resource}`, {
        method,
        headers: {
            'content-type': 'application/json'
        },
        body: data && JSON.stringify(data)
    });
}

export function login_wallet() {
    defaultEvmStores.setProvider()
}