import adapter_node from '@sveltejs/adapter-node';
import adapter_static from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";


const config = {
	kit: {
		...(process.env.MODE === "container") && {
			adapter: adapter_node()
		},
		...(process.env.MODE !== "container") && {
			adapter: adapter_static()
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
