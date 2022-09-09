
import { error } from '@sveltejs/kit';
import { cb_exchange_api } from "./api";

/**
 * @typedef {{
 * uid: string;
 * created_at: Date;
 * text: string;
 * done: boolean;
 * pending_delete: boolean;
 * }} CoinbaseExchange
* /

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    // locals.userid comes from src/hooks.js
    const response = await cb_exchange_api('GET', `currencies`);

    if (response.status === 404) {
        return {
            /** @type {CoinbaseExchange[]} */
            coins: []
        };
    }

    if (response.status === 200) {
        return {
            /** @type {CoinbaseExchange[]} */
            coins: await response.json()
        };
    }

    throw error(response.status);
};