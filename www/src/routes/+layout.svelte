<script>
	import Footer from '$lib/footer/Footer.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../app.css';
	let info = {
		tagline: "Welcome to my personal portfolio, powered by ENS",
		title: "pzzld.eth",
		pages: [
			{ endpoint: "/", label: "Home"},
			{ endpoint: "/about", label: "About"},
			{ endpoint: "/dashboard", label: "Dashboard"}
		]

    }
</script>

<div class="flex min-h-screen m-0 p-0">
	<div class="flex-1 bg-slate-400 dark:bg-slate-800">
		<Navbar tagline={info.tagline} title={info.title} pages={info.pages}/>
		<div class="container mx-auto">
			<main class="flex my-16 p-3">
				<slot />
			</main>
		</div>
		<Footer/>
	</div>
</div>


<style>
	
</style>
