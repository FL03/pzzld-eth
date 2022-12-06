<script>
    import img from '$lib/assets/media/AbstractBlocks.png';
    export let title = "Welcome to Puzzled";
    export let subtitle = "";
</script>

<header class="flex items-center justify-center h-full">
    <div class="flex flex-auto px-3">
        <img alt="#" class="rounded max-w-md" src={img}/>
    </div>
    <section class="bg-zinc-800 flex flex-col flex-auto items-center justify-center p-3 rounded">
        <h1 class="prose prose-invert prose-h1">
            {title}
        </h1>
        <h2 class="prose prose-invert italic ">
            {subtitle}
        </h2>
        <p class="prose prose-invert">
            <slot/>
        </p>
    </section>
</header>

<style>
    h1 {
        font-size: xx-large;
    }
</style>