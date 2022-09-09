<script>

    /** @type {import('./$types').PageData} */
	export let data;
	$: coins = data.coins;
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>


<section class="container mx-auto bg-slate-200 ">
    {#each coins as coin}
        <span class="flex">
            
            {coin.name} ({coin.id})
        </span>
    {/each}
</section>