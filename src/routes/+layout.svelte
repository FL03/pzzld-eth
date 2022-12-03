<script>
	import Footer from '$lib/footer/Footer.svelte';
	import Navbar from '$lib/nav/navbar/Navbar.svelte';
	import Sidebar from '$lib/nav/sidebar/Sidebar.svelte';
	import Toolbar from '$lib/nav/toolbar/Toolbar.svelte';
	import '../app.css';
	let info = {
		tagline: "Welcome to my personal portfolio, powered by ENS",
		title: "pzzld.eth",
		pages: [
			{ endpoint: "/", label: "Home"},
			{ endpoint: "/about", label: "About"}
		]

    }
	let open = false;
</script>

<div class="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex flex-col items-center justify-center m-0 p-0 z-0 min-h-screen min-w-full max-w-screen">
	<Navbar name={info.title}>
	</Navbar>
	<div class="flex flex-col grow items-center justify-center min-h-full max-h-screen min-w-full max-w-screen z-0">
		<main class="container mx-auto">
			<slot/>
		</main>
	</div>
	
</div>
