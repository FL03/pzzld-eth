<script>
	let bio = {
		header: {
			heading: "Welcome my Portfolio",
			subtitle: "I am a full-stack blockchain engineer actively advancing and engaging my company Scattered-Systems, LLC",
			data: [
				"akl", "sgf"
			]
		}
	}
	let frame = {
		description: "Welcome to pzzld.eth, I am a full-stack blockchain engineer currently advancing the efforts of my company, Scattered-Systems, LLC"
	}
</script>

<svelte:head>
	<title>pzzld.eth</title>
	<meta name="description" content="{frame.description}" />
</svelte:head>

<section class="flex-1">
	<div class="container mx-auto min-h-full text-black dark:text-white content-center mt-3 py-3">
		<h1 class="heading text-bold py-1">
			{bio.header.heading}
		</h1>
		<h2 class="subheading text-bold py-1">
			{bio.header.subtitle}
		</h2>
		<p class="py-1">
			{#each bio.header.data as i}
				<span class = "flex flex-1" >{i}</span>
			{/each}

		</p>
	</div>
</section>


<style>
	section {
		min-height: 100vh;
	}
	.block {
		display: block
	}
	.heading {
		font-size: xx-large;
		font-style: normal;
	}
	.subheading {
		font-size: x-large;
		font-style: italic;
	}
</style>
